import { Person } from './person.model';

    export interface PersonInfo {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: Person[];
    }

