const express=require('express')

const router=express.Router()

const {
    getAllproducts,
    postProduct,
    updateProduct,
    deleteProduct
  }=require('../controllers/blog.controller')
  

router.get('/',getAllproducts)

router.post('/',postProduct)

router.put('/:id',updateProduct)

router.delete('/:id',deleteProduct)
module.exports=router