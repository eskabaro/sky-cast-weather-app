import { Home } from "@/screens/home"
import { Preloader } from "@/ui/preloader"
import { useEffect, useState } from "react"

export default function HomePage() {

  const [preload, setPreload] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setPreload(false)
    }, 1000)
  }, [])

  return preload ? (
    <Preloader />
  ) : (
    <Home />
  )
}
