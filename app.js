/* ═══════════════════════════════════════════════
   JODHPUR TOURISM – APP.JS
═══════════════════════════════════════════════ */

// ─── DATA ───────────────────────────────────────

const placesData = [
  {
    name: "Mehrangarh Fort",
    desc: "One of India's largest forts, perched 410m above Jodhpur. Its imposing ramparts offer panoramic views of the Blue City.",
    image: "images/mehrangarh fort.jpg",
    category: "fort",
    tag: "Fort",
    timing: "9 AM – 5 PM",
    entry: "₹100 (Indian)",
  },
  {
    name: "Umaid Bhawan Palace",
    desc: "A magnificent golden palace — one-third hotel, one-third royal residence, one-third museum. A masterpiece of Indo-colonial architecture.",
    image: "images/umaid bhawan.jpg",
    category: "fort",
    tag: "Palace",
    timing: "9 AM – 5 PM",
    entry: "₹30 (Museum)",
  },
  {
    name: "Jaswant Thada",
    desc: "An ornate white marble cenotaph built in 1899. Called the 'Taj Mahal of Marwar', it glows ethereally at sunset.",
    image: "images/jaswant thada.jpg",
    category: "temple",
    tag: "Cenotaph",
    timing: "9 AM – 5 PM",
    entry: "₹30",
  },
  {
    name: "Mandore Gardens",
    desc: "Ancient ruins of the Mandore kingdom set within lush gardens. The temples and Hall of Heroes are truly spectacular.",
    image: "images/mandore garden.jpg",
    category: "nature",
    tag: "Gardens",
    timing: "8 AM – 8 PM",
    entry: "Free",
  },
  {
    name: "Clock Tower & Sardar Market",
    desc: "The iconic Ghanta Ghar tower presides over one of Rajasthan's most colourful markets — spices, textiles, and bangles.",
    image: "images/clock tower.jpg",
    category: "market",
    tag: "Market",
    timing: "All Day",
    entry: "Free",
  },
  {
    name: "Balsamand Lake & Garden",
    desc: "A serene 12th-century man-made lake surrounded by lush gardens and a beautiful palace. Perfect for a peaceful morning.",
    image: "images/balsamand lake.jpg",
    category: "nature",
    tag: "Lake",
    timing: "8 AM – 7 PM",
    entry: "₹30",
  },
  {
    name: "Kaylana Lake",
    desc: "A vast artificial lake famous for its breathtaking sunsets. Migratory birds flock here in winter — a birdwatcher's paradise.",
    image: "images/KaylanaLake.jpg",
    category: "nature",
    tag: "Lake",
    timing: "Sunrise – Sunset",
    entry: "Free",
  },
  {
    name: "Rao Jodha Desert Rock Park",
    desc: "An ecological restoration park at the base of Mehrangarh Fort. Thorn forests, rocky terrain, and rare Thar Desert flora.",
    image: "images/rao jodha.jpg",
    category: "nature",
    tag: "Nature Park",
    timing: "7 AM – 7 PM",
    entry: "₹100",
  },
  {
    name: "Chamunda Mata Temple",
    desc: "Perched within Mehrangarh Fort, this sacred temple of Goddess Chamunda has been worshipped by Jodhpur's royal family for centuries.",
    image: "images/chamunda mata mandir.jpg",
    category: "temple",
    tag: "Temple",
    timing: "5 AM – 9 PM",
    entry: "Free",
  },
  {
    name: "Toorji Ka Jhalra (Stepwell)",
    desc: "An elegantly restored 18th-century stepwell in the old city. The geometric patterns and blue water create a mesmerizing spectacle.",
    image: "images/toorji ka jhalra.jpg",
    category: "fort",
    tag: "Stepwell",
    timing: "All Day",
    entry: "Free",
  },
  {
    name: "Phool Mahal",
    desc: "The 'Palace of Flowers' within Mehrangarh — the most opulent chamber, with gold-filigree ceiling and Mughal miniature paintings.",
    image: "images/phool mahal.jpg",
    category: "fort",
    tag: "Palace",
    timing: "9 AM – 5 PM",
    entry: "Included in Fort ticket",
  },
  {
    name: "Shri Mahamandir Temple",
    desc: "Built in 1812, this temple features 84 intricately carved pillars depicting yoga postures. An architectural jewel of Jodhpur.",
    image: "images/mahamandir.jpg",
    category: "temple",
    tag: "Temple",
    timing: "6 AM – 8 PM",
    entry: "Free",
  },
];

