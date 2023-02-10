const express=require('express')
const passport = require('passport')

const router=express.Router()

const {signUpUser,signInUser}=require('../controllers/auth.controller')


const cookieSession=require('cookie-session')

router.use(
    cookieSession({
      name: 'intern',
      maxAge: 24 * 60 * 60 * 1000,
      keys: ['hdggjfdghd', 'key2']
    })
  )
  



router.post('/signup',signUpUser)

router.post('/signin',signInUser)

router.get('/success',(req,res)=>{
    res.send('succeess')
})


module.exports=router