import React from 'react';
import PropTypes from 'prop-types';


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

MenuItem.propTypes = {
    textHome: PropTypes.string.isRequired,
    urlHome: PropTypes.string.isRequired,
    textKontakt: PropTypes.string.isRequired,
    urlKontakt: PropTypes.string.isRequired
}




export default MenuItem;