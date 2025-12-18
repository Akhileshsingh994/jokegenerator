## SMILING BINGO – Joke Generator

**SMILING BINGO** is a simple React app that fetches random programming jokes from the public JokeAPI and displays them on the page.  
Click the button to generate a new joke and brighten your day.

The UI is composed of:
- **App**: Top-level layout with header, main content, and footer.
- **Joke**: Handles fetching and storing the current joke.
- **Button**: Triggers the API call to load a new joke.

The joke data is fetched from `https://sv443.net/jokeapi/v2/joke/Programming?type=single`.

---

## Getting Started

### Prerequisites

- **Node.js** (LTS recommended)
- **npm** (comes with Node.js)

### Install dependencies

In the project root (`jokegenerator`), run:

```bash
npm install
```

### Run the app in development

```bash
npm start
```

Then open `http://localhost:3000` in your browser.

The page will automatically reload when you make changes.

---

## Available Scripts

Inside the `jokegenerator` directory you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner in watch mode.
- **`npm run build`**: Builds the app for production into the `build` folder.
- **`npm run eject`**: Ejects CRA configuration (one-way operation, use with caution).

---

## Project Structure (key files)

- **`src/App.js`**: Main application component and layout.
- **`src/components/Joke.js`**: Fetches and displays the joke.
- **`src/components/Button.js`**: Button to trigger joke generation.
- **`src/*.css`**: Styling for the app and components.

---

## Notes

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- The public JokeAPI may apply rate limiting or experience downtime; if no joke appears, check the browser console for errors.
