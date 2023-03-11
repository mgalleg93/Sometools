import { Outlet, Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
// import "../data/tools.svg";

const Layout = () => {
    return (
        <>
        <Navbar
            className="my-2"
            color="dark"
            dark
        >
            <NavbarBrand href="/">
            <img
                alt="logo"
                src={require("../data/lord-of-the-rings-gandalf.gif")}
                style={{
                    height: 40,
                    width: 40
                }}
            />
            </NavbarBrand>
        </Navbar>
        <Outlet />
        </>
    );
}

export default Layout;