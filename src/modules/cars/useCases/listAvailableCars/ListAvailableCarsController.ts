import { container } from "tsyringe";
// eslint-disable-next-line import-helpers/order-imports
import { Request, Response } from "express";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

class ListAvailableCarsController {
    async handle(request: Request, response: Response) {
        const { brand, name, category_id } = request.query;

        const listAvailableCarsUseCase = container.resolve(
            ListAvailableCarsUseCase,
        );

        const cars = await listAvailableCarsUseCase.execute({
            brand: brand as string,
            category_id: category_id as string,
            name: name as string,
        });

        return response.json(cars);
    }
}

export { ListAvailableCarsController };
