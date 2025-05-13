import { Router } from "express";
import uploadRouter from "./upload";

export const router = Router();

router.use("/upload", uploadRouter);

// Exemplu de route
router.get("/test", (req, res) => {
  res.json({ mesaj: "Ruta de test funcționează!" });
});