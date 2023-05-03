import { Application, Router } from 'express'
import { productsRouter } from './products'

const _router: Array<[string, Router]> = [['/products', productsRouter]]

const routes = (app: Application): void => {
  _router.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}

export default routes
