# Jodhpur Tourism Website — The Blue City

<div align="center">

<img width="1872" height="998" alt="Screenshot 2026-06-27 075009" src="https://github.com/user-attachments/assets/8d278472-7d85-46c4-8a7d-b0478cd62a5c" />


**A stunning multi-page tourism website for Jodhpur, Rajasthan — crafted with pure HTML, CSS & JavaScript.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

[Live Demo](https://jodhpur-tourism-website.netlify.app/)

</div>

---

## Features

- **Unique Animated Design** — Night-sky hero with parallax scrolling, animated word reveal, and smooth page transitions
- **Fully Responsive** — Works beautifully on desktop, tablet, and mobile
- **Fully Working Pages** — No frameworks, no build tools — pure vanilla JS routing
- **Real Photography** — High-quality Unsplash photos across all pages and cards
- **Zero Dependencies** — No npm, no bundler — just open and run
- **Filter System** — Filter cards by category on every listing page
- **Interactive Itineraries** — Switchable 2 / 4 / 7 day travel plans
- **Animated Counters** — Stats that count up on scroll into view
- **Gallery Mosaic** — Asymmetric photo grid on the home page

---

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero with parallax photo, photo strip, stats, quick-nav cards, featured banner, gallery mosaic, climate guide |
| **Visiting Places** | 12 locations — filter by Nature / Forts & Palaces / Temples / Markets |
| **Historical Places** | Scrollable timeline (1459–1949) + 6 landmark cards with real photos |
| **Restaurants & Cuisine** | 8 restaurants, dish photo strip, filter by Fine Dining / Rooftop / Street Food / Café |
| **Hotels** | 8 stays with star ratings & price ranges — filter by Luxury / Heritage / Budget / Boutique |
| **Culture & Festivals** | 6 festivals with photos + 8 Marwari arts & crafts |
| **Travel Tips** | 6 info cards + switchable 2/4/7-day itinerary planner |

---

## Screenshots

### Home Page — Hero Section
<img width="1872" height="998" alt="Screenshot 2026-06-27 075009" src="https://github.com/user-attachments/assets/6d6c81f5-7d17-466e-a4b2-3d45da12d187" />


### Visiting Places
<img width="1847" height="998" alt="Screenshot 2026-06-27 075222" src="https://github.com/user-attachments/assets/d014838d-2962-43c1-9aa7-b722761213a8" />


### Restaurants & Cuisine
<img width="1847" height="997" alt="Screenshot 2026-06-27 075138" src="https://github.com/user-attachments/assets/bbd90c26-1ce2-4a7f-9761-88bc97f22f7d" />


### Hotels & Stay
<img width="1847" height="998" alt="Screenshot 2026-06-27 075200" src="https://github.com/user-attachments/assets/43079036-164d-4eb9-8683-78a1b7f0ae86" />

---

## Getting Started

### Option 1 — Just open it (no setup needed)
```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/jodhpur-tourism-website.git

# 2. Navigate into the folder
cd jodhpur-tourism-website

# 3. Open in your browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 — Live server (recommended for development)
```bash
# Using VS Code Live Server extension — right-click index.html → "Open with Live Server"

# OR using Python
python -m http.server 8080
# then visit http://localhost:8080
```

### Option 3 — Deploy to GitHub Pages (free hosting!)
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select `main` branch → `/ (root)`
3. Click **Save**
4. Your site will be live at `https://YOUR_USERNAME.github.io/jodhpur-tourism-website/`

---

## Project Structure

```
jodhpur-tourism-website/
│
├── index.html       # Main HTML — all 7 pages, JS-routed
├── style.css        # All styles — animations, layout, responsive
├── app.js           # All data, JS routing, rendering logic
└── README.md        # You are here!
```

> **Single-file architecture**: All pages live inside `index.html` and are shown/hidden via JavaScript. No build step needed — open `index.html` and everything works.

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--night` | `#0d0620` | Hero background, footer |
| `--indigo` | `#1a0a2e` | Stats section, nav, buttons |
| `--saffron` | `#f5a623` | Primary accent, CTAs, highlights |
| `--sand` | `#d4956a` | Secondary accent, borders |
| `--blue-city` | `#4a8fd4` | "Blue" title word, monsoon accent |
| `--cream` | `#fdf6e3` | Page background |

**Fonts:**
- **Playfair Display** — Headings & titles (regal, editorial)
- **Poppins** — Body text (clean, modern)
- **Rajdhani** — UI labels, badges, tags (geometric, Indian-feel)

---

## Data Highlights

The `app.js` file contains rich local data for:
- **12 visiting places** with categories, timings, and entry fees
- **6 historical sites** with a chronological timeline
- **8 restaurants** with cuisine type and price range
- **8 hotels** from budget guesthouses to palace luxury
- **6 festivals** with month and description
- **8 Marwari crafts** 
- **3 itinerary plans** (2-day, 4-day, 7-day)

All data is stored as clean JavaScript arrays — easy to update or extend.

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/add-new-page`
3. Commit your changes: `git commit -m 'Add shopping page'`
4. Push to the branch: `git push origin feature/add-new-page`
5. Open a Pull Request

---

## Ideas for Enhancement

- [ ] Add a **Map** page with embedded Google Maps pins
- [ ] Add a **Shopping** page (Jodhpur is famous for antiques & textiles)
- [ ] Add a **Photo Gallery** lightbox with full-screen view
- [ ] Add **dark mode** toggle
- [ ] Add **multilingual support** (Hindi / English)
- [ ] Connect to a **real weather API** for live Jodhpur weather
- [ ] Add **user reviews** section with localStorage

---

## License

This project is licensed under the **MIT License** — feel free to use it for personal or commercial projects.

---

## Author
Ajay

GitHub: https://github.com/ajayswami7
LinkedIn: https://www.linkedin.com/in/ajayswami/

---

<div align="center">

Made with ❤️ for the Blue City of Rajasthan

**⭐ Star this repo if you found it helpful!**

</div>
