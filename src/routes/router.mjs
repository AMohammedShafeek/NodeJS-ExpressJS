import { Router } from 'express'
import usersRouter from './routes/users'
import productsRouter from './routes/products.mjs'

const router = Router()

app.use(usersRouter)
app.use(productsRouter)

export default router