import { hash } from "bcrypt";
import { Repository, getRepository } from "typeorm";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "./interfaces/IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const passwordHash = await hash(password, 8);

        const newUser = this.repository.create({
            name,
            email,
            password: passwordHash,
            driver_license,
        });

        await this.repository.save(newUser);
    }

    async findByEmail(email: string): Promise<User> {
        return this.repository.findOne({ email });
    }
}

export { UsersRepository };
