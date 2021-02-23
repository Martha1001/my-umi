import * as Router from 'koa-router'
import request from '../middleware/request'

const serviceName = 'trans'
const router = new Router({ prefix: `/api/${serviceName}` })

router.get('(.*)', request(serviceName))
router.post('(.*)', request(serviceName))

export default router
