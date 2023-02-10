const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    title:String,
    description:String,
    image:String
})

const Products=mongoose.model('Product',productSchema)


module.exports=Products