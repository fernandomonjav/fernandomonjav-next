import { NextSeo } from 'next-seo'
import { Footer, Header } from '~/components/common'

const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL

const Layout: React.FC = (props) => {
  const { children } = props

  return (
    <>
      <NextSeo
        title="Fernando Monja Vasquez"
        description="Developing technological tools that facilitate the activities performed by people."
        openGraph={{
          images: [
            {
              url: `${NEXT_PUBLIC_URL}/static/cover.png`,
              alt: 'Fernando Monja Vasquez',
            },
          ],
          type: 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@fernandomonjav',
          handle: '@fernandomonjav',
        }}
      />

      <Header />

      {children}

      <Footer />
    </>
  )
}

export const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>

export default Layout
