import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Siswa extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nama: string;
    @Column()
    tempatLahir: string;
    @Column()
    tanggalLahir: Date;
    @Column()
    nisn: string;
    @Column()
    nik: string;
    @Column()
    email: string;
    @Column()
    alamat: string;
}