import User from '../database/database'

export async function addUser (req,res)  {

  const user = new User({
    email: req.body.email,
    fullname: req.body.fullname
  })

  user.password = await user.encryptPassword(req.body.password)
  await user.save()
  
  return res.status(200).send(user)

}

export async function removeUser (req,res) {
  console.log('Removing ',req.params.id)
  const user = await User.deleteOne({"_id": req.params.id})
  console.log(user)
  if(user.deletedCount === 0) 
    return res.status(203).send('User Not Found')
  else  
    return res.status(200).send('User deleted successfully')
}

export async function updateUser (req,res) {
  const {fullname,email,password} = req.body
  const id = req.params.id

  console.log(id)

  const user = await User.findById(id)
  console.log(user)
  if(!user) return res.status(203).send('User Not Found')

  if(fullname) user.fullname = fullname
  if(email) user.email = email
  if(password) user.password = await user.encryptPassword(password)

  await user.save()

  return res.status(200).send(user)
}

export async function getUser (req,res) {
  const user = await User.findById(req.params.id)
  if(user)
    return res.status(200).send(user)
  else
    return res.status(203).send('User not found')
}

export async function getUsers(req,res) {
  

  const users = await User.find()
  return res.status(200).send(users)
}