const historicalData = [
  {
    name: "Mehrangarh Fort",
    desc: "Founded in 1459 by Rao Jodha, this is the guardian of Jodhpur. Its seven gates each commemorating a victory tell the saga of Marwar's rulers.",
    image: "images/mehrangarh fort.jpg",
    tag: "Fort · 1459 AD",
    category: "fort",
  },
  {
    name: "Umaid Bhawan Palace",
    desc: "Built between 1929–1943, this Art Deco palace was constructed during a famine to provide employment. It remains one of the world's largest private residences.",
    image: "images/umaid bhawan.jpg",
    tag: "Palace · 1943 AD",
    category: "fort",
  },
  {
    name: "Old City Blue Lanes",
    desc: "The iconic indigo-blue houses of the old city — originally painted blue by Brahmin families to denote status — now a photographer's dream.",
    image: "images/oldcity.jpg",
    tag: "Cultural · 16th Century",
    category: "culture",
  },
  {
    name: "Mandore Ancient Capital",
    desc: "Capital of Marwar before Jodhpur, the ruins of Mandore include memorials of Jodhpur's rulers (devals) and an enchanting sculpture gallery.",
    image: "images/mandore garden.jpg",
    tag: "Ruins · 6th Century",
    category: "ruins",
  },
  {
    name: "Balsamand Lake Palace",
    desc: "This 12th-century lake palace was built in 1159 AD by Balak Rao Parihar. The red sandstone palace on the lake's edge is sheer poetry.",
    image: "images/balsamand lake.jpg",
    tag: "Palace · 1159 AD",
    category: "fort",
  },
  {
    name: "Jaswant Thada Cenotaph",
    desc: "Built in 1899 in memory of Maharaja Jaswant Singh II, this white marble memorial complex includes smaller cenotaphs of the Jodhpur royal family.",
    image: "images/JT.jpg",
    tag: "Cenotaph · 1899 AD",
    category: "memorial",
  },
];

const restaurantsData = [
  {
    name: "The Redstone Cafe",
    desc: "Jodhpur's most iconic rooftop restaurant set in a natural rock garden. Breathtaking fort views, live folk music, and authentic Rajasthani thalis.",
    image: "images/ontherocks.png",
    category: "rooftop",
    tag: "Rooftop",
    rating: "★★★★★",
    price: "₹800–1200",
  },
  {
    name: "Indique",
    desc: "Perched atop Hotel Pal Haveli with stunning Mehrangarh views. Serves traditional Marwari dishes with a contemporary twist. A must-visit sunset spot.",
    image: "images/indique.jpg",
    category: "rooftop",
    tag: "Fine Dining",
    rating: "★★★★★",
    price: "₹1000–1800",
  },
  {
    name: "Gypsy Restaurant",
    desc: "A beloved local institution near Jalori Gate. Famous for its generous Rajasthani thali, mirchi bada, and freshly made makhaniya lassi.",
    image: "images/gypsy.jpg",
    category: "street",
    tag: "Local Favourite",
    rating: "★★★★☆",
    price: "₹200–400",
  },
  {
    name: "Darikhana",
    desc: "The royal dining hall at RAAS Jodhpur — a luxurious heritage restaurant offering Marwari court cuisine in a stunning restored haveli setting.",
    image: "images/darikhana.jpg",
    category: "fine",
    tag: "Fine Dining",
    rating: "★★★★★",
    price: "₹2000–3500",
  },
  {
    name: "Café Sheesh Mahal",
    desc: "A charming cafe inside Mehrangarh Fort's museum complex. Perfect pit-stop for filter coffee, chai, and local snacks between fort exploration.",
    image: "images/cafe-sheesh-mahal.jpg",
    category: "cafe",
    tag: "Café",
    rating: "★★★★☆",
    price: "₹150–350",
  },
  {
    name: "Shahi Samosa & Mirchi Bada",
    desc: "A street-side legend near the Clock Tower. Their crispy mirchi bada (chilli fritters) and pyaaz kachori are the definitive Jodhpur snacks.",
    image: "images/sahisamosa.jpg",
    category: "street",
    tag: "Street Food",
    rating: "★★★★★",
    price: "₹50–150",
  },
  {
    name: "Risala",
    desc: "The fine dining restaurant at Umaid Bhawan Palace. Experience royal dining service, live sitar music, and Rajasthani delicacies in a palace ballroom.",
    image: "images/risala.jpg",
    category: "fine",
    tag: "Palace Dining",
    rating: "★★★★★",
    price: "₹3000–5000",
  },
  {
    name: "Mid Town Restaurant",
    desc: "Unpretentious, hearty and delicious — this local favourite serves fluffy dal baati churma, laal maas, and cooling chaach at very honest prices.",
    image: "images/midtown.jpg",
    category: "street",
    tag: "Authentic Local",
    rating: "★★★★☆",
    price: "₹200–500",
  },
];

