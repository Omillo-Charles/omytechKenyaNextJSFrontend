import { Router } from "express";
import { createContact, getContacts } from "../controllers/contact.controller.js";
import { contactRateLimiter } from "../middlewares/ratelimit.middleware.js";

const contactRouter = Router();

contactRouter.post("/", contactRateLimiter, createContact);
contactRouter.get("/", getContacts);

export default contactRouter;