import { accountsController } from "@/controllers";
import { Router } from "express";


const accountsRouter = Router();

accountsRouter
  .get('/', accountsController.getLinkPdf)


export { accountsRouter };
