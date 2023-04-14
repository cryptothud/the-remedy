import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {

    const location = useLocation();
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false)

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
        <>
            <div className="navbar-spacer" />
            <div className="navbar">
                <div className="logo">
                    <img src="/logo.png" alt="The Remedy" onClick={() => { navigate("/"); window.scrollTo(0, 0) }} />
                </div>
                <div className="links">
                    {links.map((o) => {
                        return (
                            <h2 key={o.href} onClick={() => { navigate(o.href); window.scrollTo(0, 0) }} style={location.pathname === o.href ? { background: '#f5eeee34' } : {}}>
                                {o.name}
                            </h2>
                        )
                    })}
                </div>

                {/* mobile */}
                <div className="mobile-dropdown-overlay" style={menu ? { opacity: 1 } : { opacity: 0, pointerEvents: 'none' }} onClick={() => setMenu(!menu)} />
                <div
                    className={`buttonWrapper ${menu ? "open" : "closed"}`}
                    onClick={() => setMenu(!menu)}
                >
                    <div className="hamburger" />
                </div>
                <div className="mobile-links" style={menu ? { opacity: 1, right: '0px' } : { opacity: 0, right: '-400px' }}>
                    <div className="mobile-logo">
                        <img src="/logo.png" alt="The Remedy" onClick={() => { navigate("/"); window.scrollTo(0, 0) }} />
                    </div>
                    {links.map((o) => {
                        return (
                            <h2 key={o.href} onClick={() => { navigate(o.href); setMenu(false); window.scrollTo(0, 0) }} style={location.pathname === o.href ? { background: '#f5eeee34' } : {}}>
                                {o.name}
                            </h2>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Navbar