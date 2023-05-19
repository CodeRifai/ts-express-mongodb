import { Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validation/products'

interface Product {
  id: number
  namaProduct: string
  spesifikasi: string
  harga: number
}

const products: Product[] = [
  {
    id: 1,
    namaProduct: 'Oppo A37',
    spesifikasi: 'Kamera 16/5, Memori 2/32, OS Android 8',
    harga: 850000
  },
  {
    id: 2,
    namaProduct: 'Redmi MI A1',
    spesifikasi: 'Kamera 16/8, Memori 4/64, OS Android ONE',
    harga: 900000
  }
]

export const createProduct = (req: Request, res: Response): void => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR: Product - create =', error.details[0].message)
    res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
    return
  }
  logger.info('Success add new products')
  res.status(200).send({ status: true, statusCode: 200, message: 'successfully added new product', data: value })
}

export const getAllProducts = (req: Request, res: Response): void => {
  logger.info('Request to get all products')
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: products
  })
}

export const getProductsById = (req: Request, res: Response): void => {
  const productId = parseInt(req.params.id)

  const product = products.find((p) => p.id === productId)

  if (!product) {
    logger.warn(`Product with ID ${productId} not found`)
    res.status(404).send({
      status: false,
      statusCode: 404,
      message: 'Product not found'
    })
    return
  }
  logger.info(`Request to get product with ID ${productId}`)
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: product
  })
}

export const getProductsByName = (req: Request, res: Response): void => {
  const productName = req.params.name.toLowerCase()

  const filteredProducts = products.filter((p) => p.namaProduct.toLowerCase().includes(productName))

  if (filteredProducts.length === 0) {
    logger.warn(`No product found with name ${productName}`)
    res.status(404).send({
      status: false,
      statusCode: 404,
      message: 'Product not found'
    })
    return
  }
  logger.info(`Request to get products with name ${productName}`)
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: filteredProducts
  })
}

export const updateProduct = (req: Request, res: Response): void => {
  const productId = parseInt(req.params.id)
  const { namaProduct, spesifikasi, harga } = req.body

  const productIndex = products.findIndex((p) => p.id === productId)

  if (productIndex === -1) {
    logger.warn(`Product with ID ${productId} not found`)
    res.status(404).send({
      status: false,
      statusCode: 404,
      message: 'Product not found'
    })
    return
  }

  products[productIndex] = {
    id: productId,
    namaProduct: namaProduct || products[productIndex].namaProduct,
    spesifikasi: spesifikasi || products[productIndex].spesifikasi,
    harga: harga || products[productIndex].harga
  }

  logger.info(`Successfully updated product with ID ${productId}`)
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Successfully updated product',
    data: products[productIndex]
  })
}

export const deleteProduct = (req: Request, res: Response): void => {
  const productId = parseInt(req.params.id)

  const productIndex = products.findIndex((p) => p.id === productId)

  if (productIndex === -1) {
    logger.warn(`Product with ID ${productId} not found`)
    res.status(404).send({
      status: false,
      statusCode: 404,
      message: 'Product not found'
    })
    return
  }

  const deletedProduct = products.splice(productIndex, 1)[0]

  logger.info(`Successfully deleted product with ID ${productId}`)
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Successfully deleted product',
    data: deletedProduct
  })
}
