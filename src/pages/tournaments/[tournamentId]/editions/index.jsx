import Head from 'next/head'
import useTournamentEditions from '@/hooks/useTournamentEditions'

function PagesTournamentsEditionsIndex() {
  const { tournament, isLoading, isError, errorMessage } = useTournamentEditions()

  if (isLoading) return <div className="text-white text-center">Loading ...</div>
  if (isError) return <div>{errorMessage}</div>

  console.log(tournament) // eslint-disable-line

  return (
    <div id="pages-confederations-index" className="container-fluid">
      <Head>
        <title>Tournament Editions</title>
      </Head>

      <h1 className="border border-5 border-danger text-danger text-center">Editions</h1>

      {/* /tournaments/:tournamentId/editions/:editionId */}
    </div>
  )
}

export default PagesTournamentsEditionsIndex
