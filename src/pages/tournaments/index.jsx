import useTournaments from '@/hooks/tournaments'
import Head from 'next/head'

function PagesTournamentsIndex() {
  const { tournaments, meta, isLoading, isError, errorMessage } = useTournaments()

  return (
    <>
      <h1 className="text-center">Tournaments</h1>
      <Head>
        <title>Tournaments</title>
      </Head>
      {
        tournaments.map((tournament) => (
          <div key={tournament.id}>
            {tournament.confederation.code} {tournament.name}
          </div>
        ))
      }
    </>

  )
}

export default PagesTournamentsIndex
