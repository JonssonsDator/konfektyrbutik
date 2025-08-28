import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { RiTwitterXFill} from 'react-icons/ri';

import styles from './Footer.module.css';

const Footer = () => {
  const navigation = [
    { name: 'Hem', path: '/' },
    { name: 'Utbud', path: '/selection' },
    { name: 'Om Oss', path: '/about' },
    { name: 'Nyheter', path: '/news' },
    { name: 'Kontakt', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/', username: 'monsteraskonfektyr', icon: <SiInstagram size={28} /> },
    { name: 'Facebook', url: 'https://www.facebook.com/groups/849704003566165/', username: 'Mönsteråsvikens Konfektyr', icon: <SiFacebook size={28} /> },
    { name: 'X', url: 'https://x.com/', username: 'monsteraskonfektyr', icon: <RiTwitterXFill size={28} /> }
  ];

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.mainSection}>
            <nav className={styles.nav} aria-label="Footer Navigation">
                <h3>Snabb Länkar</h3>
            {navigation.map((item) => (
                <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                }
                >
                {item.name}
                </NavLink>
            ))}
            </nav>

            <div className={styles.contact}>
                <h3>Kontakt Information</h3>
                <div className={styles.contactGroup}>
                    <MapPin size={18} />
                    <p>Sjötorgsvägen 8, 38330, Mönsterås</p>
                </div>
                <div className={styles.contactGroup}>
                    <Mail size={18} />
                    <p>
                        <a href="mailto:info@monsterasvikenskonfektyr.se" className={styles.contactLink}>
                        info@monsterasvikenskonfektyr.se
                        </a>
                    </p>
                </div>
                <div className={styles.contactGroup}>
                    <Phone size={18} />
                    <p>
                        <a href="tel:0123456789" className={styles.contactLink}>
                        0123-456789
                        </a>
                    </p>
                </div>
            </div>

            <div className={styles.social} aria-label="Social Media Links">
                <h3>Följ Oss</h3>
            {socialLinks.map((item) => (
                <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={item.name}
                >
                    <div className={styles.socialItem}>
                        {item.icon}
                        <span>@{item.username}</span>
                    </div>
                </a>
            ))}
            </div>
        </div>

        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} Mönsteråsvikens Konfektyr. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
