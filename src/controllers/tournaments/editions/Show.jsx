import prisma from '@/controllers/_helpers/prisma.jsx' // eslint-disable-line
import handleErrors from '@/controllers/_helpers/handleErrors.jsx' // eslint-disable-line

const controllersApiTournamentsEditionsShow = async (req, res) => {
  try {
    const foundEdition = await prisma.edition.findFirst({
      where: {
        id: Number(req.query.editionId),
        tournamentId: Number(req.query.tournamentId)
      },
      include: {
        tournament: {
          include: {
            confederation: true
          }
        }
        // groups: {
        //   include: {
        //     teamsOnGroups: {
        //       team: {
        //         include: {
        //           confederation: true
        //         }
        //       }
        //     }
        //   }
        // }
      },
      rejectOnNotFound: true
    })

    return res.status(200).json({
      edition: foundEdition
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiTournamentsEditionsShow
