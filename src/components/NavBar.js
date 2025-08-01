import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { X, List } from "react-bootstrap-icons";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false); // for toggling X and hamburger

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        setExpanded(false); // auto-close on link click
    }

    return (
        <Navbar expand="lg" expanded={expanded} className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(prev => !prev)}
                >
                    {expanded ? <X size={28} color="white" /> : <List size={28} color="white" />}
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/sanish-maharjan-9b663a294/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon1} alt="" />
                            </a>
                            <a href="https://www.facebook.com/sanishmhzrn958" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon2} alt="" />
                            </a>
                            <a href="https://www.instagram.com/theuserispotato_0.o/" target="_blank" rel="noopener noreferrer">
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>let's connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
