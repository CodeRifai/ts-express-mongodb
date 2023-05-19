import { Router } from 'express'
import {
  getAllProducts,
  getProductsById,
  getProductsByName,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/products'

export const productsRouter: Router = Router()

productsRouter.get('/', getAllProducts)
productsRouter.get('/:id', getProductsById)
productsRouter.get('/name/:name', getProductsByName)
productsRouter.post('/', createProduct)
productsRouter.put('/:id', updateProduct)
productsRouter.delete('/:id', deleteProduct)

export default productsRouter