const hotelsData = [
  {
    name: "Umaid Bhawan Palace",
    desc: "A Taj Hotel — one of the world's finest palace hotels. Magnificent Art Deco suites, an epic swimming pool, and royal service that redefines luxury.",
    image: "images/tajhotel.jpg",
    category: "luxury",
    tag: "5★ Luxury",
    rating: "★★★★★",
    price: "₹30,000+",
  },
  {
    name: "RAAS Jodhpur",
    desc: "A beautifully restored haveli boutique hotel in the shadow of Mehrangarh Fort. Stunning architecture, a fabulous pool, and spectacular fort views.",
    image: "images/RAAS.jpg",
    category: "heritage",
    tag: "Heritage Boutique",
    rating: "★★★★★",
    price: "₹12,000–25,000",
  },
  {
    name: "Taj Hari Mahal",
    desc: "A colonial-era Taj property with lush courtyards, a gorgeous swimming pool, and Rajasthani-style architecture in the heart of the city.",
    image: "images/tajharimahal.jpg",
    category: "luxury",
    tag: "5★ Luxury",
    rating: "★★★★★",
    price: "₹10,000–20,000",
  },
  {
    name: "Pal Haveli",
    desc: "A 450-year-old haveli transformed into a boutique hotel. Every room is different; the rooftop Indique restaurant is world-class. Superb value.",
    image: "images/palhaveli.jpg",
    category: "heritage",
    tag: "Heritage",
    rating: "★★★★☆",
    price: "₹3,500–7,000",
  },
  {
    name: "Zostel Jodhpur",
    desc: "The best-value social stay in the Blue City. Rooftop lounge with fort views, dorm beds and private rooms, great café, and a buzzing traveller vibe.",
    image: "images/zostel.jpg",
    category: "budget",
    tag: "Budget · Hostel",
    rating: "★★★★☆",
    price: "₹400–1,800",
  },
  {
    name: "Ranbanka Palace",
    desc: "A converted royal residence with old-world charm, manicured gardens, and spacious rooms adorned with Rajput antiques. Excellent value for heritage.",
    image: "images/ranbanka.jpg",
    category: "heritage",
    tag: "Heritage Palace",
    rating: "★★★★☆",
    price: "₹4,000–8,000",
  },
  {
    name: "Hotel Haveli Inn Pal",
    desc: "A mid-range haveli hotel with free fort views, a rooftop terrace, and cosy rooms decorated with traditional Rajasthani textiles and paintings.",
    image: "images/haveli-inn-pal.jpg",
    category: "boutique",
    tag: "Boutique",
    rating: "★★★★☆",
    price: "₹1,500–3,500",
  },
  {
    name: "Gopal Villa Guesthouse",
    desc: "A charming family-run guesthouse in the blue city lanes. Warm hospitality, home-cooked breakfasts, and the most authentic Blue City experience.",
    image: "images/gopalguesthouse.jpg",
    category: "budget",
    tag: "Budget Gem",
    rating: "★★★★☆",
    price: "₹600–1,500",
  },
];

