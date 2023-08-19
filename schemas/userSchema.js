const Joi = require('joi')
const username = Joi.string().min(4).max(25)
const birthday = Joi.string()
const id = Joi.string().uuid()
const createUserSchema = Joi.object({
    username:username.required(),
    birthday:birthday.required()
})
const deleteUserSchema = Joi.object({
    id:id.required()
})
const getUserSchema = Joi.object({
    id:id.required()
})
const updateUserSchema = Joi.object({
    username:username,
    birthday:birthday,
})
module.exports = {
    createUserSchema,
    deleteUserSchema,
    getUserSchema,
    updateUserSchema
}