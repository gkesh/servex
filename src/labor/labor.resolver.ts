import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LaborService } from './labor.service';
import { CreateLaborInput } from './dto/create-labor.input';
import { UpdateLaborInput } from './dto/update-labor.input';

@Resolver('Labor')
export class LaborResolver {
  constructor(private readonly laborService: LaborService) {}

  @Mutation('createLabor')
  create(@Args('createLaborInput') createLaborInput: CreateLaborInput) {
    return this.laborService.create(createLaborInput);
  }

  @Query('labor')
  findAll() {
    return this.laborService.findAll();
  }

  @Query('labor')
  findOne(@Args('id') id: number) {
    return this.laborService.findOne(id);
  }

  @Mutation('updateLabor')
  update(@Args('updateLaborInput') updateLaborInput: UpdateLaborInput) {
    return this.laborService.update(updateLaborInput.id, updateLaborInput);
  }

  @Mutation('removeLabor')
  remove(@Args('id') id: number) {
    return this.laborService.remove(id);
  }
}
