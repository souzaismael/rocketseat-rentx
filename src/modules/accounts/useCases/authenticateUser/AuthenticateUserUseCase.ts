import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new Error("Email or password incorrect!");
        }

        const passwordHash = compare(password, user.password);

        if (!passwordHash) {
            throw new Error("Email or password incorrect!");
        }

        const token = sign({}, "1a3955f67f9e6a3302f0cb4131ab0e89", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };