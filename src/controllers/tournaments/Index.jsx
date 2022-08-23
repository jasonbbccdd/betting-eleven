import prisma from '@/controllers/_helpers/prisma.jsx' // eslint-disable-line
import handleErrors from '@/controllers/_helpers/handleErrors.jsx' // eslint-disable-line

const controllersApiTournamentsIndex = async (req, res) => {
  try {
    const foundTournaments = await prisma.tournament.findMany({
      distinct: ['code'],
      include: {
        confederation: {
          select: {
            code: true
          }
        }
      },
      orderBy: {
        code: 'desc'
      }
    })

    return res.status(200).json({
      tournaments: foundTournaments
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiTournamentsIndex
