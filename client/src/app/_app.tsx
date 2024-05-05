import type { AppProps } from 'next/app'
const M = require('materialize-css/dist/js/materialize');

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}