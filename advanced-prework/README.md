# Star Wars Explorer Pre‑Work Assignment

This project is a simple website built as part of the Code the Dream advanced class pre‑work assignment.  It demonstrates how to fetch data from a public API and display it on a web page using HTML, CSS and JavaScript.

## Chosen API

The application uses the [swapi.tech](https://swapi.tech/) API because it does not require an API key and provides rich information about the Star Wars universe.  Two endpoints are used:

- **`/people`** – returns a paginated list of characters with their unique identifier (`uid`), `name` and `url`.
- **`/films`** – returns an array of film objects with properties such as `title`, `director`, `episode_id` and `release_date`.

When a person or film is selected, the application issues a new GET request to the detail endpoint (for example, `/people/{uid}` or `/films/{uid}`) to fetch and display more information about the selected item.

## Structure

```text
.
├── index.html   # main HTML document
├── styles.css   # styles for the page
├── script.js    # JavaScript logic to fetch and display data
└── README.md    # this file
```

- **index.html** – contains the page markup, including a header, navigation buttons and a content area where data will appear.
- **styles.css** – provides basic styling with readable font sizes, high‑contrast colors and simple layouts.
- **script.js** – fetches data from the API using the Fetch API, updates the DOM and handles navigation between lists and details.
- **README.md** – explains how to run and understand the project.

## Running the Site

You can run the site in a modern web browser by opening `index.html` directly or by serving it from a local web server.  Serving the files through a local server is recommended because some browsers restrict API calls when opening files directly.

### Option 1 – Open directly

1. Download or clone the repository to your computer.
2. Open `index.html` in a web browser (double‑click the file or drag it into the browser window).
3. You should see a page with buttons labelled **People** and **Films**.  Click these buttons to load the corresponding data.  Selecting a person or film will retrieve and display detailed information.

### Option 2 – Run a local HTTP server (recommended)

1. Ensure you have Node.js installed.
2. Install a simple HTTP server globally if it is not already installed:

   ```sh
   npm install -g http-server
   ```

3. Open a terminal, navigate to the project directory and start the server:

   ```sh
   http-server .
   ```

4. Open the address displayed by the server (for example, `http://localhost:8080`) in your browser.
5. Use the **People** and **Films** buttons to explore the Star Wars universe.

## Accessibility and Styling

The design uses high‑contrast colors and legible font sizes.  Navigation buttons provide clear labels, and interactive elements indicate focus or hover states.  Error handling is included to display user‑friendly messages if network requests fail.

## Notes

- The people list fetches only the first page (10 characters) for demonstration.  To load more characters, modify the URL in `script.js` (for example, set `limit=100`).
- This project is intentionally simple so that you can understand how to fetch and display data from a public API.  Feel free to extend it by adding search functionality, additional endpoints or more sophisticated styling.