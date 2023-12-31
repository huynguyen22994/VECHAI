import "bootstrap/dist/css/bootstrap.css"
import '@/styles/globals.css'

import { useEffect } from "react"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.css")
  }, []);
  return <Component {...pageProps} />
}
