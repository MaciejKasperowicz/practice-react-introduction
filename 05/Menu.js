import React from 'react';
import MenuItem from './MenuItem';

// const menuItemProps = { textHome: "home", urlHome: "/", textKontakt: "kontakt", urlKontakt: "/contact" }


const Menu = (props) => {
    // console.log(props);
    const { items } = props;
    // console.log(items);
    return (
        <ul>
            {/* <MenuItem {...props} /> */}
            {items.map(item => <MenuItem {...item} />)}
        </ul>
    )
}

export default Menu;