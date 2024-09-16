import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { CreateSiswaDTO, FindSiswaDTO } from './siswa.dto';
import { BaseResponse } from 'src/utils/response.utils';

@Controller('siswa')
export class SiswaController {
    constructor (private readonly siswaService: SiswaService) {}

    @Get('list')
    async findAllSiswa(
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10
    ): Promise<ResponsePagination> {
        return this.siswaService.findAllSiswa(page, pageSize);
    }

    @Post('create')
    async create(@Body() payload: CreateSiswaDTO) : Promise<ResponseSuccess> {
        return await this.siswaService.createSiswa(payload);
    }
}
