const express = require("express");
const app = express();
const validatorHandler = require('./middlewares/validatorHandler')
const PORT = 3000;
const routerApi = require("./routes/routerApi.js");
const faker = require("@faker-js/faker");
const {logErrors,errorHandler,boomErrorHandler} = require("./middlewares/errorHandler.js");
const sequelize = require('./db/sequelize.js')
const Products = require('./models/Products.js')
const User = require('./models/User.js')
sequelize.sync()
app.use(express.urlencoded({extended:true}))
app.get("/products", (req, res) => {
  res.json({
    id,
    name: "Producto 2",
    price: 2000,
  });
});
// (async ()=>{
//   try {
//     await User.create({username:"Fabricio",birthday:"4/5/2007"})
//   } catch (error) {
//     console.log(error)
//   }
// })()
routerApi(app);
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
app.listen(PORT, () => {
  console.log("Server listen on http://localhost:" + PORT + "/api/v1/");
});
