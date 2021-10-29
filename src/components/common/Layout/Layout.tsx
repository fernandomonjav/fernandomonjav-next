import Head from 'next/head'
import { Footer, Header } from '~/components/common'

const Layout: React.FC = (props) => {
  const { children } = props

  return (
    <>
      <Head>
        <title>Fernando Monja Vasquez</title>
      </Head>

      <Header />

      {children}

      <Footer />
    </>
  )
}

export const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>

export default Layout
