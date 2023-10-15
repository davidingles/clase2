import express from 'express'
import rutasIndex from './routes/index.routes.js'
import rutasDeEmpleados from './routes/empleados.routes.js'
const app = express()

app.use(express.json())
app.use(rutasIndex)
app.use(rutasDeEmpleados)

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' })
})

export default app
