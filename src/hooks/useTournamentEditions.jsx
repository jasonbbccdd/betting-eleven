import useSWR from 'swr'
import { useRouter } from 'next/router'
import { fetcher } from './_utils'

export default function useTournamentEditions() {
  const { query: { tournamentId }, isReady } = useRouter()
  const { data, error } = useSWR(isReady ? `/api/tournaments/${tournamentId}` : null, fetcher)

  return {
    meta: data?.meta,
    tournaments: data?.tournaments || [],
    isLoading: !error && !data,
    isError: error,
    errorMessage: error?.response?.data?.message
  }
}
