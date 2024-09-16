import { IsNotEmpty, IsOptional, Length } from "class-validator";
import { OmitType } from "@nestjs/mapped-types";

import { IsDateString } from 'class-validator';

export class SiswaDTO {
    @IsOptional()
    id: number;

    @IsNotEmpty()
    @Length(5, 15)
    nama: string;

    @IsNotEmpty()
    @Length(5, 15)
    tempat_lahir: string;

    @IsNotEmpty()
    @IsDateString()
    tanggal_lahir: string;

    @IsNotEmpty()
    @Length(10, 10)
    nisn: string;

    @IsNotEmpty()
    @Length(16, 16)
    nik: string;

    @IsNotEmpty()
    @Length(5, 25)
    email: string;

    @IsNotEmpty()
    @Length(5, 25)
    alamat: string;
}


export class CreateSiswaDTO extends OmitType(SiswaDTO, ['id']) {}
export class UpdateSiswaDTO extends SiswaDTO {}

export class FindSiswaDTO extends SiswaDTO {
    @IsOptional()
    page = 1;
    @IsOptional()
    pageSize = 10;

    @IsOptional()
    @Length(5, 15)
    nama: string;

    @IsOptional()
    @Length(5, 15)
    tempat_lahir: string;

    @IsOptional()
    @IsDateString()
    tanggal_lahir: string;

    @IsOptional()
    @Length(10, 10)
    nisn: string;

    @IsOptional()
    @Length(16, 16)
    nik: string;

    @IsOptional()
    @Length(5, 25)
    email: string;

    @IsOptional()
    @Length(5, 25)
    alamat: string;
}