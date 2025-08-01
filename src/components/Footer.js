import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg'; // LinkedIn icon
import navIcon2 from '../assets/img/nav-icon2.svg'; // Facebook icon
import navIcon3 from '../assets/img/nav-icon3.svg'; // Instagram icon

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/sanish-maharjan-9b663a294/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/sanishmhzrn958"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/theuserispotato_0.o/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>© {new Date().getFullYear()} Sanish Maharjan. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
