import { Repository, getRepository } from "typeorm";

import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "../../../repositories/interfaces/ISpecificationsRepository";
import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const newSpecification = this.repository.create({
            name,
            description,
        });

        await this.repository.save(newSpecification);
    }

    async findByName(name: string): Promise<Specification> {
        return this.repository.findOne({ name });
    }

    async list(): Promise<Specification[]> {
        return this.repository.find();
    }
}

export { SpecificationsRepository };
