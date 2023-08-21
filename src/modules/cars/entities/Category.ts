import { randomUUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
class Category {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = randomUUID();
        }
    }
}

export { Category };
