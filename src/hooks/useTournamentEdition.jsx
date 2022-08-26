import useSWR from 'swr'
import { useRouter } from 'next/router'
import { fetcher } from './_utils'

export default function useTournamentEdition() {
  const { query: { tournamentId, editionId }, isReady } = useRouter()
  const { data, error } = useSWR(isReady ? `/api/tournaments/${tournamentId}/editions/${editionId}` : null, fetcher)

  return {
    meta: data?.meta,
    edition: data?.edition || [],
    isLoading: !error && !data,
    isError: error,
    errorMessage: error?.response?.data?.message
  }
}
