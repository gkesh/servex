import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('labor')
export class LaborController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request.body);
    return 'This is a list of all the laborers.';
  }
}
