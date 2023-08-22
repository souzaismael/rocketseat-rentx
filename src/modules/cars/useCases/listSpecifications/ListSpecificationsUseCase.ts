import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/intefaces/ISpecificationsRepository";

class ListSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    async execute(): Promise<Specification[]> {
        return this.specificationsRepository.list();
    }
}

export { ListSpecificationsUseCase };
