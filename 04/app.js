import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from "../03/MenuItem";

const menuItemProps = { textHome: "home", urlHome: "/", textKontakt: "kontakt", urlKontakt: "/contact" }

const Nav = () => {
    return (
        <nav>
            <Menu />
        </nav>
    )
}

const Menu = () => {
    return (
        <ul>
            <MenuItem {...menuItemProps} />
        </ul>
    )
}

ReactDOM.render(
    <Nav />,
    document.querySelector("#root")
)