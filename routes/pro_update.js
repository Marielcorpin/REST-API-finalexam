import express from 'express'
import { getPro_update, getPro_updates, addPro_update, updatePro_update, deletePro_update } from '../controllers/pro_update.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergePrams: true})

router.get('/', verifyToken, getPro_update)
router.get('/:id', verifyToken, getPro_updates)
router.post('/', verifyToken, addPro_update)
router.put('/:id', verifyToken, updatePro_update)
router.delete('/:id', verifyToken, deletePro_update)

export default router
