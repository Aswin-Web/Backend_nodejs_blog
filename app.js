const express=require('express')
const blogRoutes=require('./routes/blog')
const authRoutes=require('./routes/auth')
const connectMongo=require('./utils/mongodb.connect')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const app=express()



connectMongo();

app.use(express.json())

app.use(cookieParser());

app.use('/auth',authRoutes)

app.use('/blog',blogRoutes)


module.exports=app

