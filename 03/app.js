import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

const menuProps = { textHome: "home", urlHome: "/", textKontakt: "kontakt", urlKontakt: "/contact" }
ReactDOM.render(
    <MenuItem {...menuProps} />,
    // <MenuItem textKontakt="kontakt" urlKontakt="/contact" textAdres="adres" urlAdres="/adres" />,
    document.querySelector("#root")
)