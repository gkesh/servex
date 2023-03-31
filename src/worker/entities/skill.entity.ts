export enum Proficiency {
  BEGINNER,
  INTERMEDIATE,
  ADVANCED,
}

export class Skill {
  id: number;
  title: string;
  proficiency: Proficiency;
  experience: number;

  constructor(
    id: number,
    title: string,
    proficiency: Proficiency,
    experiece: number,
  ) {
    this.id = id;
    this.title = title;
    this.proficiency = proficiency;
    this.experience = experiece;
  }
}
