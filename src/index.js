import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

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
  <>
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
                <a onClick={() => window.location.href = (o.href)}>
                  {o.name}
                </a>
              )
            })}
          </div>
          <h3>{links.find((link) => link.href === window.location.href)?.name}</h3>
        </div>
      </div>
    </div>
    <div className="center-col">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
    <button onClick={() => window.location.href = ("#!/~/cart")} className="cart-button">
      Cart
    </button>
  </>
);