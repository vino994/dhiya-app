# 🛍️ Dhiya Store

A modern, colorful **e-commerce demo application** built with **React** and **Bootstrap**.  
This project showcases login/signup, product browsing, cart management, and a mock checkout flow — styled with vibrant gradients and animations.

![Dhiya Store Screenshot](./screenshot.png) <!-- replace with actual screenshot -->

---

## ✨ Features

- **Authentication**
  - Signup, Login, Logout
  - Session persisted in `localStorage`
- **Dashboard**
  - Personalized greeting
  - Placeholder for profile and orders
- **Products**
  - Stylish product cards
  - Product detail page
- **Cart & Checkout**
  - Add items to cart
  - Step-based checkout (address → payment → confirmation)
  - Mock payment integration (extendable with Stripe/PayPal)
- **UI/UX**
  - Responsive with **Bootstrap 5**
  - **Bootstrap Icons** for branding
  - Animated gradients & hover effects
  - Offcanvas side navigation on mobile

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/) + [React Router](https://reactrouter.com/)  
- **UI Library:** [React Bootstrap](https://react-bootstrap.github.io/) + [Bootstrap Icons](https://icons.getbootstrap.com/)  
- **State:** Custom hooks (`useAuth`, `useCart`) with `localStorage` persistence  
- **Styling:** Custom `App.css` with Google Fonts (Poppins + Inter), gradients, animations  

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
Clone this repository and install dependencies:
```bash
git clone https://github.com/yourusername/dhiya-store.git
cd dhiya-store
npm install
