import React from 'react';
import MenuItem from '../03/MenuItem';


const menuItemProps = { textHome: "home", urlHome: "/", textKontakt: "kontakt", urlKontakt: "/contact" }


const Menu = () => {
    return (
        <ul>
            <MenuItem {...menuItemProps} />
        </ul>
    )
}

export default Menu;