const festivalsData = [
  {
    name: "Rajasthan International Folk Festival",
    month: "October – November",
    image: "images/folkfest.jpg",
    desc: "RIFF — a world-music festival at Mehrangarh Fort under full moon. Music from 40+ countries fills the ancient ramparts.",
  },
  {
    name: "Jodhpur Flamenco & Gypsy Festival",
    month: "February",
    image: "images/flamenco.jpg",
    desc: "Where Rajasthani folk music meets Spanish flamenco in a unique cultural exchange at Mehrangarh.",
  },
  {
    name: "Marwar Festival",
    month: "October",
    image: "images/marwarfest.jpg",
    desc: "Celebrates the life and valor of the heroes of Marwar through folk dances, camel tattoo shows, and polo matches.",
  },
  {
    name: "Nagaur Cattle Fair",
    month: "January – February",
    image: "images/cattlefair.jpg",
    desc: "One of Rajasthan's largest trade fairs — camels, cattle, horses, folk performances, and a dazzling riot of colour.",
  },
  {
    name: "Desert Kite Festival",
    month: "January (Makar Sankranti)",
    image: "images/kitefest.jpg",
    desc: "The sky over Jodhpur fills with thousands of colourful kites during Makar Sankranti — a joyous community celebration.",
  },
  {
    name: "Gangaur Festival",
    month: "March – April",
    image: "images/gangaur.jpg",
    desc: "A vibrant women's festival honouring Goddess Gauri. Processions, traditional songs, and elaborate rituals fill the city.",
  },
];

const craftsData = [
  {
    emoji: "🎨",
    name: "Bandhani Textiles",
    desc: "Tie-dye cloth in vivid Rajasthani colours",
  },
  {
    emoji: "🪔",
    name: "Lacquerware",
    desc: "Lacquered wooden crafts & jewellery",
  },
  {
    emoji: "🪖",
    name: "Mojari Footwear",
    desc: "Hand-embroidered leather shoes",
  },
  {
    emoji: "🪑",
    name: "Blue Pottery",
    desc: "Distinctive turquoise ceramic artware",
  },
  { emoji: "🧿", name: "Thewa Jewellery", desc: "Gold work on Belgian glass" },
  {
    emoji: "🪆",
    name: "Kathputli Puppets",
    desc: "Traditional string marionettes",
  },
  {
    emoji: "🖼️",
    name: "Miniature Paintings",
    desc: "Intricate Marwari school paintings",
  },
  {
    emoji: "🧵",
    name: "Embroidery (Gota)",
    desc: "Gold ribbon appliqué on fabric",
  },
];

const timelineData = [
  {
    year: "1459",
    title: "Founding of Jodhpur",
    text: "Rao Jodha of the Rathore clan founds Jodhpur after relocating from Mandore. Construction of Mehrangarh Fort begins atop a rocky hill.",
  },
  {
    year: "1583",
    title: "Era of Emperor Akbar",
    text: "Jodhpur comes under Mughal suzerainty under Maharaja Udai Singh. The city prospers as a key Silk Road trading post.",
  },
  {
    year: "1678",
    title: "Battle of Deorai",
    text: "Maharaja Jaswant Singh fights Aurangzeb at Deorai. The Marwari cavalry becomes legendary across the subcontinent.",
  },
  {
    year: "1803",
    title: "Treaty with the British",
    text: "Jodhpur signs a treaty with the British East India Company, becoming a princely state with significant autonomy.",
  },
  {
    year: "1929",
    title: "Umaid Bhawan Palace",
    text: "Maharaja Umaid Singh begins construction of his palace — partly to provide employment during a prolonged famine.",
  },
  {
    year: "1949",
    title: "Joining the Republic",
    text: "Jodhpur accedes to the newly independent Republic of India. Maharaja Hanwant Singh signs the instrument of accession.",
  },
];

