import React from 'react';
import logo from '/public/logo.png';
import Button from '../button/Button';

export default function Header(props) {
    const styles = {
        header: {
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 0",
            marginBottom: "16px",
            alignItems: "baseline",
            height: "58px"
        },
        logo: {
            width: "156px",
            height: "24px"
        }
    }

    return (
        <header style={styles.header}>
            <img style={styles.logo} src={logo} alt="MoySklad Logo" />
            <Button onClick={props.onOpenModal}/>
        </header>
    )
}