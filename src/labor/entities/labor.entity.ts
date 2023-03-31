enum Proficiency {
  BEGINNER,
  INTERMEDIATE,
  ADVANCED,
}

class Skill {
  id: number;
  title: string;
  proficiency: Proficiency;
  experience: number;
}

export class Labor {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  skills: Array<Skill>;
}
