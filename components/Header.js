import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Masthead.module.css';

export default function Header({ dark }) {
    const [open, setOpen] = useState(false);

    /**
     * If in mobile view open and close the menu
     */
    const handlePopupClick = () => {
        setOpen(!open);
    };

    return (
        <div className={`${styles.nav} ${dark ? styles.dark : ''}`}>
            <Link href="/">
                <a>
                    <img src="/strapi-dev-logo.svg" />
                </a>
            </Link>
            <div className={styles.left_nav_button}>
                <a
                    href="https://alex543742.typeform.com/to/HchPvNAJ"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className={styles.login}>Add your Profile</button>
                </a>
                <a href="mailto:alex@entreprenerd.xyz" target="_blank" rel="noopener noreferrer">
                    <button className={styles.job}>Recruiters</button>
                </a>
            </div>
            <div className={styles.left_nav_hamburger} onClick={() => handlePopupClick()}>
                <img src="/menu-ham.svg" />
            </div>
            <div className={`${styles.menu_popup} ${open ? styles.open : ''}`}>
                <a
                    href="https://alex543742.typeform.com/to/HchPvNAJ"
                    target="_blank"
                    rel="noopener noreferrer">
                    <p>Add your Profile</p>
                </a>

                <a href="mailto:alex@entreprenerd.xyz" target="_blank" rel="noopener noreferrer">
                    <p>Recruiters</p>
                </a>
            </div>
        </div>
    );
}
