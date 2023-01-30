import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <h1>Kelsey A</h1>
                <h2>Moussa</h2>
            </NavbarBrand>
        </Navbar>
    );
}

export default Header;