import express, { Application } from 'express'
import routes from './routes/routes'
import { logger } from './utils/logger'
import bodyParser from 'body-parser'
import cors from 'cors'

const app: Application = express()
const PORT: number = 3000

// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors access handler
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

routes(app)

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`)
})
