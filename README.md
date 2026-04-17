# Contacts App

A responsive contacts browser built with **React 18** and **Vite**, powered by the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)

---

## Prerequisites

- **Node.js** v16 or higher
- **npm** v8 or higher

## Getting Started

```bash
# 1. Clone the repository
git clone <repo-url>

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

Or https://contacts-app-xi-eight.vercel.app/ 

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Environment Variables

The API base URL is configured via a `.env` file in the project root:

| Variable            | Default                                | Description          |
| ------------------- | -------------------------------------- | -------------------- |
| `VITE_API_BASE_URL` | `https://jsonplaceholder.typicode.com` | Base URL for the API |

To override, create or edit `.env`:

```
VITE_API_BASE_URL=https://your-api-url.com
```

## Project Structure

```
src/
├── main.jsx                      # App entry point
├── App.jsx                       # Root component – manages selection, search state
├── App.css                       # All application styles
├── index.css                     # Global resets
├── hooks/
│   └── useContacts.js            # Custom hook – data fetching & loading/error state
├── services/
│   └── contactService.js         # API layer – isolates HTTP calls from components
├── utils/
│   └── avatar.js                 # Shared helpers – avatar colour & initials
└── components/
    ├── SearchBar.jsx             # Controlled search input with live filtering
    ├── ContactList.jsx           # Responsive card grid
    ├── ContactCard.jsx           # Individual contact card (presentational)
    └── ContactDetail.jsx         # Modal with full contact details
```

## Features

- Browse contacts in a responsive card grid (3 → 2 → 1 column)
- Search/filter contacts by name, email, or company in real time
- Click a card to view full details (email, phone, website, address, company) in a modal
- Keyboard accessible — `Enter` to open a card, `Escape` to close the modal
- Colour-coded avatars generated from contact initials
- Loading spinner and error states for network requests
- No external UI libraries — all styling is hand-written CSS

## Improvements I Would Add With More Time

1. **Pagination or virtual scrolling** — The current dataset is only 10 contacts, but a real-world contacts list could have thousands. Adding pagination (or a virtualised list using `react-window`) would keep the UI performant at scale and provide a better UX for navigating large datasets.

2. **Favourites with local storage** — Allow users to star/favourite contacts and persist those selections in `localStorage`. This adds personalisation and demonstrates client-side state persistence without requiring a backend change — useful for a CEM platform where frontline users need quick access to key contacts.

3. **Dark mode toggle** — Add a light/dark theme switch using CSS custom properties and `prefers-color-scheme`. This improves accessibility for users who prefer dark interfaces, reduces eye strain during extended use, and is increasingly expected in modern enterprise SaaS applications.
