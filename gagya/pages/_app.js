import Layout from '../Components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps, words }) {
  console.log(words)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )  
}

export default MyApp
