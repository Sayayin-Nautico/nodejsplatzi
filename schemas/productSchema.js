const Joi = require('joi')
const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10)
const description = Joi.string().min(5).max(225)
const picture = Joi.string().min(4).max(70)

const createProductSchema = Joi.object({
    name: name.required(),
    price:price.required(),
    description:description.required(),
    picture:picture,
})
const updateProductSchema = Joi.object({
    name: name,
    price:price,
    description:description,
    picture:picture
})
const getProductSchema = Joi.object({
    id:id.required()
})
module.exports = {createProductSchema,updateProductSchema,getProductSchema}