import React, { memo } from 'react';
import clsx from "clsx";
import styles from './Header.module.scss';

interface NavbarProps {
  className?: string
}

export const Header = memo(({ className }: NavbarProps) => {
    return (
        <header className={clsx(styles.container, className)}>
            <nav className={styles.navContnet}>
                <div className={styles.}
            </nav>
        </header>
    );
});

export default Header;
