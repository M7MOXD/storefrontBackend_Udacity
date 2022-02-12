// import express { Request, Response }
import { Request, Response } from 'express';

// import class, interface
import { ProductClass, ProductInterface } from '../models/product';

// create instance from ProductClass
const newProduct = new ProductClass();

// create method
export const create = async (req: Request, res: Response) => {
  try {
    const result = await newProduct.create(req.body);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// index method
export const index = async (_req: Request, res: Response) => {
  try {
    const result = await newProduct.index();
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// show method
export const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await newProduct.show(id);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// update method
export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await newProduct.update(id, req.body);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// remove method
export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await newProduct.delete(id);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};
