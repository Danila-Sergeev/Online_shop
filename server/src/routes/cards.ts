import { Router } from "express";
import {
  getCards,
  createCard,
  removeCard,
  getCard,
} from "../controllers/cards";

const cardsRouter = Router();

cardsRouter.get("/", getCards);
cardsRouter.post("/", createCard);
cardsRouter.delete("/:id", removeCard);
cardsRouter.get("/:id", getCard);

export default cardsRouter;
