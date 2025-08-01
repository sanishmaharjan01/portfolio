import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
                <Container>
                    <Row className="text-start">
                    <Col size={12} sm={12}>
            <div className="footer-content">
                <div className="footer-social">
                <a href="https://www.linkedin.com/in/sanish-maharjan-9b663a294/" target="_blank" rel="noopener noreferrer">
                    <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://www.facebook.com/sanishmhzrn958" target="_blank" rel="noopener noreferrer">
                    <img src={navIcon2} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/theuserispotato_0.o/" target="_blank" rel="noopener noreferrer">
                    <img src={navIcon3} alt="Instagram" />
                </a>
                </div>
                <p>© {new Date().getFullYear()} Sanish Maharjan. All Rights Reserved.</p>
            </div>
            </Col>
        </Row>
      </Container>
    </footer>
  );
};
