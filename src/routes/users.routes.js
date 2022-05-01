import { Router } from 'express'
import { getUser, getUsers, removeUser,addUser, updateUser }  from '../controllers/users.controllers'

const router = Router()

router.get('/:id',getUser)
router.get('/',getUsers)
router.post('/',addUser)
router.put('/:id',updateUser)
router.delete('/:id',removeUser)

export default router