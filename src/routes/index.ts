// src/routes/index.ts
import { Router } from 'express'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import questionRouter from './question.routes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/questions', questionRouter)

export default router