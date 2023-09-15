import { hash } from "bcryptjs";
import { Repository, getRepository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/interfaces/IUsersRepository";
import { User } from "../entities/User";

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
        id,
        avatar,
    }: ICreateUserDTO): Promise<void> {
        const passwordHash = await hash(password, 8);

        const newUser = this.repository.create({
            name,
            email,
            password: passwordHash,
            driver_license,
            id,
            avatar,
        });

        await this.repository.save(newUser);
    }

    async findByEmail(email: string): Promise<User> {
        return this.repository.findOne({ email });
    }

    async findById(id: string): Promise<User> {
        return this.repository.findOne({ id });
    }
}

export { UsersRepository };