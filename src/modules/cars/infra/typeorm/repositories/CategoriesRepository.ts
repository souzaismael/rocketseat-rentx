import { Repository, getRepository } from "typeorm";

import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../../../repositories/interfaces/ICategoriesRepository";
import { Category } from "../entities/Category";

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const newCategory = this.repository.create({
            name,
            description,
        });

        await this.repository.save(newCategory);
    }

    async list(): Promise<Category[]> {
        return this.repository.find();
    }

    async findByName(name: string): Promise<Category> {
        return this.repository.findOne({ name });
    }
}

export { CategoriesRepository };
