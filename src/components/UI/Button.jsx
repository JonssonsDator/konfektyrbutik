import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, variant = "primary", to, ...props }) => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        if (to) {
            navigate(to)
        }
        if (props.onClick) {
            props.onClick(e)
        }
    }

    return (
        <button className={`${styles.button} ${styles[variant]}`} 
        onClick={handleClick}
        {...props}
        >
            {children}
        </button>
    );
}

export default Button;