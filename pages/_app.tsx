import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import Layout from '../components/Layout';
import Head from 'next/head'
import DatabaseContextProvider from '../contexts/DatabaseContext';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{
      colors: {
        brand: ["#EBFBEE", "#D3F9D8", "#B2F2BB", "#8CE99A", "#69DB7C", "#51CF66", "#40C057", "#37B24D", "#2F9E44", "#2B8A3E"],
        // theme.colors.dark[7] is body background color which got a shade darker
        dark: ["#C1C2C5", "#C1C2C5", "#909296", "#5C5F66", "#373A40", "#2C2E33", "#25262B", "#141517", "#141517", "#101113"],
      },
      primaryColor: "brand",
      colorScheme: "light"
    }} withGlobalStyles withNormalizeCSS>
      <DatabaseContextProvider>
        {/* layout contains header and footer */}
        <Layout>
          <Head>
            <title>EcoTrack</title>
            <meta name="description" content="lorem ipsum!" />
            <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
            <link
              rel="icon"
              href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌲</text></svg>"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </DatabaseContextProvider>
    </MantineProvider>
  )
}
