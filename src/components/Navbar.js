import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();
    
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
            name: "Legal Resources",
            href: "/legal"
        },
        {
            name: "Contact Us",
            href: "/contact"
        },
    ]

    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="The Remedy" />
            </div>
            <div className="links">
                {links.map((o) => {
                    return (
                        <Link key={o.href} to={o.href} style={location.pathname === o.href ? { background: '#f5eeee34' } : {}}>
                            {o.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar