import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import Header from '@/components/header'
import Footer from '@/components/footer'

const url = 'https://example.com'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <DefaultSeo
        dangerouslySetAllPagesToNoFollow
        dangerouslySetAllPagesToNoIndex
        canonical={`${url}${router.asPath}`}
        defaultTitle="Your Name"
        openGraph={{
          type: 'website',
          locale: router.locale,
          url,
          site_name: 'Your Name',
        }}
        additionalMetaTags={[{
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        }, {
          httpEquiv: 'x-ua-compatible',
          content: 'IE=edge',
        }]}
      />
      <div className="min-h-screen">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
