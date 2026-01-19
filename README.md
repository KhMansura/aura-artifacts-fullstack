# 🏺 Aura Artifacts - Luxury Antique Marketplace

**Aura Artifacts** is a high-end marketplace application for rare historical artifacts. Built with a modern tech stack, it provides an elegant gallery for users and a secure management portal for administrators.

---

## 🛠️ Implemented Features

1. **Elegant Landing Page:** Featuring 7 distinct sections including Hero, Featured Collections, Heritage Story, and more.
2. **Public Artifact Gallery:** A responsive grid showing 16+ rare artifacts with images, names, and pricing fetched from a custom API.
3. **Dynamic Item Details:** Each artifact has its own dedicated page providing deep historical context and high-resolution visuals.
4. **Mock Authentication:** A secure login system using hardcoded credentials and **HTTP-only Cookies** for session management.
5. **Protected Admin Dashboard:** A secure `/add-item` route accessible only to logged-in admins to expand the collection.
6. **Toast Notifications:** Real-time feedback using `react-hot-toast` for successful item creation and authentication errors.
7. **Express Server API:** A custom-built backend that serves artifact data and persists new entries using JSON.

---

## 🚀 Route Summary

| Route | Accessibility | Description |
|-------|---------------|-------------|
| `/` | Public | Homepage with marketing sections. |
| `/items` | Public | Full gallery of artifacts. |
| `/items/[id]` | Public | Detailed view of a specific artifact. |
| `/login` | Public | Admin login page. |
| `/add-item` | **Protected** | Form to add new artifacts (Requires Login). |

---

## 🔑 Admin Credentials
- **Email:** `mansura@aura.com`
- **Password:** `aura2026`

---

## 🏗️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Backend Setup
```bash
cd server
npm install
node index.js
Server will run on http://localhost:5000
```
### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
Frontend will run on http://localhost:3000
```
💡 Feature Explanation

    Middleware Protection: Uses Next.js Middleware to intercept requests to /add-item. If the aura_session cookie is missing, the user is automatically redirected to /login.

    Data Persistence: Instead of a complex DB setup, this project uses an artifacts.json file. The Express server reads and writes to this file, ensuring data stays saved even after server restarts.

    Responsive Design: Fully optimized for mobile, tablet, and desktop using Tailwind CSS's utility-first grid system.