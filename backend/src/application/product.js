import NotFoundError from "../domain/errors/not-found-error.js";
import product from "../insfastructure/schemas/product.js";

export const getProducts = async (req, res, next) => {
  try {
    const productData = await product.find({});
    return res.status(200).json(productData).send();
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    await product.create(req.body);
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const productData = await product.findById(id);
    if (!productData) {
      throw new NotFoundError("Product not found");
    }

    return res.status(200).json(productData).send();
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Product = await product.findByIdAndDelete(id);

    if (!Product) {
      throw new NotFoundError("Product not found");
    }
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Product = await product.findByIdAndUpdate(id, req.body);

    if (!Product) {
      throw new NotFoundError("Product not found");
    }

    return res.status(200).send(Product);
  } catch (error) {
    next(error);
  }
};
