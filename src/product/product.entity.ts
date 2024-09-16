import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    author: string;
    @Column()
    deskripsi: string;
    @Column()
    year: number;
    @Column()
    created_at: Date;
    @Column()
    updated_at: Date;
}