import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { authMiddleware } from '../middlewares/authMiddleware';
import { validateDTO } from '../middlewares/validateDTO';
import { QuestionController } from '../controllers/QuestionController';

const questionRouter = Router()
const controller = new QuestionController()

questionRouter.get('/:id', controller.getById.bind(controller));
questionRouter.get('/', controller.list.bind(controller));
// LIST: normalmente só admin podem listar todos os usuários
// router.get('/', controller.list.bind(controller));

// // PROFILE do usuário logado
// // Lê as infos
// router.get('/me', authMiddleware,controller.getById.bind(controller))
// // Atualiza as infos
// router.put('/me', authMiddleware, controller.update.bind(controller))
// // Remove
// router.delete('/me', authMiddleware ,controller.remove.bind(controller))

// CREATE: permite cadastro de novo usuário (não precisa estar logado)
// questionRouter.post('/', controller.create.bind(controller))

export default questionRouter
