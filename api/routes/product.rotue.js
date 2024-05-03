import  express  from "express";

import { Productcreate,  deleteProduct,  getProudct,  getallproduct,  updateProduct,  } from "../controller/Product.controller.js";


const router = express.Router();

router.post('/Ccreate',  Productcreate);
router.get('/getall',  getallproduct);
router.get('/getproduct/:shopId', getProudct);
router.put('/product/:ProdctId',  updateProduct);
router.delete('/deleteC/:ProductId', deleteProduct);


export default router;