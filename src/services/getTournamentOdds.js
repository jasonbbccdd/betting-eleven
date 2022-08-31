import axios from 'axios'
// import handleErrors from '../controllers/_helpers/handleErrors.jsx' // eslint-disable-line

const apiUrl = 'https://bet.hkjc.com/football/getJSON.aspx?jsontype=tournament.aspx&tournid=50003675'

const getTournamentData = async (URL) => {
  try {
    const resp = await axios({
      method: 'GET',
      url: URL
    })
    return (resp.data)
  } catch (err) {
    // return handleErrors(resp, err)
    // return Promise.reject(err)
    return err.response
  }
  //   if (err.response) {
  //     console.log(err.response.data)
  //     console.log(err.response.status)
  //     console.log(err.response.headers)

  //   } else if (err.request) {
  //     console.log(err.request)
  //   } else {
  //     console.log('Error', err.message)
  //   }
  //   console.log(err.config)
  // }
}

const tournamentData = await getTournamentData(apiUrl)

const genTournamentChampionPool = (pool) => {
  const {
    POOLID: poolId,
    POOLSTATUS: isSelling,
    INPLAY: isPlaying,
    ExpectedStopTime: stopSellingTime,
    NAMELIST: teamsArray,
    SELLIST: oddsArray
  } = pool

  console.log(oddsArray.sort((a, b) => (Number(a.SEL) > Number(b.SEL) ? 1 : -1)).map((odds) => ({
    ...odds,
    ODDS: Number(odds.ODDS.replace('100@', '')).toFixed(2)
  })))
}

const genTournamentOddsPage = (data) => {
  const { 0: tournament } = data
  const {
    tournamentID: tournamentId,
    tournamentShortName: tournamentCode,
    tournamentNameEN,
    tournamentNameCH,
    displayOrder: tournamentDisplayOrder,
    chpodds: tournamentChampionOdds,
    gpwodds: tournamentGroupWinnersOdds
  } = tournament

  const tournamentChampionPool = genTournamentChampionPool(tournamentChampionOdds)

  // const tournamentPools = []

  // tournamentPools.push(tournamentChampionPool)
  // console.log(tournamentChampionOdds)
  // console.log(tournamentGroupWinnersOdds)
}

genTournamentOddsPage(tournamentData)
