import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Link } from 'react-router-dom';

const links = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Store",
    href: "/store"
  },
  {
    name: "Hemp Education",
    href: "/hemp-education"
  },
  {
    name: "Legal",
    href: "/legal"
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <div className="header-wrapper">
      <div className="header">
        <div className="header-inner">
          <div className="logo-text">
            <h1>The Remedy</h1>
            <h2>Hemp-derived CBD products (including Delta-8)</h2>
          </div>
          <div className="navbar">
            {links.map((o) => {
              return (
                <Link to={o.href}>
                  {o.name}
                </Link>
              )
            })}
          </div>
          <h3>{links.find((link) => link.href === window.location.href)?.name}</h3>
        </div>
      </div>
    </div>
    <div className="center-col">
      <App />
    </div>
    <button onClick={() => window.location.href = ("#!/~/cart")} className="cart-button">
      Cart
    </button>
  </BrowserRouter>
);