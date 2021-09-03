import { Col, Container, Row } from "react-bootstrap"
import { useState } from "react";
import Footer from "./Footer";

const CreateBlog = () => {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState();

    return ( 
        <div className="create-blog">
            <div className="home-content5">
                <h1><b style={{color:'#b50036'}}>Create</b> a new blog</h1>
                <p>Do you have any exciting content full of both techniical adn social experience. In fact it might just be an article on
                    real life issues that sounds and prove really educative and practical, go on and share it with people using the input feilds down below</p>
                <p><b>NOTE: </b> It always good to prove read a content before publishing it as to double check and trim off content that are nessccery or repititive even at most time grammertical errors</p>
            </div>
            <div className="home-content6">
                <Container>
                    <Row>
                        <Col md={6} >
                            <form>
                                <h2>Put Blog Details Below</h2>
                                <div className="form-group">
                                    <label className="titleLabels default">Title</label>
                                    <input  className="fcnt" 
                                            required
                                            type="text" 
                                            value={ title }
                                            onChange={ (e)=> setTitle(e.target.value) }/>
                                </div>
                                <div className="form-group">
                                    <label className="titleLabels default">Body</label>
                                    <textarea rows={10} 
                                              required
                                              className="fcnt"
                                              value= { body }
                                              onChange= { (e) => setBody(e.target.value) }></textarea>
                                </div>
                                <div className="form-group">
                                    <label className="titleLabels default">Author</label>
                                    <input type="text" 
                                           required
                                           className="fcnt"
                                           value={ author }
                                           onChange={ (e) => setAuthor(e.target.value) }></input>
                                </div>
                                <div className="form-group mb-5">
                                    <button style={{float:'right'}} className="bltn-p">Publish</button>
                                </div>
                            </form>
                        </Col>
                        <Col md={1} >
                            <div className="p-5"></div>
                        </Col>
                        <Col md={5} >
                            <h2 className="text-center">Blog Preview</h2>
                            <article>
                                { title && <h4 className="mt-4 default">{ title }</h4> }
                                { !title && <h4 className="mt-4 default">Content title will appear here</h4> }

                                { author && <p style={{color:'gray'}}>Written by <span style={{color:'#4f494a'}}><b>{ author }</b></span></p> }
                                { !author && <p style={{color:'#4f494a'}}>Author name will appear here</p> }

                                { body && <div>{ body }</div>}
                                { !body && <div style={{color:'#4f494a'}}><span><b>Body preview</b></span> <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div> }
                            </article>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
        
     );
}
 
export default CreateBlog;