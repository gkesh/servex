import { CreateLaborInput } from './create-labor.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateLaborInput extends PartialType(CreateLaborInput) {
  id: number;
}
