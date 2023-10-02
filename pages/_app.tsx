import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return(<>
  <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-3X96TE4DNH"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3X96TE4DNH', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
  <Component {...pageProps} /></>)
}

export default MyApp
