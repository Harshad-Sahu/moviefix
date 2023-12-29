export interface Filters {
  id: string | number;
  name: string;
}

export interface HomeState {
  filters: Filters[];
  activeFilter: Filters;
  moviesByYear: MoviesByYear;
}

export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ImageGridProps {
  images: MovieData[];
  columnCount: number;
  rowHeight: number;
}

type SetRowHeightFunction = (index: number, size: number) => void;
export interface YearlyMoviesProps {
  year: string;
  movieData: MovieData[];
  index: number;
  setRowHeight: SetRowHeightFunction;
}

export interface VirtualisedYearlyListProps {
  screenHeight: number;
  years: number[];
}

export interface SearchResponseType {
  adult: boolean;
  backdrop_path: "string";
  genre_ids: number[];
  id: number;
  original_language: "string";
  original_title: "string";
  overview: "string";
  popularity: number;
  poster_path: "string";
  release_date: "string";
  title: "string";
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SearchState {
  searchData: SearchResponseType[];
}

type fetchMoreData = () => void;

export interface SearchGridProps {
  searchData: SearchResponseType[];
  fetchMoreData: fetchMoreData;
  hasMore: boolean;
}

export interface LoaderProp {
  height?: number;
  width?: number;
}

export interface MoviesByYear {
  [year: string]: MovieData[];
}

export interface HeadersProps {
  onSearch?: (debouncedInputValue: string) => void;
}
