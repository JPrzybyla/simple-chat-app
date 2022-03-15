import '../styles/globals.css'
import Headers from "../components/Head";

function MyApp({ Component, pageProps }) {
  return(
      <>
        <Headers/>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
