import { CreateWorkerInput } from './create-worker.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateWorkerInput extends PartialType(CreateWorkerInput) {
  id: number;
}
