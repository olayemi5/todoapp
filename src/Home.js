import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('response not ignored!');
   };

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
                        <form onSubmit={handleSubmit}>
                           <h3>Enter your details</h3>
                           <div className="form-group">
                              <label className="titleLabels">Username:</label>
                              <input style={{border:0}}
                                     required
                                     className="fcnt"
                                     type="text"/>
                           </div>
                           <div className="form-group">
                              <label className="titleLabels">Password:</label>
                              <input style={{border:0}}
                                     required 
                                     className="fcnt" 
                                     type="password"/>
                           </div>
                           <div className="form-group">
                              <button type="submit" className="bltn"><FontAwesomeIcon icon={faCheckCircle}/> Check In</button>
                           </div>
                        </form>
                     </Col>
                  </Row>
               </Container>
           </div>
           <div className="home-content3">
               <Container>
                  <Row className="justify-content-center ">
                     <Col md={5}>
                       
                     </Col>
                  </Row>
               </Container>
           </div>
        </div>
     );
}
 
export default Home;