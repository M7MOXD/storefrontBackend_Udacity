// import express { Request, Response }
import { Request, Response } from 'express';

// import class, interface
import { PersonClass, PersonInterface } from '../models/person';

// create instance from PersonClass
const newPerson = new PersonClass();

// order
import { OrderClass, OrderInterface } from '../models/order';

// create instance from OrderClass
const newOrder = new OrderClass();

// create method
export const create = async (req: Request, res: Response) => {
  try {
    const result: any = await newPerson.create(req.body);
    newOrder.create(result.user.id);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// index method
export const index = async (_req: Request, res: Response) => {
  try {
    const result = await newPerson.index();
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// show method
export const show = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const result = await newPerson.show(id);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// update method
export const update = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const result = await newPerson.update(id, req.body);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// remove method
export const remove = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const result = await newPerson.delete(id);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// authentication method
export const authentication = async (req: Request, res: Response) => {
  try {
    const result = await newPerson.authentication(req.body);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// logout method
export const logout = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const user = req.user;
    const token = req.token;
    const result = await newPerson.logout(id, user, token);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};

// logoutAll method
export const logoutAll = async (req: Request | any, res: Response) => {
  try {
    const id = req.id;
    const result = await newPerson.logoutAll(id);
    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
};
