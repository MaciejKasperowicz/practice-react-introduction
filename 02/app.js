import React from 'react';
import ReactDOM from 'react-dom';

const fnStyles = {
    width: "50%",
    padding: "20px",
    border: "1px solid blue",
    color: "red",
    margin: "20px auto"
}

const clStyles = {
    width: "50%",
    padding: "20px",
    border: "1px solid red",
    color: "blue",
    margin: "20px auto"
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
