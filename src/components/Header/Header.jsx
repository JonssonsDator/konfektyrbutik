import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Candy, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigation = [
        { name: 'Hem', path: "/" },
        { name: 'Utbud', path: "/selection" },
        { name: 'Om Oss', path: "/about" },
        { name: 'Nyheter', path: '/news' },
        { name: 'Kontakt', path: '/contact' }
    ]

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                <NavLink to="/" className={styles.logoLink}>
                    <Candy size={28} aria-hidden="true" />
                    Mönsterås Konfektyr
                </NavLink>
                </div>

                {/* Desktop Nav */}
                <nav className={styles.navDesktop} aria-label="Primary Navigation">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`
                        }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Nav */}
                <button
                    className={styles.menuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                    aria-expanded={isMenuOpen}
                    aira-controls="mobile-nav"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>     
            </div>
            {isMenuOpen && (
                <nav id="mobile-nav" className={`${styles.navMobile} ${isMenuOpen ? styles.open : ''}`} aria-label="Mobile Navigation">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path === 'home' ? '/' : `${item.path}`}
                            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`
                        }
                        onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            )}
        </header>
    )
}

export default Header;