const express = require("express");
const productsService = require("../services/productsService");
const service = new productsService();
const boom = require("@hapi/boom");
const validatorHandler = require('../middlewares/validatorHandler');
const { createProductSchema } = require("../schemas/productSchema");
const router = express.Router();
router.get("/", async (req, res, next) => {
  try {
    const response = await service.findAll();
    res.send(response);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await service.findOne(id);
    if (!response) {
      throw boom.notFound("Producto no encontrado!");
    }
  } catch (error) {
    next(error);
  }
});
router.put("/:id", async(req,res,next)=>{
    try {
        const {id} = req.params;
        const body = req.body
        const resolve = await service.updateOne(id,body)
        res.send(resolve)
    } catch (error) {
        next(error)
    }
})
router.post("/",validatorHandler(createProductSchema,"body"),async(req,res,next)=>{
    try {
        const body = req.body
        await service.create(body)
        res.send("Correcto")
    } catch (error) {
        next(error)
    }
})
module.exports = router;
