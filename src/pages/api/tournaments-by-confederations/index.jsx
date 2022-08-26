import nc from '@/controllers/_helpers/nc'
import controllersApiTournamentsIndexByConfederations from '@/controllers/tournaments/IndexByConfederations'

export default nc()
  .get(controllersApiTournamentsIndexByConfederations)
