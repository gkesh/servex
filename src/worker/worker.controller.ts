import { Controller, Get } from '@nestjs/common';

import { Worker } from './entities/worker.entity';
import { Skill, Proficiency } from './entities/skill.entity';

@Controller('worker')
export class WorkerController {
  @Get()
  findAll(): Array<Worker> {
    const johnSkill = new Skill(1, 'Work', Proficiency.BEGINNER, 4);
    const john = new Worker(1, 'John', 'Doe', [johnSkill]);
    const workers: Array<Worker> = [john];
    return workers;
  }
}
