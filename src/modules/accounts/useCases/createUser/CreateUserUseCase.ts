import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/interfaces/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository") private usersRepository: IUsersRepository,
    ) {}

    async execute({ name, email, password, driver_license }: ICreateUserDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("Username already exists!");
        }

        await this.usersRepository.create({
            name,
            email,
            password,
            driver_license,
        });
    }
}

export { CreateUserUseCase };
