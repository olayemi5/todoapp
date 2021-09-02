import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const DetailsForm = () => {

   const history = useHistory();

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('response not ignored!');
   };

    return ( 
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
                           <button type="submit" className="bltn"><FontAwesomeIcon icon={ faCheckCircle }/> Check In</button>
                           <button onClick={() => {history.push('/signup')}} type="button" style={{ float:'right' }} className="bltn-s"><FontAwesomeIcon icon={ faUserPlus }/> Sign Up</button>
                        </div>
                     </form>
                  </Col>
               </Row>
            </Container>
         </div>
     );
}
 
export default DetailsForm;