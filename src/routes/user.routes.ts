import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { authMiddleware } from '../middlewares/authMiddleware';
import { validateDTO } from '../middlewares/validateDTO';

const router = Router()
const controller = new UserController()

router.delete('/me', authMiddleware,controller.removeById.bind(controller));

router.get('/me', authMiddleware, controller.getById.bind(controller))

router.get('/', controller.findAll.bind(controller))

router.get('/ranking', controller.ranking.bind(controller))
router.put('/me/update', authMiddleware, controller.update.bind(controller))

router.put('/me/score', authMiddleware, controller.score.bind(controller))


export default router
