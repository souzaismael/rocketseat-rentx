import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

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
