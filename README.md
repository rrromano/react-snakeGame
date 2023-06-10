# React - Snake Game

_This is a reactJs project that renders a snake retro game. You can select the level, play, stop if you need and restart the game when you want._

## Starting ▶️

The following instructions will allow you to get a working copy of the project on your local machine for development and testing purposes.

### Installation ⚙️

-   Run `npm install` to install all dependencies.
-   Run `npm start` to run the app locally.
-   You can find the project running on `localhost:3000`.

### Testing 🧪

-   Run `npm test` to execute automated tests.

### Deployment 🚀

-   Run `npm run build` to generate a ready-to-deploy version.

## Libraries used 🛠️

-   Typescript: For handling data types.
-   Styled-components: For handling styles.
-   Material-Ui: For some UI components.
-   Redux-Toolkit: For state management.

## General considerations 📖

### Board Component

-   It Is the main component, that render the board wich contain the snake and food. It is a matrix for an X size define in file constants.ts.
-   The board is done with display grid, and so many rows and columns by the size of the board.

### Row Component

-   It Is the component for each row defined by the size of the board.

### Cell Component

-   It Is the component for each cell defined in a row, according to the size of the board.

### Options Component

-   It Is the component for select the level of the game, and play, stop and restart the game when you want.

### Score Component

-   It Is the component to show the actual/last score, and the high score (storaged in local-storage of browser).

### CustomSwitch Component

-   It Is the component that render a switch control for change the main theme between ligth and dark mode.

### SnackBarInfo Component

-   It Is the component that displays a sign when you get a new highscore or when start the game to indicate some instrucctions to move the snake.

### General Info

-   First of all, you can select between three levels Easy, Middle and Hard. When you decide the level, you can press the Play button for start the game. At any time you can stop the game and then return with the same or also restart the game.
-   When you are playing, you cant change the level until the end of the game.
-   At any time, you can press the switch control for change the main theme between ligth and dark mode.
-   The view of the complete game adapt to different screen resolutions.
-   **`GOOD LUCK AND ENJOY!`**

## Author ✒️

-   Romano, Rodrigo Ruben - Information systems engineer.

## Contact 📋

-   [LinkedIn](https://www.linkedin.com/in/rodrigo-ruben-romano/)
-   [Mail](mailto:romano.rodrigo19@gmail.com)
