import express from "express";
import { MealController } from "./meal.controller";

const router = express.Router();
router.post("/create-meal", MealController.createMeal);
export const MealRoutes = router;
