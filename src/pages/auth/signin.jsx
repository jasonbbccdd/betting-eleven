import Image from 'next/image'
import { useState } from 'react'
import { signIn, getProviders } from 'next-auth/react'
import { useRouter } from 'next/router'

import styles from '@/styles/signin.module.css'

const Signin = ({ providers }) => {
  const [email, setEmail] = useState('')
  const router = useRouter()

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <div className={styles.wrapper} />
      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <Image src="/katalog_full.svg" width="196px" height="64px" alt="Logo" style={{ height: '85px', marginBottom: '20px' }} />

          <div className={styles.cardContent}>
            {
              router.query.error === 'OAuthAccountNotLinked' && (
                <div className="bg-danger text-white p-2 mb-3">To confirm your identity, sign in with the same account you used originally.</div>
              )
            }

            <input placeholder="Email" size="large" onChange={(e) => setEmail(e.target.value)} value={email} />
            <button type="button" className={styles.primaryBtn} onClick={() => signIn('email', { email, callbackUrl: '/' })}>Sign in With Email</button>

            <hr />

            {
              providers && Object.values(providers).filter((provider) => provider.id !== 'email').map((provider) => (
                <div key={provider.name} style={{ marginBottom: 0 }}>
                  <button type="button" onClick={() => signIn(provider.id, { callbackUrl: '/' })}>Sign in With {provider.name}</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Image src="/login_pattern.svg" width="100vw" height="100vh" alt="Background" layout="fill" className={styles.styledPattern} />
    </div>
  )
}

export default Signin

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers
    }
  }
}
