import { AppProps } from 'next/app'
import '~/styles/main.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
