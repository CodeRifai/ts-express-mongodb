import Joi, { ValidationResult } from 'joi'

interface ProductInterface {
  id: number
  nama_product: string
  spesifikasi: string
  harga: number
}

export const createProductValidation = (payload: ProductInterface): ValidationResult => {
  const schema = Joi.object({
    id: Joi.number().required(),
    nama_product: Joi.string().required(),
    spesifikasi: Joi.string().required(),
    harga: Joi.number().allow(null)
  })
  return schema.validate(payload)
}
