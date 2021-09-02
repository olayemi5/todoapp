import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
    return ( 
        <div className="home-page ">
           <div className="home-content1">
               <Container>
                  <Row className="justify-content-center ">
                     <Col md={5}>
                           <p className="content"><FontAwesomeIcon size="3x" className='home-icon' style={{fontize:'30px'}} icon={faBookOpen} /> <span className='content-bold'>Welcome! </span> TO STEVE MINI SOCIETY BLOG</p>
                     </Col>
                  </Row>
               </Container>
           </div>
           <div className="home-content2">
               <Container>
                  <Row className="justify-content-center ">
                     <Col md={5}>
                        <h3>Enter your details</h3>
                        <div className="form-group">
                           <label className="titleLabels">Username:</label>
                           <input className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                           <label className="titleLabels">Password:</label>
                           <input className="form-control" type="password"/>
                        </div>
                     </Col>
                  </Row>
               </Container>
           </div>
           
        </div>
     );
}
 
export default Home;