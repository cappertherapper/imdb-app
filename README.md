# Movie Browser

A user-friendly IMDB-type movie browsing application, designed to provide quick access to movie information. This application is built with React Vite and leverages Chakra-UI for a responsive and accessible user interface. It allows users to search, filter, and sort movies, providing a seamless user experience.

## Table of Contents
1. [Features](#features)
2. [Demo](#demo)
3. [Technologies](#technologies)
4. [Setup](#setup)

## Features

- **Searchable Navigation Bar**
  - A navigation bar for searching movies.

- **Dark Mode Toggle**
  - A button for switching the UI between light and dark modes.

- **Genre Filtering**
  - A sidebar containing different genres that users can click to filter movies by genre.

- **Sort Functionality**
  - A dropdown list that allows users to sort movies by popularity, rating, and release year.

- **Movie Grid**
  - Displays movies in a responsive grid, including a placeholder skeleton while data is loading.

## Demo

<img src="./demo.gif" alt="App Demo" width="500" height="250"/>

## Technologies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Chakra-UI](https://chakra-ui.com/)
- [Axios](https://axios-http.com/)
- [TMDB API](https://www.themoviedb.org/documentation/api)

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```sh
   cd <project-name>
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Run the project:
   ```sh
   npm run dev
   ```

## Components

### App Component

Main component rendering `NavBar`, `MovieGrid`, `GenreList`, `SortSelector`, and `MovieHeading`.

```jsx
// Core structure of the App component
function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);
  // ...
}
```

### NavBar Component

Handles search functionality and toggles between color modes.

```jsx
const NavBar = ({ onSearch }: Props) => {
  // ...
};
```

### MovieGrid Component

Responsible for rendering a list of movies, including loading skeletons.

```jsx
const MovieGrid = ({ movieQuery }: Props) => {
  const { data, error, isLoading } = useMovies(movieQuery);
  // ...
};
```

### GenreList Component

Displays a list of genres, allowing users to filter movies by genre.

```jsx
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  // ...
};
```

### useData Hook

Handles data fetching from the TMDB API.

```jsx
const useData = <T>(endpoint:string, responseKey:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  // ...
};
```
