import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/intefaces/ISpecificationsRepository";

class ListSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    execute(): Specification[] {
        return this.specificationsRepository.list();
    }
}

export { ListSpecificationsUseCase };
