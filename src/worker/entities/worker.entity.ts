import { Skill } from './skill.entity';

export class Worker {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  skills: Array<Skill>;
}
