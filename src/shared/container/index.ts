import { container } from "tsyringe";

import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/intefaces/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/intefaces/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/SpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository,
);
