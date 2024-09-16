import { Query } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { BaseResponse } from 'src/utils/response.utils';
import { Siswa } from './siswa.entity';
import { Repository } from 'typeorm';
import { CreateSiswaDTO } from './siswa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';

@Injectable()
export class SiswaService extends BaseResponse {
  constructor(
    @InjectRepository(Siswa)
    private readonly siswaRepository: Repository<Siswa>,
  ) {
    super();
  }

  async findAllSiswa(
    page: number,
    pageSize: number,
  ): Promise<ResponsePagination> {
    // Validate inputs
    page = !isNaN(page) && page > 0 ? page : 1;
    pageSize = !isNaN(pageSize) && pageSize > 0 ? pageSize : 10;

    const data = await this.siswaRepository.find({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    const count = await this.siswaRepository.count();
    return this._pagination('OK', data, count, page, pageSize);
  }

  async createSiswa(payload: CreateSiswaDTO): Promise<ResponseSuccess> {
    const data = await this.siswaRepository.save(payload);
    return this._success('success send data', data);
  }
}
