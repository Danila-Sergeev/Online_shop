const jwt = require("jsonwebtoken");
import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

export default (
  req: Request & { user?: JwtPayload | string },
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Не авторизован" });
  }

  let payload;

  try {
    payload = verify(
      authorization!.replace("Bearer ", ""),
      "super-strong-secret"
    );
  } catch (err) {
    return res.status(401).json({ message: "Не авторизован" });
  }

  req.user = payload as { _id: JwtPayload };
  return next();
};
