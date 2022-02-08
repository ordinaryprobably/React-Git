import { TodoProvider } from '../Components/Contexts/todo.context'
import Layout from '../Components/Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </Layout>
  )
}

export default MyApp
