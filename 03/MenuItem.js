import React from 'react';

const MenuItem = (props) => {
    const { textKontakt, urlKontakt, textAdres, urlAdres } = props;
    return (
        <>
            <li>
                <a href={urlKontakt}> {textKontakt}</a>
            </li>
            <li>
                <a href={urlAdres}> {textAdres}</a>
            </li>
        </>
    )
}




export default MenuItem;