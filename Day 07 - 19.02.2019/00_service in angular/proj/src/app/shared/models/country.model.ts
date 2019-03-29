import { Currency } from './currency.model';

  export interface Country {
    currencies: Currency[];
    name: string;
    capital: string;
    population: number;
    borders: string[];
}
