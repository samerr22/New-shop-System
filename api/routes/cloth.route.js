import  express  from "express";
import { verifyToken } from '../utils/VerfiyUser.js';
import { clothcreate, deletecloth, getcloth, updatecloth } from "../controller/cloth.controller.js";


const router = express.Router();

router.post('/Ccreate',  clothcreate);
router.get('/CgetAll', getcloth);
router.put('/cloth/:clothId',  updatecloth);
router.delete('/deleteC/:cloothId', deletecloth);


export default router;