const itineraries = {
  2: [
    {
      day: "Day 1",
      title: "Forts & The Blue City",
      activities: [
        "Mehrangarh Fort",
        "Phool Mahal",
        "Jaswant Thada",
        "Clock Tower Market",
        "Rooftop sunset dinner",
      ],
    },
    {
      day: "Day 2",
      title: "Palaces & Leisure",
      activities: [
        "Umaid Bhawan Palace Museum",
        "Balsamand Lake",
        "Mandore Gardens",
        "Shopping at Sardar Market",
        "Kaylana Lake sunset",
      ],
    },
  ],
  4: [
    {
      day: "Day 1",
      title: "The Grand Fort",
      activities: [
        "Mehrangarh Fort (full day)",
        "Chamunda Mata Temple",
        "Fort Museum galleries",
        "Sound & Light Show evening",
      ],
    },
    {
      day: "Day 2",
      title: "Old City Walk",
      activities: [
        "Blue lanes walking tour",
        "Toorji Ka Jhalra stepwell",
        "Clock Tower bazaar",
        "Indique rooftop dinner",
      ],
    },
    {
      day: "Day 3",
      title: "Palaces & Lakes",
      activities: [
        "Umaid Bhawan Palace",
        "Balsamand Lake",
        "Kaylana Lake boating",
        "Mandore Gardens",
      ],
    },
    {
      day: "Day 4",
      title: "Day Trip & Shopping",
      activities: [
        "Osian temples day trip",
        "Camel safari",
        "Handicraft shopping",
        "Cooking class",
      ],
    },
  ],
  7: [
    {
      day: "Day 1",
      title: "Arrival & Fort",
      activities: [
        "Check-in",
        "Mehrangarh Fort orientation",
        "Sunset at Jaswant Thada",
      ],
    },
    {
      day: "Day 2",
      title: "Deep Fort Dive",
      activities: [
        "Fort galleries (full day)",
        "Rao Jodha Rock Park",
        "Evening Sound & Light Show",
      ],
    },
    {
      day: "Day 3",
      title: "Old City Exploration",
      activities: [
        "Blue lanes photo walk",
        "Stepwell visit",
        "Spice market tour",
        "Cooking class",
      ],
    },
    {
      day: "Day 4",
      title: "Palace Day",
      activities: [
        "Umaid Bhawan Palace Museum",
        "Balsamand Lake",
        "Royal dining at Risala",
      ],
    },
    {
      day: "Day 5",
      title: "Desert Day Trip",
      activities: [
        "Osian Sun Temple",
        "Desert camel safari",
        "Village homestay",
        "Rajasthani folk evening",
      ],
    },
    {
      day: "Day 6",
      title: "Lakes & Gardens",
      activities: [
        "Kaylana Lake sunrise",
        "Mandore Gardens",
        "Mahamandir Temple",
        "Sardar Market shopping",
      ],
    },
    {
      day: "Day 7",
      title: "At Leisure",
      activities: [
        "Spa morning",
        "Last-minute shopping",
        "Farewell Rajasthani thali",
      ],
    },
  ],
};

// ─── NAVIGATION ─────────────────────────────────

function navigateTo(pageId) {
  const transition = document.getElementById("pageTransition");
  transition.classList.add("active");

  setTimeout(() => {
    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    document.querySelectorAll(".nav-link").forEach((l) => {
      l.classList.toggle("active", l.dataset.page === pageId);
    });

    const target = document.getElementById(`page-${pageId}`);
    if (target) {
      target.classList.add("active");
      window.scrollTo(0, 0);
    }

    renderPage(pageId);

    setTimeout(() => transition.classList.remove("active"), 300);
  }, 300);

  // Close mobile menu
  document.getElementById("navLinks").classList.remove("open");
}

function renderPage(pageId) {
  if (pageId === "places") renderCards("placesGrid", placesData);
  if (pageId === "historical") {
    renderTimeline();
    renderCards("historicalGrid", historicalData);
  }
  if (pageId === "restaurants") renderCards("restaurantsGrid", restaurantsData);
  if (pageId === "hotels") renderCards("hotelsGrid", hotelsData);
  if (pageId === "culture") {
    renderFestivals();
    renderCrafts();
  }
  if (pageId === "travel") {
    renderItinerary(2);
    setupItinTabs();
  }
}

// ─── CARD RENDERER ──────────────────────────────

