export interface ICountry {
  id?: number;
  countryName?: string | null;
}

export class Country implements ICountry {
  constructor(public id?: number, public countryName?: string | null) {}
}

export function getCountryIdentifier(country: ICountry): number | undefined {
  return country.id;
}
