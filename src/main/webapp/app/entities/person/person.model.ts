export interface IPerson {
  id?: number;
  personName?: string | null;
  personLastName?: string | null;
}

export class Person implements IPerson {
  constructor(public id?: number, public personName?: string | null, public personLastName?: string | null) {}
}

export function getPersonIdentifier(person: IPerson): number | undefined {
  return person.id;
}
