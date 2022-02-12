// import express { Request, Response }
import { Request, Response } from 'express';

// import class, interface
import { OrderClass, OrderInterface } from '../models/order';

// create instance from OrderClass
const newOrder = new OrderClass();

// index method
export const index = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const result = await newOrder.index(id);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// show method
export const show = async (req: Request | any, res: Response) => {
  try {
    const id = req.params.id;
    const uID = req.id;
    const result = await newOrder.show(id, uID);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// current record method
export const currentRecord = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const result = await newOrder.currentRecord(id);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};
