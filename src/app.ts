import cors from "cors";
import express, { Application, Request, Response } from "express";
import { errorHandler } from "./middlewares/errorManager";
import { AuthRoutes } from "./modules/Auth/auth.route";
import { CategoryRoutes } from "./modules/Category/category.route";
import { MealRoutes } from "./modules/Meal/meal.route";
import { ProviderRoutes } from "./modules/Provider/provider.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/meal", MealRoutes);
app.use("/api/v1/provider", ProviderRoutes);
app.use("/api/v1/category", CategoryRoutes);

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from Food HUUUUUUUUUUUb!");
});

app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: "Route not found",
	});
});

app.use(errorHandler);

export default app;
