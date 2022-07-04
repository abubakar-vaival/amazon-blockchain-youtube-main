import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { AmazonProvider } from '../context/AmazonContext'
import { ModalProvider } from 'react-simple-hook-modal'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.REACT_APP__MORALIS_SERVER}
      appId={process.env.REACT_APP__MORALIS_APP_ID}
    >
      <AmazonProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </AmazonProvider>
    </MoralisProvider>
  )
}

export default MyApp
