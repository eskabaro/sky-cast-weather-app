// import Image from 'next/image'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="preload" as="image" href="/backg.jpeg" type="image/jpeg" />
    </Head>
    <Component {...pageProps} />
  </>
}
