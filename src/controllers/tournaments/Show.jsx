import prisma from '@/controllers/_helpers/prisma.jsx' // eslint-disable-line
import handleErrors from '@/controllers/_helpers/handleErrors.jsx' // eslint-disable-line

const controllersApiTournamentsShow = async (req, res) => {
  try {
    const foundTournament = await prisma.tournament.findUnique({
      where: { id: Number(req.query.tournamentId) },
      include: {
        confederation: true
        // editions: true
      },
      rejectOnNotFound: true
    })

    return res.status(200).json({
      tournament: foundTournament
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiTournamentsShow
