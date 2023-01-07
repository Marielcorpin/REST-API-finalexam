import express from 'express'
import { getDescription, getDescriptions, addDescription, updateDescription, deleteDescription } from '../controllers/description.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergePrams: true})

router.get('/', verifyToken, getDescription)
router.get('/:id', verifyToken, getDescriptions)
router.post('/', verifyToken, addDescription)
router.put('/:id', verifyToken, updateDescription)
router.delete('/:id', verifyToken, deleteDescription)

export default router
