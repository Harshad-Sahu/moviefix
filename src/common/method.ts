import { Filters } from "../types";

export const getGridAsPerScreen = (): number => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 600) {
    // Mobile screens
    return 2;
  } else if (screenWidth >= 600 && screenWidth < 1024) {
    // Tablets
    return 3;
  } else {
    // Desktop or larger screens
    return 5.2;
  }
};

export const getGenreNames = (genre: Filters[], genreArray: number[]) => {
  const selectedGenres = genre.filter((g) =>
    genreArray.includes(parseInt(`${g?.id}`))
  );
  const genreNames = selectedGenres.map((g) => g.name).join(", ");
  return genreNames;
};
