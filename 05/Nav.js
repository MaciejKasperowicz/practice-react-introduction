import React from 'react';
import Menu from "./Menu"

// const arr = [<li>item1</li>, <li>item2</li>];
// const jsx = <ul>{arr}</ul>;

const Nav = () => {
    return (
        <nav>
            <Menu
                items={[
                    { text: 'strona główna', url: '/' },
                    { text: 'www', url: '/www' }
                ]}
            />
        </nav>
    )
}
export default Nav;