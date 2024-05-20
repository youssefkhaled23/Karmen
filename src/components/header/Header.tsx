import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import cart from "../../assets/svg/cart.svg";
import whishlist from "../../assets/svg/whishlist.svg";
import user from "../../assets/svg/login.svg";
import searchicon from "../../assets/svg/search.svg";
import style from "./Header.module.css";

const { nav, search, input, dropdown, form } = style;
const Header = () => {
  return (
    <>
      <Container className="pt-4">
        <div className="d-flex align-align-items-center justify-content-between flex-column flex-lg-row gap-4">
          <div className="d-flex justify-content-between gap-5">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="search ms-0 ms-lg-5 ps-lg-5">
              <form
                className={`${search} ${form} align-items-center justify-content-between d-flex`}
              >
                <input
                  type="text"
                  placeholder="Search for everything"
                  className={input}
                />
                <img src={searchicon} alt="" />
              </form>
            </div>
          </div>
          <div className="d-flex justify-content-between gap-5 align-items-center">
            <div className="lang">
              <span>En / </span>
              <span>العربيه</span>
            </div>
            <div className="icons d-flex gap-3">
              <Link to="/cart">
                <img src={cart} alt="cart" />
              </Link>
              <Link to="/WishList">
                <img src={whishlist} alt="whishlist" />
              </Link>
              <Link to="/login">
                <img src={user} alt="user" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className={`${nav} mt-4 py-1`}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <NavDropdown
                title="All Categories"
                className={`${dropdown} fw-lighter`}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to="/">
                    Trending
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to="/Rings">
                    Rings
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="text-decoration-none text-black"
                    to="/Necklaces"
                  >
                    Necklaces
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="text-decoration-none text-black"
                    to="/Watches"
                  >
                    Watches
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="text-decoration-none text-black"
                    to="/Earrings"
                  >
                    Earrings
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to="/">
                    Braceletes
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to="/">
                    Anklet
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none text-black" to="/">
                    nose raings
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav className="gap-4">
                <Nav.Link>
                  <Link
                    className="text-decoration-none text-black fw-semibold"
                    to="/"
                  >
                    Trending
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-decoration-none text-black fw-semibold"
                    to="/Rings"
                  >
                    Rings
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-decoration-none text-black fw-semibold"
                    to="/Necklaces"
                  >
                    Necklaces
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-decoration-none text-black fw-semibold"
                    to="/Watches"
                  >
                    Watches
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-decoration-none text-black fw-semibold"
                    to="/Earrings"
                  >
                    Earrings
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-decoration-none text-black fw-semibold"
                    to="/"
                  >
                    Braceletes
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-decoration-none text-black fw-semibold"
                    to="/"
                  >
                    Anklet
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    className="text-decoration-none text-black fw-semibold"
                    to="/"
                  >
                    nose raings
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
