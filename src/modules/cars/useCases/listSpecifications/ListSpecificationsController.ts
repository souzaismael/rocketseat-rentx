import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

    async handle(resquest: Request, response: Response): Promise<Response> {
        const all = await this.listSpecificationsUseCase.execute();

        return response.json(all);
    }
}

export { ListSpecificationsController };