function renderCards(gridId, data, filter = "all") {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  const filtered =
    filter === "all" ? data : data.filter((d) => d.category === filter);

  grid.innerHTML = filtered
    .map(
      (item, i) => `
    <div class="card" style="animation-delay:${i * 0.06}s">
      <div class="card-img"
     style="background-image:url('${item.image}')">
    <div class="card-badge">${item.tag}</div>
</div>
      <div class="card-body">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="card-meta">
          ${item.timing ? `<span class="card-tag">⏰ ${item.timing}</span>` : ""}
          ${item.entry ? `<span class="card-tag">🎟️ ${item.entry}</span>` : ""}
          ${item.rating ? `<span class="card-stars">${item.rating}</span>` : ""}
          ${item.price ? `<span class="card-price">${item.price}</span>` : ""}
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// ─── TIMELINE ───────────────────────────────────

function renderTimeline() {
  const tl = document.getElementById("timeline");
  if (!tl || tl.children.length) return;

  tl.innerHTML = timelineData
    .map(
      (item, i) => `
    <div class="timeline-item" style="animation-delay:${i * 0.1}s">
      <div class="timeline-body">
        <div class="timeline-year">${item.year}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
      <div class="timeline-dot"></div>
      <div class="timeline-body" style="visibility:hidden"></div>
    </div>
  `,
    )
    .join("");
}

// ─── FESTIVALS & CRAFTS ─────────────────────────

function renderFestivals() {
  const grid = document.getElementById('festivalsGrid');
  if (!grid || grid.children.length) return;

  grid.innerHTML = festivalsData.map((f, i) => `
    <div class="festival-card" style="animation-delay:${i * 0.07}s">

      <div class="festival-image">
        <img src="${f.image}" alt="${f.name}">
      </div>

      <div class="festival-body">
        <h3>${f.name}</h3>
        <p class="festival-month">📅 ${f.month}</p>
        <p>${f.desc}</p>
      </div>

    </div>
  `).join('');
}

function renderCrafts() {
  const grid = document.getElementById("craftsGrid");
  if (!grid || grid.children.length) return;

  grid.innerHTML = craftsData
    .map(
      (c, i) => `
    <div class="craft-card" style="animation-delay:${i * 0.05}s">
      <div class="craft-emoji">${c.emoji}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
    </div>
  `,
    )
    .join("");
}

// ─── ITINERARY ──────────────────────────────────

function renderItinerary(days) {
  const content = document.getElementById("itineraryContent");
  if (!content) return;

  const plan = itineraries[days];
  content.innerHTML = plan
    .map(
      (day) => `
    <div class="itin-day">
      <div class="itin-day-label">${day.day}</div>
      <h3>${day.title}</h3>
      <div class="itin-activities">
        ${day.activities.map((a) => `<span class="itin-act">${a}</span>`).join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

function setupItinTabs() {
  const tabs = document.querySelectorAll(".itin-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderItinerary(parseInt(tab.dataset.days));
    });
  });
}

// ─── FILTER BARS ────────────────────────────────

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  const bar = btn.closest(".filter-bar");
  bar
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  const filter = btn.dataset.filter;
  const page = document.querySelector(".page.active");

  if (page.id === "page-places") renderCards("placesGrid", placesData, filter);
  if (page.id === "page-historical")
    renderCards("historicalGrid", historicalData, filter);
  if (page.id === "page-restaurants")
    renderCards("restaurantsGrid", restaurantsData, filter);
  if (page.id === "page-hotels") renderCards("hotelsGrid", hotelsData, filter);
});

// ─── NAV LINKS ──────────────────────────────────

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

document
  .querySelector(".nav-logo")
  .addEventListener("click", () => navigateTo("home"));

document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

// ─── NAVBAR SCROLL ──────────────────────────────

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ─── STAT COUNTERS ──────────────────────────────

function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = document.querySelectorAll(".stat-card");
        const ids = ["s1", "s2", "s3", "s4"];
        const vals = [15, 1459, 12, 410];
        ids.forEach((id, i) =>
          animateCounter(document.getElementById(id), vals[i]),
        );
        observer.disconnect();
      }
    });
  },
  { threshold: 0.3 },
);

const statsSection = document.querySelector(".stats-section");
if (statsSection) observer.observe(statsSection);

// ─── INIT ────────────────────────────────────────

renderPage("home");
