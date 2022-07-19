import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';

const menuProps = { textKontakt: "kontakt", urlKontakt: "/contact", textAdres: "adres", urlAdres: "/adres" }
ReactDOM.render(
    <MenuItem {...menuProps} />,
    // <MenuItem textKontakt="kontakt" urlKontakt="/contact" textAdres="adres" urlAdres="/adres" />,
    document.querySelector("#root")
)