import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers["auth"];
  let jwtPayload;
  
  var jwtSecret: string = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";

  try {
    jwtPayload = <any>jwt.verify(token, jwtSecret);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    res.status(401).send();
    return;
  }

  const { userId, login } = jwtPayload;
  const newToken = jwt.sign({ userId, login }, jwtSecret, {
    expiresIn: "2h"
  });
  res.setHeader("token", newToken);

  next();
};