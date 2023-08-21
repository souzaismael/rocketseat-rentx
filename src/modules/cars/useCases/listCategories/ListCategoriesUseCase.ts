import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/intefaces/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
        return this.categoriesRepository.list();
    }
}

export { ListCategoriesUseCase };
