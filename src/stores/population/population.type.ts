export interface Population {
  count: number;
  readable_format: string;
  country: string;
}

export interface country {
	name: string;
}

export interface ListCountry {
	countries: country[];
}

export interface PopulationModel {
	populations: Population[];
	population: Population;
	loader: boolean;
	error: string;
	status: 'idle'
}
