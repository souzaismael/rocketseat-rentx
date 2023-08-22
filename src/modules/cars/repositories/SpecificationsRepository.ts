import { Repository, getRepository } from "typeorm";

import { Specification } from "../entities/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "./intefaces/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const newSpecification = await this.repository.create({
            name,
            description,
        });

        this.repository.save(newSpecification);
    }

    async findByName(name: string): Promise<Specification> {
        return this.repository.findOne({ name });
    }

    async list(): Promise<Specification[]> {
        return this.repository.find();
    }
}

export { SpecificationsRepository };
