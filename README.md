# 🛒 Next.js Product Management App

A simple **Next.js 15 (App Router)** application with **NextAuth.js authentication** that includes public and protected pages. Users can browse products, view details, and manage products (add new ones) after logging in.

---

## 🚀 Features

### 🔓 Public Pages
- **Landing Page (`/`)**
  - Includes: Navbar, Hero, Product Highlights, and Footer
  - Navigation links to **Login** and **Products**

- **Login (`/login`)**
  - Authentication with **NextAuth.js**
  - Supports Google / Credentials login
  - Redirects authenticated users to `/products`

- **Product List (`/products`)**
  - Displays product list from mock backend or static file
  - Shows **name, description, price** with a "Details" button

- **Product Details (`/products/[id]`)**
  - Publicly accessible page showing full product details

### 🔒 Protected Pages
- **Add Product (`/dashboard/add-product`)**
  - Only available to authenticated users
  - Form to add a new product
  - Saves product data to database (or mock API)
  - Redirects unauthenticated users to `/login`

---

## ✨ Optional Enhancements
- ✅ Loading spinner during form submissions  
- ✅ Toast message on successful product add  
- ✅ Light/Dark theme toggle  

---

## 🛠️ Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/docs) – React framework  
- [NextAuth.js](https://next-auth.js.org/) – Authentication  
- [Tailwind CSS](https://tailwindcss.com/) – Styling (optional)  
- [Route Handlers (`/api`)](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) – Backend endpoints  
- Mock backend or simple Express.js server for product data  

---

## 📂 Project Structure


---

## ⚡ Getting Started

### 1️⃣ Clone Repo
```bash
git clone https://github.com/your-username/nextjs-task.git
cd nextjs-task

npm install
npm run dev

