import UserExistsError from "../errors/userExisterror";
import ValidationError from "../errors/validation";
import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find({});
    return res.status(200).send(users);
  } catch (error) {
    return next(error);
  }
};

export const getUserCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = User.findById(id);
  return res.status(200).send(user);
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, role } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hash,
      role,
    });

    return res.status(200).send(newUser);
  } catch (error: any) {
    if (error.code === 11000) {
      next(new UserExistsError("Пользователь с такими данными уже существует"));
    } else if (error instanceof mongoose.Error.ValidationError) {
      const validationError = new ValidationError("Ошибка валидации полей");
      return next(validationError);
    }
    return next(error);
  }
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((userInformation) => {
      res.send({
        token: jwt.sign({ _id: userInformation._id }, "super-strong-secret", {
          expiresIn: "7d",
        }),
      });
    })
    .catch(next);
};
