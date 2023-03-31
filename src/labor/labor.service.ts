import { Injectable } from '@nestjs/common';
import { CreateLaborInput } from './dto/create-labor.input';
import { UpdateLaborInput } from './dto/update-labor.input';

@Injectable()
export class LaborService {
  create(createLaborInput: CreateLaborInput) {
    return 'This action adds a new labor';
  }

  findAll() {
    return `This action returns all labor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labor`;
  }

  update(id: number, updateLaborInput: UpdateLaborInput) {
    return `This action updates a #${id} labor`;
  }

  remove(id: number) {
    return `This action removes a #${id} labor`;
  }
}
