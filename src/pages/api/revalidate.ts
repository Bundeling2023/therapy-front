import { NextApiRequest, NextApiResponse } from "next";
import { parseStringPromise } from "xml2js";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }
    
    const sitemapPath = '/sitemap.xml';
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const xmlUrl = `${protocol}://${req.headers.host}${sitemapPath}`;

    try {
        if(req.query.path) {
            await res.revalidate(req.query.path.toString());
            return res.status(200).json({ message: 'Revalidation successful.', paths: req.query.path });
        }

        const response = await fetch(xmlUrl);
        const xmlText = await response.text();

        const parsedData = await parseStringPromise(xmlText);
        const urls = parsedData.urlset.url;
        const errors = [];
        const success = [];

        // Loop through each URL in the XML and call revalidate
        for (const urlEntry of urls) {            
            let path = ''
            
            try {
                path = urlEntry?.loc?.[0]
                if(!path) continue;

                const parsedUrl = new URL(path);
                path = parsedUrl?.pathname;

                if(!path) continue;
                
                await res.revalidate(path);     
                success.push(path);
            } catch (error) {
                errors.push(path);
            }       
        }

        if(errors.length > 0) {            
            console.error(`Revalidation failed for ${errors.length} paths:`, errors);
            return res.status(500).json({ error: 'An error occurred while revalidating paths.', paths: errors });
        }

        return res.status(200).json({ message: 'Revalidation successful.', paths: success });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while revalidating paths.', message: error });
    }}

