import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { createContext, MutableRefObject, ReactNode, useEffect, useRef } from 'react'
import { BASIC_TEXT_COLOR, PRIMARY_TEXT_COLOR, TABLET_MIN_WIDTH } from 'src/models/constants'
import { pageview } from 'src/utils/google-analytics'
import styled, { createGlobalStyle } from 'styled-components'
import { ToastContainer, cssTransition } from 'react-toastify'
import { Test } from './api/tests'

import 'antd/dist/antd.css'
import 'src/styles/custom-antd.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'animate.css/animate.min.css'
import 'normalize.css'

export const fade = cssTransition({
  enter: 'animate__animated animate__fadeIn',
  exit: 'animate__animated animate__fadeOut',
})

const GlobalStyle = createGlobalStyle`
  html, 
  body {
    font-size: 16px;
    @media (max-width: ${TABLET_MIN_WIDTH}) {
      font-size: 14px;
    }
  }

  body {
    padding: 0;
    background-color: #FFDCDC;
    color: ${BASIC_TEXT_COLOR};
    font-family: 'Noto Sans KR', 'Noto Sans', -apple-system, BlinkMacSystemFont,
      'Helvetica Neue', sans-serif;
    line-height: normal;
    word-break: keep-all;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    list-style-type: none
  }

  a {
    color: ${PRIMARY_TEXT_COLOR};
    font-weight: 500;
    text-decoration: none;
    transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    :hover {
      color: ${BASIC_TEXT_COLOR};
    }
  }
`

type GlobalContextValues = MutableRefObject<Test[]>

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const GlobalContext = createContext<GlobalContextValues>(undefined!)

function GlobalProvider({ children }: { children: ReactNode }) {
  const tests = useRef<Test[]>([])

  return <GlobalContext.Provider value={tests}>{children}</GlobalContext.Provider>
}

const MaxWidth = styled.main`
  max-width: ${TABLET_MIN_WIDTH};
  margin: 0 auto;
`

function MoigosaApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Google Analytics로 정보 보내기
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = (url: string) => pageview(url)
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <GlobalProvider>
        <MaxWidth>
          <Component {...pageProps} />
        </MaxWidth>
      </GlobalProvider>
      <ToastContainer autoClose={2500} hideProgressBar position="top-center" transition={fade} />
    </>
  )
}

export default MoigosaApp
