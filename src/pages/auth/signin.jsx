import { signIn, getCsrfToken, getProviders } from 'next-auth/react'
import Image from 'next/image'
import Header from '@/components/layouts/Header'
import styles from '@/styles/signin.module.css'

const Signin = ({ csrfToken, providers }) => (
  <div style={{ overflow: 'hidden', position: 'relative' }}>
    <Header />
    <div className={styles.wrapper} />
    <div className={styles.content}>
      <div className={styles.cardWrapper}>
        <Image src="/katalog_full.svg" width="196px" height="64px" alt="Logo" style={{ height: '85px', marginBottom: '20px' }} />
        <div className={styles.cardContent}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <input placeholder="Email" size="large" />
          <button type="button" className={styles.primaryBtn}>
            Submit
          </button>
          <hr />
          { providers
              && Object.values(providers).map((provider) => (
                <div key={provider.name} styles={{ marginBottom: 0 }}>
                  <button type="button" onClick={() => signIn(provider.id)}>
                    Sign in With{' '} {provider.name}
                  </button>
                </div>
              ))}
        </div>
      </div>
    </div>
    <img src="/login_pattern.svg" alt="Background" layout="fill" className={styles.styledPattern} />
  </div>
)

export default Signin

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: {
      providers,
      csrfToken
    }
  }
}
