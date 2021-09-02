import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const WelcomeLabel = () => {
    return ( 
        <div className="home-content1">
            <Container>
               <Row className="justify-content-center ">
                  <Col md={5}>
                        <p className="contenty"><FontAwesomeIcon size="3x" className='home-icon' style={{fontize:'30px'}} icon={faBookOpen} /> <span className='content-bold'>Welcome! </span> TO STEVE MINI SOCIETY BLOG</p>
                  </Col>
               </Row>
            </Container>
        </div>
     );
}
 
export default WelcomeLabel;