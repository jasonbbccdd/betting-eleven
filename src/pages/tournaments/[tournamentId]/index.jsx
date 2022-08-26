import { useRouter } from 'next/router'
import { useEffect } from 'react'

function PagesTournamentsShow() {
  const { push } = useRouter()

  useEffect(() => {
    push('/tournaments')
  }, [])

  return null
}

export default PagesTournamentsShow
