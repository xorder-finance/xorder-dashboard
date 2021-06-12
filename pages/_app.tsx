import type {AppProps} from 'next/app'

import Head from 'next/head'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {theme} from '../components/design/theme'
import {commonCss} from '../components/design/common-css'
import {store} from "../state/store";
import {Provider} from "react-redux";
import {Web3Provider} from "../components/providers/web3-provider";

const GlobalStyle = createGlobalStyle`
  ${commonCss()}
`

const ReText = ({Component, pageProps}: AppProps) => {
    return <Provider store={store}>
        <GlobalStyle/>
        <Head>
            <title>Pied piper work</title>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1"/>
        </Head>
        <Web3Provider>
            <ThemeProvider theme={theme}>
                <Component {...pageProps}/>
            </ThemeProvider>
        </Web3Provider>
    </Provider>
}

export default ReText