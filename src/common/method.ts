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
