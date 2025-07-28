# IELTS Course Product Page – Frontend Engineer Assessment

This project is a product landing page built for the **Frontend Engineer (Level 1) Assessment** by 10 Minute School. The page is inspired by the "IELTS Course by Munzereen Shahid" and replicates its functionality using modern frontend technologies.

## 🚀 Tech Stack

- **Framework:** Next.js (v14)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **API Integration:** 10 Minute School public API
- **SSR & ISR:** Implemented using Next.js
- **Media Handling:** YouTube embed for course trailer
- **SEO:** Dynamic metadata injection from API
- **Localization:** Supports `en` and `bn` via API query param
- **Libraries Used:**
  - `clsx` for conditional classes
  - `framer-motion` for animations
  - `react-player` for YouTube video embedding

## 🔍 Features Implemented

- Dynamic course title and HTML description rendering
- Product trailer from YouTube (using API media)
- Course instructors section
- “What you will learn” pointers section
- Course layout and exclusive features
- Detailed course content with HTML rendering
- Checklist components
- Reusable UI components (Card, Button, Section blocks)
- Server-side rendering (SSR) with `getServerSideProps`
- Incremental static regeneration (ISR) with fallback
- SEO metadata generation from API response

## 🧪 API Used


## 📦 How to Run Locally

```bash
git clone https://github.com/your-username/ielts-course-10ms.git
cd ielts-course-10ms
npm install
npm run dev
