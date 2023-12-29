# Movie Information App (MovieFix)

This project is a movie information app that utilizes The Movie Database (TMDb) API to display a curated list of movies. The app showcases top movies for each year, allowing users to filter by genre. Additionally, as users scroll through the list, the app dynamically loads top movies from previous and next years, providing a seamless and engaging experience.

## Deployment

The project is already deployed on AWS S3 at [http://moviefix-harshad.s3-website-us-east-1.amazonaws.com](http://moviefix-harshad.s3-website-us-east-1.amazonaws.com). You can access the app directly by opening this URL in your browser.

## Features

- **Yearly Top Movies:** The app presents a list of top movies for each year, offering users a curated selection based on popularity.

- **Genre Filtering:** Users can filter the movie list by genre, enabling them to discover movies within specific categories of interest.

- **Infinite Scrolling:** As users scroll through the movie list, the app dynamically loads additional top movies from both previous and next years, ensuring a continuous and engaging browsing experience.

- **Image Optimization:** The app employs image optimization techniques to enhance performance. Images are compressed and served in an optimized format to reduce loading times.

- **Lazy Loading:** Images are lazily loaded as the user interacts with the content, improving initial page load times and overall user experience.

## Technologies Used

- **React:** The app is built using the React JavaScript library, providing a modular and efficient structure for the user interface.

- **Create React App:** The project was bootstrapped with Create React App, simplifying the setup and build processes.

- **The Movie Database (TMDb) API:** Movie information is fetched and updated in real-time from TMDb, ensuring the latest and most accurate data.

- **Infinite Scroll:** The app utilizes an infinite scroll mechanism to load additional movie entries as the user navigates through the list.

- **Node Version:** v18.18.0

- **NPM Version:** v9.8.1

For optimal results or in case of any issues running the project, it is recommended to use Node v18.18.0 and NPM v9.8.1. Ensure to obtain an API Key from [TMDb](https://www.themoviedb.org/documentation/api) and add it to the configuration file.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/Harshad-Sahu/moviefix.git
   ```

2. Install dependencies using npm or yarn.

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server.

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Note

Prototype design is only provided for mobile screens. For larger screens, some assumptions are made, and the user experience may vary.
