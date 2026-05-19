# 🛍️ Headless WooCommerce + Next.js E-Commerce Store

Welcome to my headless e-commerce project! This platform is built with **Next.js** on the frontend, powered by a **Headless WordPress + WooCommerce** backend via the REST API, styled with **Tailwind CSS**, and polished with **shadcn/ui** components.

I built this project as a dedicated learning experiment to master headless CMS architecture, dynamic data fetching from external REST APIs, and decoupled application states.

---

## 🚀 Live Demo & Hosting

- **Frontend Deployment:** [Your Vercel/Netlify Deployment Link]
- **Backend WordPress/WooCommerce Instance:** Hosted on **Pantheon** (utilizing their developer free tier).

---

## 🛠️ Tech Stack & Architecture

This project adopts a completely decoupled **Headless Architecture**, splitting content management from the presentation layer for lightning-fast performance and full design control.

### Frontend

- **Framework:** [Next.js](https://nextjs.org/) (App Router) — For static generation, server-side rendering, and API routing.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) — For rapid, utility-first responsive layout design.
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) — Radix UI primitives styled with Tailwind CSS for accessible, premium-tier interactive components.
- **State Management:** React Context API (for persistent shopping cart states).

### Backend (Headless CMS)

- **Core CMS:** [WordPress](https://wordpress.org/) — Acting strictly as a decoupled backend data store.
- **E-Commerce Engine:** [WooCommerce](https://woocommerce.com/) — Managing the product catalog, inventory variations, categories, and tax logic.
- **Data Transport:** **WordPress REST API** — Delivering JSON payloads from WordPress to Next.js data-fetching hooks.
- **Hosting:** [Pantheon](https://pantheon.io/) — Leveraged their robust, containerized free tier for cloud-hosting the WordPress core environment.

### Payment Processing

- **Gateway:** [Stripe](https://stripe.com/) — Secure checkout implementation processing mock payments through Stripe Checkout / Elements.

---

## ✨ Features & Project Scope

### Core Functionalities Built:

- **Dynamic Product Catalog:** Fetches categories, tags, images, and live inventories directly from the WordPress REST API.
- **Rich Product Detail Pages:** Renders metadata, price fluctuations, descriptions, and galleries.
- **Client-Side Shopping Cart:** Add, update, and remove products seamlessly with instantaneous UI updates via `shadcn/ui` feedback indicators.
- **Stripe Integration:** Secure end-to-end checkout processing using Stripe sandbox tokens.

### 💡 Purpose-Driven Scope Limitations (No Auth Layer)

To keep the educational focus strictly on API consumption, headless state synchronizations, and UI engineering, the following architectural constraints were intentionally chosen:

- **No Authentication Flow:** There is **no login or logout functionality** built into this system. Anyone can view products, modify their local cart, and proceed to check out without an account.
- **Stateless Client Profiles:** Cart data is tied entirely to the user's local client-side state rather than being synced to a backend user database account. This kept the development scoped directly to mastering external REST endpoints and decoupled checkout pipelines.

---

🔧 Getting Started & Local Installation
Follow these steps to run the frontend locally while connecting to your backend server.

Prerequisites
Node.js (v18.x or higher)

An active WordPress + WooCommerce instance (e.g., hosted on Pantheon) with Legacy API enabled or standard REST endpoints exposed.

1. Clone the Repository
   Bash
   git clone [https://github.com/Baptist20/yeezy-clone]
   cd YOUR_REPOSITORY_NAME
2. Install Project Dependencies
   Bash
   npm install
3. Set Up Environment Variables
   Create a .env.local file in the root of your frontend project directory and populate it with your Pantheon WordPress keys and Stripe developer credentials:

Code snippet

# Headless WordPress Config

NEXT_PUBLIC_WORDPRESS_URL=[https://dev-your-pantheon-site.pantheonsite.io](https://dev-your-pantheon-site.pantheonsite.io)
WORDPRESS_CONSUMER_KEY=
WORDPRESS_CONSUMER_SECRET=

# Stripe Payment Config

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_URL=http://localhost:3000
Run the Development Server
Bash
npm run dev
Open http://localhost:3000 with your browser to explore the live local architecture.

📈 Key Technical Lessons Learned
Decoupled Data Workflows: Learned how to safely map out REST API data arrays from WooCommerce schemas into optimized TypeScript interfaces on the frontend.

Server-Side vs. Client-Side Rendering: Mastered utilizing Next.js Server Components for initial page loading to boost SEO performance, alongside client-side state for local shopping carts.

Handling Headless Checkouts: Synchronized product cart data to generate correct line items inside Stripe payment nodes without relying on standard monolithic WooCommerce checkout templates.

Pantheon Cloud Configurations: Gained configuration familiarity with headless environments hosted on managed hosting distributions like Pantheon.

📄 License
This project is open-source and available under the MIT License.
