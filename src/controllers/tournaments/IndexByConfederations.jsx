import prisma from '@/controllers/_helpers/prisma.jsx' // eslint-disable-line
import handleErrors from '@/controllers/_helpers/handleErrors.jsx' // eslint-disable-line

const controllersApiTournamentsIndexByConfederations = async (req, res) => {
  try {
    const foundConfederations = await prisma.confederation.findMany({
      include: {
        tournaments: {
          orderBy: {
            order: 'asc'
          }
        }
      },
      orderBy: {
        order: 'asc'
      }
    })

    return res.status(200).json({
      confederations: foundConfederations
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiTournamentsIndexByConfederations

// const { tournament } = confederations
