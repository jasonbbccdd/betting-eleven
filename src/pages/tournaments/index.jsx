import Head from 'next/head'
import Link from 'next/link'
import useTournamentsByConfederations from '@/hooks/useTournamentsByConfederations'

function PagesTournamentsIndexByConfederations() {
  const { confederations, isLoading, isError, errorMessage } = useTournamentsByConfederations()

  if (isLoading) return <div className="text-white text-center">Loading ...</div>
  if (isError) return <div>{errorMessage}</div>

  return (
    <div id="pages-confederations-index" className="container-fluid">
      <Head>
        <title>Confederation Tournaments</title>
      </Head>
      <h1 className="border border-5 border-danger text-danger text-center">Confederation Tournaments</h1>
      <div>
        {
          confederations.map((confederation) => (
            <div key={confederation.id}>
              <h4 className="border text-warning">{confederation.code}</h4>
              <div className="d-flex mb-5">
                {
                  confederation.tournaments.map((tournament) => (
                    <div key={tournament.id}>
                      <Link href={`/tournaments/${tournament.id}/editions`}><a><h4 className="text-info mx-5">{tournament.name}</h4></a></Link>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PagesTournamentsIndexByConfederations
