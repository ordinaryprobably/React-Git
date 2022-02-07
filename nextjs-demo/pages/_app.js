import '../styles/globals.css'
import Layout from './components/Layout'

/**
 * MyApp 의 매개변수 속 Component 가 렌더링 될 페이지 js 파일이다.
 * 
 * 예를 들어, about.js 페이지를 띄운다면 
 * myApp({ Component: about, pageProps: {} }); 이렇게 된다.
 * 
 */

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
