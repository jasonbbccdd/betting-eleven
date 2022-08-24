import useTournaments from '@/hooks/tournaments'
import Head from 'next/head'
import Table from 'react-bootstrap/Table'

// function getConfederationDisplayOrder(confederation) {
//   const confederationDisplayOrder = {
//     FIFA: 0,
//     UEFA: 1,
//     CONMEBOL: 2,
//     CONCACAF: 3,
//     CAF: 4,
//     AFC: 5,
//     OFC: 6
//   }[confederation]
//   return confederationDisplayOrder || 999
// }

function PagesTournamentsIndex() {
  const { tournaments, isLoading, isError, errorMessage } = useTournaments()

  if (isLoading) return <div className="text-white text-center">Loading ...</div>
  if (isError) return <div>{errorMessage}</div>

  const confederations = []
  tournaments.forEach((tournament) => {
    const { confederation: { code } } = tournament
    confederations.push(code)
  })

  const confederationList = [...new Set(confederations)]

  return (
    <div id="pages-tournaments-index" className="container-fluid">
      <Head>
        <title>Tournaments</title>
      </Head>
      <h1 className="border border-5 border-danger text-danger text-center">Tournaments</h1>
      <div>
        {
          confederationList.map((confederation) => (
            <div>
              <h4 className="border text-warning">{confederation}</h4>
              <div className="d-flex mb-5">
                {
                  tournaments
                    .filter((tournament) => tournament.confederation.code === confederation)
                    .map((tournament) => (
                      <div key={tournament.id}>
                        <h4 className="text-info mx-5">{tournament.name}</h4>
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

export default PagesTournamentsIndex
