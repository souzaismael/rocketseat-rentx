import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

interface ICarsRepository {
    create(data: ICreateCarDTO): Promise<Car>;
    findByLicensePlate(license_plate: string): Promise<Car> | undefined;
    findAvailable(
        brand?: string,
        category_id?: string,
        name?: string,
    ): Promise<Car[]> | undefined;
}

export { ICarsRepository };
