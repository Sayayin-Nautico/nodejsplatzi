
const { where } = require("sequelize");
const Products = require("../models/Products");
class productsService {
  constructor() {}
  async findAll() {
    return await Products.findAll();
  }
  async findOne(id) {
    return await Products.findByPk(id);
  }
  async updateOne(id,body) {
    const product = await Products.findByPk(id)
    Products.update(product,{where:{id}})
  }
  async create(body){
    return await Products.create(body)
  }
}
module.exports = productsService;
