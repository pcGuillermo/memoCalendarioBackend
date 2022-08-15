import Product from "../models/Product"

export  const createProduct = async (req, res)=>{
  const {title, backgroundColor, start, end, user}=req.body;
  const newProduct = new Product({title, backgroundColor, start, end, user})
  const productSaved = await newProduct.save();
  res.status(201).json(productSaved);
}

export  const getProducts = async (req, res)=>{
  const { userId } = req.params;
  const product = await Product.find({ user: { $in: userId } });
  res.status(201).json(product);

}

export  const getProductByID = async (req, res)=>{
  const { productId } = req.params;
  const product = await Product.findById(productId);
  res.status(200).json(product);
}

export  const updateProductByID = async (req, res)=>{
  const { productId } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(productId, req.body,{
    new:true
  });
  res.status(200).json(updatedProduct)
}

export  const deleteProductByID = async (req, res)=>{
  const { productId } = req.params;
  await Product.findByIdAndDelete(productId);
  res.status(204).json();
    
}