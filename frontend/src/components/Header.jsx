import { Navbar, Nav, Container, NavbarToggle } from "react-bootstrap"
import { FaShoppingCart, FaUser } from "react-icons/fa"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="proshop" />
            ProShop
          </Navbar.Brand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header
