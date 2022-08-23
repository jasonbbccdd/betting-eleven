import Client from '@prisma/client'

const prisma = new Client.PrismaClient()

const deleteSession = async () => {
  await prisma.user.deleteMany({})
  await prisma.verificationToken.deleteMany({})
}
const genConfederations = async () => {
  const promises = []
  const confederationsList = [
    ['FIFA', '', '', ''],
    ['UEFA', '', '', ''],
    ['CONMEBOL', '', '', ''],
    ['CONCACAF', '', '', ''],
    ['CAF', '', '', ''],
    ['AFC', '', '', ''],
    ['OFC', '', '', '']
  ]

  await prisma.confederation.deleteMany({})
  for (let i = 0; i < confederationsList.length; i += 1) {
    promises.push(prisma.confederation.create({
      data: {
        code: confederationsList[i][0],
        name: confederationsList[i][1],
        logo: confederationsList[i][2],
        map: confederationsList[i][3]
      }
    }))
  }

  await Promise.all(promises)
}

const clearAllTournament = async () => {
  await prisma.tournament.deleteMany({})
  // await prisma.team.deleteMany({})
}

const genTournamentWorldCup = async () => {
  const tournamentData = {
    code: 'WC',
    name: 'World Cup',
    logo: '',
    type: 'International',
    confederation: {
      connect: {
        code: 'FIFA'
      }
    }
  }
  await prisma.tournament.create({
    data: tournamentData
  })
}

const genTournamentEuro = async () => {
  const tournamentData = {
    code: 'EURO',
    name: 'Euro',
    logo: '',
    type: 'International',
    confederation: {
      connect: {
        code: 'UEFA'
      }
    }
  }
  await prisma.tournament.create({
    data: tournamentData
  })
}

const genTournamentNationsLeague = async () => {
  const tournamentData = {
    code: 'NL',
    name: 'Nations League',
    logo: '',
    type: 'International',
    confederation: {
      connect: {
        code: 'UEFA'
      }
    }
  }
  await prisma.tournament.create({
    data: tournamentData
  })
}

const genTournamentCopaAmerica = async () => {
  const tournamentData = {
    code: 'CA',
    name: 'Copa America',
    logo: '',
    type: 'International',
    confederation: {
      connect: {
        code: 'CONMEBOL'
      }
    }
  }
  await prisma.tournament.create({
    data: tournamentData
  })
}

const genTournamentGoldCup = async () => {
  const tournamentData = {
    code: 'GC',
    name: 'Gold Cup',
    logo: '',
    type: 'International',
    confederation: {
      connect: {
        code: 'CONCACAF'
      }
    }
  }
  await prisma.tournament.create({
    data: tournamentData
  })
}

const genTournamentAfricaCup = async () => {
  const tournamentData = {
    code: 'AFC',
    name: 'Africa Cup of Nations',
    logo: '',
    type: 'International',
    confederation: {
      connect: {
        code: 'CAF'
      }
    }
  }
  await prisma.tournament.create({
    data: tournamentData
  })
}

const genTournamentAsianCup = async () => {
  const tournamentData = {
    code: 'ASC',
    name: 'Asian Cup',
    logo: '',
    type: 'International',
    confederation: {
      connect: {
        code: 'AFC'
      }
    }
  }
  await prisma.tournament.create({
    data: tournamentData
  })
}

const genTournamentEastAsianChampionship = async () => {
  const tournamentData = {
    code: 'EAC',
    name: 'East Asian Championship',
    logo: '',
    type: 'International',
    confederation: {
      connect: {
        code: 'AFC'
      }
    }
  }
  await prisma.tournament.create({
    data: tournamentData
  })
}

const genTournamentChampionsLeague = async () => {
  const tournamentData = {
    code: 'CL',
    name: 'Champions League',
    logo: '',
    type: 'Cup',
    confederation: {
      connect: {
        code: 'UEFA'
      }
    }
  }
  await prisma.tournament.create({
    data: tournamentData
  })
}

const genTournamentEuropaLeague = async () => {
  const tournamentData = {
    code: 'EL',
    name: 'Europa League',
    logo: '',
    type: 'Cup',
    confederation: {
      connect: {
        code: 'UEFA'
      }
    }
  }
  await prisma.tournament.create({
    data: tournamentData
  })
}

const genTournamentEuropaConferenceLeague = async () => {
  const tournamentData = {
    code: 'ECL',
    name: 'Europa Conference League',
    logo: '',
    type: 'Cup',
    confederation: {
      connect: {
        code: 'UEFA'
      }
    }
  }
  await prisma.tournament.create({
    data: tournamentData
  })
}

const genTournamentInternational = async () => {
  await genTournamentWorldCup()
  await genTournamentEuro()
  await genTournamentNationsLeague()
  await genTournamentCopaAmerica()
  await genTournamentGoldCup()
  await genTournamentAfricaCup()
  await genTournamentAsianCup()
  await genTournamentEastAsianChampionship()
}

const genTournamentCup = async () => {
  await genTournamentChampionsLeague()
  await genTournamentEuropaLeague()
  await genTournamentEuropaConferenceLeague()
}

const seed = async () => {
  await deleteSession()
  await genConfederations()
  await clearAllTournament()
  await genTournamentInternational()
  await genTournamentCup()
}

seed()
