import PublicLayout from '@/components/layouts/PublicLayout'
import Head from 'next/head'

export default function Home() {
  return (
    <PublicLayout>
      <Head>
        <title>Electric Billing App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </PublicLayout>
  )
}
