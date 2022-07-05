import { Router } from "express";
import { getFinancial, getFinancialSum, postFinancial } from "../controllers/financialController.js";

const financialRouter = Router();

financialRouter.post("/financial-events", postFinancial);
financialRouter.get("/financial-events", getFinancial);
financialRouter.get("/financial-events/sum", getFinancialSum);
export default financialRouter;