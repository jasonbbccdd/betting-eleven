import useSWR from 'swr'
import { fetcher } from './_utils'

export default function useTournamentsByConfederations() {
  const { data, error } = useSWR('/api/tournaments-by-confederations', fetcher)

  return {
    meta: data?.meta,
    confederations: data?.confederations || [],
    isLoading: !error && !data,
    isError: error,
    errorMessage: error?.response?.data?.message
  }
}
