import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'
import { appWithTranslation } from 'next-i18next'
import CompsLayoutsNavbar from '@/components/layouts/Navbar'

import appWithSession from '@/hoc/appWithSession'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
  // <>
    <SessionProvider session={session}>
      <CompsLayoutsNavbar />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </SessionProvider>
  // </>
  )
}

export default appWithSession(appWithTranslation(MyApp))
