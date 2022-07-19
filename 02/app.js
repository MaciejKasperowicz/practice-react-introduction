import React from 'react';
import ReactDOM from 'react-dom';

const fnStyles = {
    border: "1px solid blue",
    color: "red"
}

const clStyles = {
    border: "1px solid red",
    color: "blue"
}
const HeaderFn = () => (
    <h2
        style={fnStyles}
    >
        Moja pierwsza strona w React Fn.
    </h2>
);

class HeaderCl extends React.Component {
    render() {
        return (
            <h2
                style={clStyles}
            >Moja pierwsza strona w React Cl.
            </h2>)
    }
}

const Header = () => (
    <>
        <HeaderFn />
        <HeaderCl />
    </>
)

ReactDOM.render(
    <Header />,
    document.querySelector("#root")
)
