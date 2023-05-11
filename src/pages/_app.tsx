import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Preloader } from '@/ui/preloader'

export default function App({ Component, pageProps }: AppProps) {

  const [preload, setPreload] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setPreload(false)
    }, 1000)
  }, [])

  return preload ? (
    <Preloader />
  ) : (
    <Component {...pageProps} />
  )
}