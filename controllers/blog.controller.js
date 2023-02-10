// MODEL - USER
const Products = require("../models/product.model");

const getAllproducts = async (req, res) => {
  const result = await Products.find({});
  return res.status(200).json(result);
};

const postProduct = async (req, res) => {
  const { title, description, image } = req.body;
  const result = await Products.create({
    title: title,
    description: description,
    image: image,
  });
  return res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const { title, description, image } = req.body;
  const result = await Products.findOneAndUpdate({_id:id},{
    title: title,
    description: description,
    image: image,
  })
  console.log(result);
  return await res.status(200).json(result)
};

const deleteProduct =async (req, res) => {
    const id = req.params.id;
    
    const result = await Products.findOneAndDelete({_id:id})
    console.log(result);
    return await res.status(200).json({"msg":"Deleted successfully"})
};

module.exports = {
  getAllproducts,
  postProduct,
  updateProduct,
  deleteProduct,
};
