import { container } from "tsyringe";
// eslint-disable-next-line import-helpers/order-imports
import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createSpecificationUseCase = container.resolve(
            CreateSpecificationUseCase,
        );

        await createSpecificationUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateSpecificationController };
