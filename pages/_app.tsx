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
        brand: ["#FFF5F5", "#FFE3E3", "#FFC9C9", "#FFA8A8", "#FF8787", "#FF6B6B", "#FA5252", "#F03E3E", "#E03131", "#C92A2A"],
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
            <title>Verkehrssense</title>
            <meta name="description" content="lorem ipsum!" />
            <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1" />
            <link
              rel="icon"
              href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍞</text></svg>"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </DatabaseContextProvider>
    </MantineProvider>
  )
}
