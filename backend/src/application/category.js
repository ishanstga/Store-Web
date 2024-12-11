import NotFoundError from "../domain/errors/not-found-error.js";
import category from "../insfastructure/schemas/category.js";

export const getCategories = async (req, res, next) => {
  try {
    const categoryData = await category.find({});
    return res.status(200).json(categoryData).send();
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    await category.create(req.body);
    return res
      .status(201)
      .json({ massege: "New category created successfully." })
      .send();
  } catch (error) {
    next(error);
  }
};

export const getCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const categoryData = await category.findById(id);
    if (!categoryData) {
      throw new NotFoundError("category not found");
    }

    return res.status(200).json(categoryData).send();
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Category = await category.findByIdAndDelete(id);

    if (!Category) {
      throw new NotFoundError("Category not found");
    }
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const Category = await category.findByIdAndUpdate(id, req.body);

    if (!Category) {
      throw new NotFoundError("Category not found");
    }

    return res.status(200).send({massege:"Category updated successfully."});
  } catch (error) {
    next(error);
  }
};
