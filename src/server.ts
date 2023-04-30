import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
const PORT: number = 3000

app.use('/test', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ status: 'OK' })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
