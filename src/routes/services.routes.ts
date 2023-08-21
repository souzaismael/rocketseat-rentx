import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const servicesRoutes = Router();

servicesRoutes.post("/", (request, response) =>
    createSpecificationController.handle(request, response),
);
servicesRoutes.get("/", (request, response) =>
    listSpecificationsController.handle(request, response),
);

export { servicesRoutes };
