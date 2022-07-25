import { Router } from "express";
import * as controller from "../controller/controllers.js"
const router = Router();

router.get("/all", controller.getAllTickers );
router.get("/:id", controller.getTicker);
router.post("/", controller.createTicker);
router.put("/:id", controller.updateTicker);
router.delete("/:id", controller.deleteTicker);

export default router