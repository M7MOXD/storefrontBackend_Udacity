// import express { Request, Response }
import { Request, Response } from 'express';

// import class, interface
// product
import { ProductClass, ProductInterface } from '../models/product';

// create instance from ProductClass
const newProduct = new ProductClass();

// order
import { OrderClass, OrderInterface } from '../models/order';

// create instance from OrderClass
const newOrder = new OrderClass();

// orderProducts
import {
  OrderProductsClass,
  OrderProductsInterface
} from '../models/order_products';

// create instance from OrderProductsClass
const newOrderProducts = new OrderProductsClass();

// create method
export const create = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const pID = req.params.id;
    const order: any = await newOrder.currentRecord(id);
    const oID = order.id;
    const exist = await newOrderProducts.show(pID, oID);
    if (!exist) {
      const result = await newOrderProducts.create({
        product_id: pID,
        order_id: oID,
        quantity: req.body.quantity
      });
      let totalprice = 0;
      (await newOrderProducts.cart(oID)).forEach(
        (x) => (totalprice += x.price * x.quantity)
      );
      await newOrder.update(id, { totalprice });
      return res.send(result);
    }
    const result = await newOrderProducts.update(pID, oID, {
      quantity: req.body.quantity || 1
    });
    let totalprice = 0;
    (await newOrderProducts.cart(oID)).forEach(
      (x) => (totalprice += x.price * x.quantity)
    );
    await newOrder.update(id, { totalprice });
    return res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// show method
export const show = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const pID = req.params.id;
    const order: any = await newOrder.currentRecord(id);
    const oID = order.id;
    const result = await newOrderProducts.show(pID, oID);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// cart method
export const cart = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await newOrderProducts.cart(id);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// current record method
export const currentRecord = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const order: any = await newOrder.currentRecord(id);
    const oID = order.id;
    const result = await newOrderProducts.cart(oID);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// update method
export const update = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const pID = req.params.id;
    const order: any = await newOrder.currentRecord(id);
    const oID = order.id;
    const result = await newOrderProducts.update(pID, oID, req.body);
    let totalprice = 0;
    (await newOrderProducts.cart(oID)).forEach(
      (x) => (totalprice += x.price * x.quantity)
    );
    await newOrder.update(id, { totalprice });
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// complete method
export const complete = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const result = await newOrder.update(id, { status: 'Complete' });
    await newOrder.create(id);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// remove method
export const remove = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const pID = req.params.id;
    const order: any = await newOrder.currentRecord(id);
    const oID = order.id;
    const result = await newOrderProducts.delete(pID, oID);
    let totalprice = 0;
    (await newOrderProducts.cart(oID)).forEach(
      (x) => (totalprice += x.price * x.quantity)
    );
    await newOrder.update(id, { totalprice });
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};
