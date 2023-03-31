import { Skill } from './skill.entity';

export class Worker {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  skills: Array<Skill>;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    skills: Array<Skill>,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.skills = skills;
  }
}
