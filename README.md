# Movie Information App (MovieFix)

This project is a movie information app that utilizes The Movie Database (TMDb) API to display a curated list of movies. The app showcases top movies for each year, allowing users to filter by genre. Additionally, as users scroll through the list, the app dynamically loads top movies from previous and next years, providing a seamless and engaging experience.

## Deployment

The project is already deployed on AWS S3 at [http://moviefix-harshad.s3-website-us-east-1.amazonaws.com](http://moviefix-harshad.s3-website-us-east-1.amazonaws.com). You can access the app directly by opening this URL in your browser.

## Features

- **Yearly Top Movies:** The app presents a list of top movies for each year, offering users a curated selection based on popularity.

- **Genre Filtering:** Users can filter the movie list by genre, enabling them to discover movies within specific categories of interest.

- **Infinite Scrolling:** As users scroll through the movie list, the app dynamically loads additional top movies from both previous and next years, ensuring a continuous and engaging browsing experience.

- **Search Functionality:** The app includes a search feature that allows users to search for movies based on specific terms. The search results display all relevant movies, providing a comprehensive view of the user's query.

- **Detailed Movie Information:** For each movie, the app displays essential details, including the movie poster, title, rating, genre, and a short bio. This comprehensive information enhances the user's understanding of each movie and aids in the selection process.

- **Image Optimization:** The app employs image optimization techniques to enhance performance. Images are compressed and served in an optimized format to reduce loading times.

- **Lazy Loading:** Images are lazily loaded as the user interacts with the content, improving initial page load times and overall user experience.

## Technologies Used

- **React:** The app is built using the React JavaScript library, providing a modular and efficient structure for the user interface.

- **Create React App:** The project was bootstrapped with Create React App, simplifying the setup and build processes.

- **The Movie Database (TMDb) API:** Movie information is fetched and updated in real-time from TMDb, ensuring the latest and most accurate data.

- **Infinite Scroll:** The app utilizes an infinite scroll mechanism to load additional movie entries as the user navigates through the list.

- **Node Version:** v18.18.0

- **NPM Version:** v9.8.1

𝑭𝒐𝒓 𝒐𝒑𝒕𝒊𝒎𝒂𝒍 𝒓𝒆𝒔𝒖𝒍𝒕𝒔 𝒐𝒓 𝒊𝒏 𝒄𝒂𝒔𝒆 𝒐𝒇 𝒂𝒏𝒚 𝒊𝒔𝒔𝒖𝒆𝒔 𝒓𝒖𝒏𝒏𝒊𝒏𝒈 𝒕𝒉𝒆 𝒑𝒓𝒐𝒋𝒆𝒄𝒕, 𝒊𝒕 𝒊𝒔 𝒓𝒆𝒄𝒐𝒎𝒎𝒆𝒏𝒅𝒆𝒅 𝒕𝒐 𝒖𝒔𝒆 𝑵𝒐𝒅𝒆 𝒗18.18.0 𝒂𝒏𝒅 𝑵𝑷𝑴 𝒗9.8.1.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/Harshad-Sahu/moviefix.git
   ```

2. Install dependencies using npm or yarn.

   ```bash
   npm install
   ```

3. Start the development server.

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Note

Prototype design is only provided for mobile screens. For larger screens, some assumptions are made, and the user experience may vary.
