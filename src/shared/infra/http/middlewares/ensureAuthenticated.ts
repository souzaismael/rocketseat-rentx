import { verify } from "jsonwebtoken";
// eslint-disable-next-line import-helpers/order-imports
import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token is missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "1a3955f67f9e6a3302f0cb4131ab0e89",
        ) as IPayload;

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError("Invalid token!", 401);
    }
}
