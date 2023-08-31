import { Router } from "express";

import { authenticationRoutes } from "./authentication.routes";
import { categoriesRoutes } from "./categories.routes";
import { servicesRoutes } from "./services.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", servicesRoutes);
router.use("/users", usersRoutes);
router.use(authenticationRoutes);

export { router };
