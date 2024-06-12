import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 520 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link
        to="hero"
        smooth={true}
        offset={0}
        duration={500}>
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
      </Link>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="programs"
            smooth={true}
            offset={-240}
            duration={500}>
            Programs
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-170}
            duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            smooth={true}
            offset={-260}
            duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            offset={-290}
            duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-238}
            duration={500}
            className="btn">
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        src={menuIcon}
        alt="menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
