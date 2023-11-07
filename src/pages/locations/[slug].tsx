import { useRouter } from 'next/router';
import { useEffect } from 'react';

function LocationPage() {
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        if (slug) {
            router.replace(`/locaties#${slug}`, undefined, { shallow: true });
        }
    }, [router, slug])


    return null;
}

export default LocationPage;