import { Router, Request, Response, NextFunction } from 'express'

export const productsRouter: Router = Router()

const products = [
  {
    id: 1,
    nama_product: 'Oppo A37',
    spesifikasi: 'Kamera 16/5, Memori 2/32, OS Android 8',
    harga: 850000
  },
  {
    id: 2,
    nama_product: 'Redmi MI A1',
    spesifikasi: 'Kamera 16/8, Memori 4/64, OS Android ONE',
    harga: 900000
  }
]

productsRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: products
  })
})

productsRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  const productId = parseInt(req.params.id)

  const product = products.find((p) => p.id === productId)

  if (!product) {
    return res.status(404).send({
      status: false,
      statusCode: 404,
      message: 'Product not found'
    })
  }

  res.status(200).send({
    status: true,
    statusCode: 200,
    data: product
  })
})

productsRouter.get('/name/:name', (req: Request, res: Response, next: NextFunction) => {
  const productName = req.params.name.toLowerCase()

  const filteredProducts = products.filter((p) => p.nama_product.toLowerCase().includes(productName))

  if (filteredProducts.length === 0) {
    return res.status(404).send({
      status: false,
      statusCode: 404,
      message: 'Product not found'
    })
  }

  res.status(200).send({
    status: true,
    statusCode: 200,
    data: filteredProducts
  })
})
