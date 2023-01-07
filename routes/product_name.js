import express from 'express'
import { getProduct_name, getProduct_names, addProduct_name, updateProduct_name, deleteProduct_name } from '../controllers/product_name.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergePrams: true})

router.get('/', verifyToken, getProduct_name)
router.get('/:id', verifyToken, getProduct_names)
router.post('/', verifyToken, addProduct_name)
router.put('/:id', verifyToken, updateProduct_name)
router.delete('/:id', verifyToken, deleteProduct_name)

export default router
