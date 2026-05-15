import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h1>404 - Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">Back to home</Link>
    </div>
  )
}