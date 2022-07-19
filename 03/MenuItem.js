import React from 'react';

const MenuItem = (props) => {
    const { textHome, urlHome, textKontakt, urlKontakt } = props;
    return (
        <>
            <li>
                <a href={urlKontakt}> {textKontakt}</a>
            </li>
            <li>
                <a href={urlHome}> {textHome}</a>
            </li>
        </>
    )
}




export default MenuItem;