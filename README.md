# 🎬 MoviePulse

A sleek, modern, and responsive movie discovery web application built with **React 19**, **Vite**, and **Tailwind CSS v4**, powered by **The Movie Database (TMDB) API** and **Appwrite Cloud**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://moviepulse-neon.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/madhavr432/moviepulse)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io/)

---

## 🌐 Links

- **🚀 Live Demo**: [https://moviepulse-neon.vercel.app/](https://moviepulse-neon.vercel.app/)
- **💻 GitHub Repository**: [https://github.com/madhavr432/moviepulse](https://github.com/madhavr432/moviepulse)

---

## ✨ Features

- **🔥 Dynamic Trending Movies Section**:
  - Automatically captures every user search query and stores it in an **Appwrite** database.
  - Dynamically computes and displays the top 5 most-searched trending movies in real-time.
  - Custom stylized rank typography powered by Bebas Neue (`.fancy-text`).
- **🔍 Real-Time Search with Debouncing**:
  - Instant movie querying across thousands of titles via TMDB's `/search/movie` endpoint.
  - Optimized with `useDebounce` from `react-use` (1000ms delay) to prevent API request spamming and unnecessary database writes while typing.
- **🍿 Live Movie Discovery Catalog**:
  - Automatically fetches and displays popular movies ordered by popularity upon initial page load (`/discover/movie`).
- **🎴 Rich Movie Cards**:
  - Displays high-resolution movie posters from TMDB's CDN with fallback handling (`No-Poster.png`) for movies without posters.
  - Formatted vote ratings to one decimal place with custom star badge.
  - Extracted release year and capitalized language codes.
- **⏳ Defensive UI & Loading States**:
  - Clean animated SVG spinner during asynchronous API requests.
  - User-friendly error banners if API or network calls fail.
- **🎨 Modern Dark UI & Fluid Responsiveness**:
  - Dark cinematic aesthetics (`#030014`) with custom background hero banner.
  - Linear text gradients (`text-gradient`) and translucent card styling with Tailwind CSS v4.
  - Fully responsive layout spanning mobile (`xs: 480px`), tablets, and desktops.

---

## 🛠️ Complete Tech Stack

### Frontend
- **[React 19](https://react.dev/)**: Latest React release leveraging functional components, modern JSX transformations, and hooks (`useState`, `useEffect`).
- **[Vite 8](https://vite.dev/)**: Next-generation frontend build tool providing lightning-fast Hot Module Replacement (HMR) and optimized production bundles.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Modern CSS framework with native `@theme` directives, custom utility classes (`text-gradient`, `fancy-text`), and responsive design patterns.
- **[react-use](https://github.com/streamich/react-use)**: Essential React utility collection used for debounce handling (`useDebounce`).
- **Google Fonts**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body text) and [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) (rank typography).

### Backend & Database (BaaS)
- **[Appwrite Cloud](https://appwrite.io/)**: Managed Backend-as-a-Service providing database storage for search metrics:
  - Database queries: `Query.equal`, `Query.limit`, `Query.orderDesc`.
  - Document management: `listDocuments`, `createDocument`, `updateDocument`.

### Third-Party APIs
- **[The Movie Database (TMDB) API v3](https://www.themoviedb.org/documentation/api)**:
  - `/discover/movie`: Default popular movie listings.
  - `/search/movie`: Keyword movie search endpoint.
  - TMDB Image CDN (`https://images.tmdb.org/t/p/w500`): Movie poster assets.

### Deployment & CI/CD
- **[Vercel](https://vercel.com/)**: Fast continuous deployment directly integrated with GitHub repository with custom domain routing and environment variables.

---

## 🧠 React & Architecture Concepts Practiced

- **Modular Component Design**: Decoupling the UI into dedicated reusable components (`Search`, `MovieCard`, `Spinner`).
- **State Management**: Managing active search queries, debounced values, movie arrays, trending lists, loading spinners, and error alerts using `useState`.
- **Side Effect Lifecycle**: Coordinating TMDB fetches and Appwrite metric synchronization cleanly using `useEffect`.
- **Debounced Input Handling**: Utilizing `useDebounce` to manage input delays, conserving API quotas and database write operations.
- **Robust Asynchronous Error Handling**: Implementing `try...catch...finally` blocks with fallback states to prevent app crashes.
- **Environment Variable Security**: Keeping third-party API credentials safe using Vite's `import.meta.env` and git-ignored local environments.

---

## 📁 Project Structure

```text
movie-project/
├── public/                       # Static public assets
│   ├── BG.png                   # Background glow image
│   ├── hero-img.png             # Hero banner illustration
│   ├── No-Poster.png            # Fallback poster image
│   ├── search.svg               # Search bar input icon
│   └── star.svg                 # Rating star icon
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx        # Movie card display with ratings & metadata
│   │   ├── Search.jsx           # Controlled search input component
│   │   └── Spinner.jsx          # SVG loading animation component
│   ├── App.jsx                  # Main application orchestrator & state container
│   ├── appwrite.js              # Appwrite client configuration & SDK queries
│   ├── index.css                # Global styles, Tailwind v4 theme, custom utilities
│   └── main.jsx                 # Application DOM entry point
├── .env.example                 # Environment variable template
├── .env.local                   # Secret local environment variables (git-ignored)
├── index.html                   # HTML document template
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite bundler configuration
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/madhavr432/moviepulse.git
cd moviepulse
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root folder (or copy from `.env.example`):

```env
# TMDB API Read Access Token
VITE_TMDB_API_KEY=your_tmdb_api_read_access_token

# Appwrite Cloud Configuration
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

> [!NOTE]
> If your Appwrite project is hosted in a specific region (e.g. Singapore), verify that the endpoint configured in [`src/appwrite.js`](file:///c:/frontend-journey/react-learning/movie-project/src/appwrite.js) matches your project's region URL (e.g., `https://sgp.cloud.appwrite.io/v1`).

### 4. Appwrite Database Configuration

In your [Appwrite Cloud Console](https://cloud.appwrite.io/):

1. **Database**: Create a database (e.g., `movies`) and copy its **Database ID**.
2. **Collection**: Create a collection (e.g., `metrics`) and copy its **Collection ID**.
3. **Permissions**: Under **Collection Settings > Permissions**, add **Any** (or **Guests**) with:
   - `Create`
   - `Read`
   - `Update`
4. **Attributes**: Create the following 4 attributes in the collection:

| Attribute Key | Type | Size / Limits | Required |
|---|---|---|---|
| `searchTerm` | String | Size: 255 | Yes |
| `count` | Integer | Min: 0 | Yes |
| `movie_id` | Integer | — | Yes |
| `poster_url` | String | Size: 500 (or URL) | Yes |

### 5. Run the Application

```bash
# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚢 Deployment (Vercel)

MoviePulse is deployed on [Vercel](https://vercel.com/):

1. Import your GitHub repository into Vercel.
2. Under **Project Settings > Environment Variables**, add:
   - `VITE_TMDB_API_KEY`
   - `VITE_APPWRITE_PROJECT_ID`
   - `VITE_APPWRITE_DATABASE_ID`
   - `VITE_APPWRITE_COLLECTION_ID`
3. Click **Deploy**. Any future commits pushed to the `main` branch trigger automatic production deployments.

---

## 📚 Acknowledgments & Learning Resource

This project was built following the **[React JS 19 Full Course – JavaScript Mastery](https://youtu.be/dCLhUialKPQ)**.
