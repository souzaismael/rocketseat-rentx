import { container } from "tsyringe";
// eslint-disable-next-line import-helpers/order-imports
import { Request, Response } from "express";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const authenticateUserUseCase = container.resolve(
            AuthenticateUserUseCase,
        );

        const token = await authenticateUserUseCase.execute({
            email,
            password,
        });

        return response.json(token);
    }
}

export { AuthenticateUserController };
