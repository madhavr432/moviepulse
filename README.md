# 🎬 Movie Discovery App

A modern, responsive movie discovery web application built with **React 19**, **Vite**, and **Tailwind CSS**, powered by **The Movie Database (TMDB) API** and **Appwrite**.

---

## ✨ Features

- **Dynamic Movie Catalog**: Fetches and displays popular movies in real-time from TMDB API.
- **Instant Search with Debouncing**: Real-time search optimized with `useDebounce` (`react-use`) to minimize API requests while typing.
- **Search Analytics & Trending Movies**: Tracks user search queries in an **Appwrite** database and dynamically renders the top 5 trending movies.
- **Rich Movie Cards**: Displays movie poster with fallback image handling, title, rating score, language, and release year.
- **Loading & Error Handling**: Smooth SVG spinner for loading states and user-friendly error messages if API requests fail.
- **Modern Responsive Design**: Dark-themed UI styled with Tailwind CSS, custom gradients, and a responsive grid layout.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **API**: [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api)
- **Database & Backend**: [Appwrite](https://appwrite.io/)
- **Utilities**: [react-use](https://github.com/streamich/react-use) (debouncing)

---

## 🧠 React & Frontend Concepts Practiced

- **Functional Components & Component Architecture**: Modular breakdown into reusable components (`Search`, `MovieCard`, `Spinner`).
- **State Management**: Managing search queries, movie lists, trending movies, loading states, and error handling with `useState`.
- **Side Effects & Data Fetching**: Managing asynchronous API calls and component lifecycles using `useEffect`.
- **Backend as a Service (BaaS)**: Integrating Appwrite database operations (`listDocuments`, `createDocument`, `updateDocument`, `Query.orderDesc`, `Query.limit`).
- **Performance Optimization**: Custom input debouncing using `useDebounce`.
- **Error Handling**: Robust API fetching with `try...catch...finally` and defensive UI states.
- **Environment Variables**: Securing API credentials with Vite's `import.meta.env`.

---

## 📁 Project Structure

```text
movie-project/
├── public/                  # Static assets (images, icons)
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx    # Movie card display component
│   │   ├── Search.jsx       # Search bar component
│   │   └── Spinner.jsx      # Loading spinner component
│   ├── App.jsx              # Main application component
│   ├── appwrite.js          # Appwrite client & database queries
│   ├── index.css            # Global Tailwind styles & utilities
│   └── main.jsx             # React DOM entry point
├── .env.example             # Template for required environment variables
├── .env.local               # Local environment variables (API keys)
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone the repository

```bash
git clone <repository-url>
cd movie-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory (or copy from `.env.example`):

```env
VITE_TMDB_API_KEY=your_tmdb_api_read_access_token

VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

### 4. Appwrite Database Configuration

In your [Appwrite Cloud Console](https://cloud.appwrite.io/):
1. Create a project and note the **Project ID**.
2. Create a Database and note the **Database ID**.
3. Create a Collection (e.g. `metrics`) and note the **Collection ID**.
4. In the collection's **Settings > Permissions**, add **Any** (or **Guests**) with **Create**, **Read**, and **Update** permissions.
5. Create the following attributes:

| Attribute Key | Type | Size / Limits | Required |
|---|---|---|---|
| `searchTerm` | String | Size: 255 | Yes |
| `count` | Integer | Min: 0 | Yes |
| `movie_id` | Integer | — | Yes |
| `poster_url` | String | Size: 500 (or URL) | Yes |

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎯 Future Roadmap

- [x] Store user search history and metrics using **Appwrite**.
- [x] Display a **Trending Movies** list based on search volume.
- [ ] Add movie details modal or dedicated movie view.
- [ ] Pagination / infinite scrolling for movie lists.
- [ ] Production deployment.

---

## 📚 Learning Resource

Developed following the [React JS 19 Full Course by JavaScript Mastery](https://youtu.be/dCLhUialKPQ).
