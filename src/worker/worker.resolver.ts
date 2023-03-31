import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WorkerService } from './worker.service';
import { CreateWorkerInput } from './dto/create-worker.input';
import { UpdateWorkerInput } from './dto/update-worker.input';

@Resolver('Worker')
export class WorkerResolver {
  constructor(private readonly workerService: WorkerService) {}

  @Mutation('createWorker')
  create(@Args('createWorkerInput') createWorkerInput: CreateWorkerInput) {
    return this.workerService.create(createWorkerInput);
  }

  @Query('worker')
  findAll() {
    return this.workerService.findAll();
  }

  @Query('worker')
  findOne(@Args('id') id: number) {
    return this.workerService.findOne(id);
  }

  @Mutation('updateWorker')
  update(@Args('updateWorkerInput') updateWorkerInput: UpdateWorkerInput) {
    return this.workerService.update(updateWorkerInput.id, updateWorkerInput);
  }

  @Mutation('removeWorker')
  remove(@Args('id') id: number) {
    return this.workerService.remove(id);
  }
}
