import * as Router from 'koa-router'
import renderIndex from '../middleware/renderIndex'
import test from './test'

const router = new Router()

router.use(test.routes())

router.get('/', renderIndex)
router.get('/index', renderIndex)

export default router
