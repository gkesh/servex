enum Proficiency {
  BEGINNER,
  INTERMEDIATE,
  ADVANCED,
}

export class Skill {
  id: number;
  title: string;
  proficiency: Proficiency;
  experience: number;
}
