import  express  from "express";
import { verifyToken } from '../utils/VerfiyUser.js';
import { Bookcreate, deleteBook, getBook, updateBook } from "../controller/bookshop.controller.js";


const router = express.Router();

router.post('/Bookcreate',  Bookcreate);
router.get('/bgetAll', getBook);
router.put('/book/:bookId',  updateBook);
router.delete('/deleteb/:boookId',  deleteBook);


export default router;