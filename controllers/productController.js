import express from 'express';
import Product from '../modules/Product';
export const getProducts = async (req, res) => {
   try {
    const product = await Product.find();
    return res.status(200).json({
        data: product
    })
   } catch (err) {
    return res.status(500).json({
        status: 'error',
        data: err.message
    })
   }
}

export const getProduct = (req,res) => {
    return res.status(200).json({
        data: 'get single product'
    })
}


export const createProduct = (req,res) => {
    return res.status(200).json({
        data: 'Add product'
    })
}

export const updateProduct = (req,res) => {
    return res.status(200).json({
        data: 'updateProduct'
    })
}

export const deleteProduct = (req,res) => {
    return res.status(200).json({
        data: 'get single product'
    })
}


export default productController;