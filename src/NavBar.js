import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand  href="/"><b className="nav-brand">SYPGengs</b></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                     <Nav className="side-links">
                        <Link to="/">Home</Link>
                        <Link to="/blogs">Blog</Link>
                        <Link to="/todo">Todo</Link>
                        <Link to="/market">Market</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default NavBar;