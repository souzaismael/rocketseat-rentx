import { Specification } from "../entities/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "./intefaces/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private static INSTANCE: SpecificationsRepository;
    private specifications: Specification[];

    private constructor() {
        this.specifications = [];
    }

    static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO) {
        const newSpecification = new Specification();

        Object.assign(newSpecification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(newSpecification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name,
        );

        return specification;
    }

    list(): Specification[] {
        return this.specifications;
    }
}

export { SpecificationsRepository };
