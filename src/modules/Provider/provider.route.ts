import express from "express";
import { ProviderController } from "./provider.controller";

const router = express.Router();
router.post("/create-provider", ProviderController.createProviderPrifile);
export const ProviderRoutes = router;
