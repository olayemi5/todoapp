import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const SignUpDetailsForm = () => {
   
   const history = useHistory();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');
   const [referral, setReferral] = useState('');
   const [error, setErrorMsg]  = useState(null);
   const [IsPending, setPending] = useState();

   const handleSubmit = (e) => {
      e.preventDefault();
      const user = {username,password,email,referral};
      setTimeout(() => {
         setPending(true);

         fetch('http://localhost:8003/users', {
         method:'POST',
         headers: { "Content-Type": "application/json" },
         body:JSON.stringify(user)
         }).then(() => { 
               setPending(false);
               history.push(`/blogs`);
         }).catch(error => 
               {
                  setPending(false);
                  setErrorMsg(error.message);
               })
      },200)
   };

    return ( 
        <div className="home-content4">
            <Container>
               <Row className="justify-content-center ">
                  <Col md={5}>
                     <form onSubmit={handleSubmit}>
                        { error && <div style={{color:'red', marginBottom:'15px'}}>{ error }</div> }
                        <h3>Enter your details</h3>
                        <div className="form-group">
                           <label className="titleLabels">Username:</label>
                           <input style={{border:0}}
                                    value={ username }
                                    onChange= { (e) => { setUsername(e.target.value) }}
                                    required
                                    className="fcnt"
                                    type="text"/>
                        </div>
                        <div className="form-group">
                           <label className="titleLabels">Password:</label>
                           <input style={{border:0}}
                                    value={ password }
                                    onChange= { (e) => { setPassword(e.target.value) }}
                                    required 
                                    className="fcnt" 
                                    type="password"/>
                        </div>
                        <div className="form-group">
                           <label className="titleLabels">Email:</label>
                           <input style={{border:0}}
                                    value={ email }
                                    onChange= { (e) => { setEmail(e.target.value) }}
                                    required 
                                    className="fcnt" 
                                    type="email"/>
                        </div>
                        <div className="form-group">
                           <label className="titleLabels">Referral Id:</label>
                           <input style={{border:0}}
                                    value={ referral }
                                    onChange= { (e) => { setReferral(e.target.value) }}
                                    className="fcnt" 
                                    type="text"/>
                        </div>
                        <div className="form-group">
                           { IsPending && <button type="submit" className="bltn"> Signing up...</button> }
                           { !IsPending && <button type="submit" className="bltn"><FontAwesomeIcon icon={ faUserPlus }/> Sign Up</button>}
                           <button onClick={() => {history.push('/')}} type="button" style={{ float:'right' }} className="bltn-s"><FontAwesomeIcon icon={ faArrowRight }/> Already have an account?</button>
                        </div>
                     </form>
                  </Col>
               </Row>
            </Container>
         </div>
     );
}
 
export default SignUpDetailsForm;