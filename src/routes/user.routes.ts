import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { authMiddleware } from '../middlewares/authMiddleware';
import { validateDTO } from '../middlewares/validateDTO';

const router = Router()
const controller = new UserController()

// LIST: normalmente só admin podem listar todos os usuários
// router.get('/', controller.list.bind(controller));

// // PROFILE do usuário logado
// // Lê as infos
router.get('/me', authMiddleware,controller.getById.bind(controller))
// // Atualiza as infos
// router.put('/me', authMiddleware, controller.update.bind(controller))
// // Remove
// router.delete('/me', authMiddleware ,controller.remove.bind(controller))

// CREATE: permite cadastro de novo usuário (não precisa estar logado)
router.post('/', controller.create.bind(controller))
router.put('/me/score', authMiddleware, controller.score.bind(controller))

export default router
