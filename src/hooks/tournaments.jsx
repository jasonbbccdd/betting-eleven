import useSWR from 'swr'
import { useRouter } from 'next/router'
import { fetcher } from './_utils'

export default function useTournaments() {
  const { query: { page }, isReady } = useRouter()
  const { data, error } = useSWR(isReady ? ['/api/tournaments', { page: Number(page) || 1 }] : null, fetcher)
  console.log(data)

  return {
    meta: data?.meta,
    tournaments: data?.tournaments || [],
    isLoading: !error && data,
    isError: error,
    errorMessage: error?.response?.data?.message
  }
}
