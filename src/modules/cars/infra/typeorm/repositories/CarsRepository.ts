import { Repository, getRepository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/interfaces/ICarsRepository";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }

    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarDTO): Promise<Car> {
        const newCar = this.repository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        });

        await this.repository.save(newCar);

        return newCar;
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        return this.repository.findOne({ license_plate });
    }
}

export { CarsRepository };
