import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const servicesRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listCategoriesController = new ListCategoriesController();

servicesRoutes.post("/", createSpecificationController.handle);
servicesRoutes.get("/", listCategoriesController.handle);

export { servicesRoutes };
