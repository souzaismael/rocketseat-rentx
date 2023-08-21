import { Category } from "../../model/Category";

// DTO - Data Transfer Objetc
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create({ name, description }: ICreateCategoryDTO): void;
    list(): Category[];
    findByName(name: string): Category;
}

export { ICategoriesRepository, ICreateCategoryDTO };
