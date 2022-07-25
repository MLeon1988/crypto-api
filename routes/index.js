import tickerRoutes from "./ticker.js";
import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.json({message:"API ROOT"}));

router.use("/", tickerRoutes);

export default router;

