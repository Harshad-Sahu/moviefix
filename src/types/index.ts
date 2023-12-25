export interface Filters {
  id: string | number;
  name: string;
}

export interface HomeState {
  filters: Filters[];
  yearlyMovies: string[];
}
