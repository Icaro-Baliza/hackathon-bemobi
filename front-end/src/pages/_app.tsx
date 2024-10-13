import type { AppProps } from "next/app";

import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/globals'
import theme from '../styles/theme'

import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <NavBar/>
    <SideBar/>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
