import { NextFunction, Request, Response } from "express";
import Card from "../models/card";

export const getCards = (req: Request, res: Response, next: NextFunction) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

export const removeCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const card = await Card.findById(id);

    !card
      ? console.error("not found")
      : await Card.deleteOne({ _id: card._id });
    return res.status(200).send({ message: "Карточка успешно удалена" });
  } catch (err: any) {
    return next(err);
  }
};

export const getCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const card = await Card.findById(id);
  if (!card) {
    return res.send("error");
  }

  return await res.status(200).send(card);
};

export const createCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      description,
      image,
      image1,
      image2,
      image3,
      image4,
      price,
      createdAt,
    } = req.body;
    const newCard = await Card.create({
      name,
      description,
      image,
      image1,
      image2,
      image3,
      image4,
      price,
      createdAt,
    });
    return res.status(200).send(newCard);
  } catch (error) {
    return next(error);
  }
};
