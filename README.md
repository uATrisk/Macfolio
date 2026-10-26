# Macfolio 🖥️✨

<div align="center">

  **An interactive macOS-inspired desktop portfolio website built with React, TypeScript, Tailwind CSS, GSAP, and Vite.**

  <br />

  [![Live Demo](https://img.shields.io/badge/Live_Portfolio-uatrisk.github.io%2FMacfolio-2ea44f.svg?style=for-the-badge&logo=safari&logoColor=white)](https://uatrisk.github.io/Macfolio/)

  <br /><br />

  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![React](https://img.shields.io/badge/React-19.2-61dafb.svg?logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38b2ac.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![GSAP](https://img.shields.io/badge/GSAP-3.14-88ce02.svg?logo=greensock&logoColor=white)](https://gsap.com/)
  [![Vite](https://img.shields.io/badge/Vite-6.0-646cff.svg?logo=vite&logoColor=white)](https://vitejs.dev/)

  <br />

  [Explore Features](#-features) •
  [Tech Stack](#-tech-stack) •
  [Getting Started](#-getting-started) •
  [Project Structure](#-project-structure) •
  [Author](#-author)

</div>

---

## 🌟 Overview

**Macfolio** reimagines the developer portfolio as a fully functional macOS desktop operating system in the browser. Designed with pixel-perfect attention to detail, smooth physics-based animations, and responsive window management, it delivers an immersive showcase of projects, technical skills, competitive programming achievements, and background.

---

## 🚀 Features

- **🍎 Authentic macOS Experience**:
  - Interactive Dock with smooth magnification and bouncy icon tooltips.
  - macOS Menu Bar with real-time clock, status indicators, and interactive Wi-Fi / Bluetooth dropdown controls.
  - Apple startup boot screen with classic chime audio preloader.

- **🪟 Advanced Window Management**:
  - Freely draggable, focusable, minimizable, and maximizable windows powered by GSAP and custom state management.
  - Active z-index handling brings clicked windows to the foreground.

- **📁 Finder (Portfolio Explorer)**:
  - Browse projects, about information, and documents with macOS-style folder navigation.

- **💻 Terminal (Tech Stack)**:
  - Command-line interface displaying languages, frontend, backend, databases, and DevOps tools with execution status.

- **🧭 Safari (Bio & Profiles)**:
  - Custom browser interface highlighting professional summary, competitive programming ratings (LeetCode, Codeforces, CodeChef), and contact channels.

- **📄 Resume Viewer**:
  - In-window PDF viewer with zoom controls and page navigation.

- **🖼️ Photos & Wallpapers**:
  - Gallery viewer and customizable desktop backgrounds.

- **📬 Contact Hub**:
  - Quick-access social cards and direct mail integration.

---

## 💼 Featured Projects Showcase

The portfolio showcases several of Ansh's key full-stack and systems engineering projects:

| Project | Description | Tech Stack | Links |
| :--- | :--- | :--- | :--- |
| **CLMS** | Full-stack university laundry platform with real-time status and OTP pickup verification. | React, TypeScript, Node.js, Express, Prisma, PostgreSQL, Google OAuth | [Live Demo](https://clms-murex.vercel.app/) • [GitHub](https://github.com/uATrisk/clms) |
| **TeleVault** | Zero-knowledge, client-side AES-256-GCM encrypted media vault backed by Telegram & Cloudflare. | React, WebCrypto API, Cloudflare Workers & D1, Telegram Bot API | [GitHub](https://github.com/uATrisk/tele-vault) |
| **Chai Adda** | College canteen management system with real-time tracking, student reviews, and vendor analytics. | Next.js, Node.js, Express, PostgreSQL, Prisma ORM | [Live Demo](https://chai-adda-system.vercel.app/) • [GitHub](https://github.com/uATrisk/ChaiAdda-System) |
| **PSYS** | Multi-tenant face-recognition classroom attendance system matching camera captures with pgvector. | Next.js, Python, OpenCV, Supabase, pgvector | [GitHub](https://github.com/ps-ys/PSYS) |
| **AI Resume Ranker** | Intelligent CV screening tool utilizing TF-IDF similarity scoring and automated candidate tiering. | Python, Streamlit, Scikit-learn, NLTK | [GitHub](https://github.com/uATrisk/ai_candidate_evaluation) |

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core UI library for component composition and state |
| **TypeScript** | Type safety and developer experience |
| **Tailwind CSS v4** | Modern styling and responsive macOS design system |
| **GSAP & @gsap/react** | Smooth window dragging physics and interactive animations |
| **Framer Motion** | Fluid transitions, menu toggles, and UI animations |
| **Zustand & Immer** | Global window state and location store |
| **Lucide React** | Clean, modern iconography |
| **Vite** | Blazing-fast development server and optimized build bundling |

---

## 💻 Getting Started

Follow these steps to run Macfolio locally on your machine:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/uATrisk/Macfolio.git
   cd Macfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```text
Macfolio/
├── public/
│   ├── files/          # Documents (resume.pdf, audio sound)
│   ├── icons/          # SVG system & app icons
│   └── images/         # Wallpapers, app preview assets, and badges
├── src/
│   ├── components/     # UI Components (Navbar, Dock, Desktop, Welcome, Preloader)
│   ├── constants/      # App metadata, nav links, tech stack, and locations
│   ├── hoc/            # WindowWrapper HOC for window behavior & drag physics
│   ├── store/          # Zustand state stores (window, location)
│   ├── windows/        # Desktop apps (Finder, Safari, Terminal, Resume, Contact, Photos)
│   ├── App.tsx         # Main application container
│   ├── main.tsx        # Application entry point
│   └── index.css       # Tailwind CSS & global styles
├── index.html          # HTML entry point
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite bundler configuration
```

---

## 👤 Author

**Ansh Tomar**

- **GitHub:** [@uATrisk](https://github.com/uATrisk)
- **LinkedIn:** [Ansh Tomar](https://www.linkedin.com/in/ansh-tomar-03a493302/)
- **LeetCode:** [@uATrisk](https://leetcode.com/u/uATrisk/)
- **Codeforces:** [anshtomarrr](https://codeforces.com/profile/anshtomarrr)
- **Email:** [anshtomarrr@gmail.com](mailto:anshtomarrr@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
