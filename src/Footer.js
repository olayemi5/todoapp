import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <div className="home-content3">
               <Container>
                  <Row className="justify-content-center">
                     <Col md={5}>
                        <p>&copy; Stephen Olayemi | 2021 | Homepage | SocioMini Web Union</p>
                        <Row className="justify-content-center">
                           <Col xs={3} md={3}>
                              <a className="anchor" href="https://www.linkedin.com/in/stephen-nixon-8b1a80198/"><FontAwesomeIcon size="2x" icon={faLinkedin}/> </a>
                           </Col>
                           <Col xs={3} md={3}>
                              <a className="anchor" href="https://github.com/Olayemi5"><FontAwesomeIcon size="2x" icon={faGithub}/> </a>
                           </Col>
                           <Col xs={3} md={3}>
                              <a className="anchor" href="https://medium.com/@olayemisn013"><FontAwesomeIcon size="2x" icon={faMedium}/> </a>
                           </Col>
                        </Row>
                     </Col>
                </Row>
            </Container>
        </div>
     );
}
 
export default Footer;