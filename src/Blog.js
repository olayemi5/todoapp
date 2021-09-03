import { faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import personlaImage  from './Assets/self.jpeg';
import BlogList from './BlogList';
import useFetch from './useFetch';
import Footer, {  } from "./Footer"
import CarouselDisplay from "./Carousel";

const Blog = () => {

     const {data, IsPending, erroMsg} = useFetch('http://localhost:8003/blogs');

    return ( 
        <div className="blog-page">
            <div className="blog-header">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h2 style={{color:'#f56490'}}>Stephen's Blog</h2>
                            <p><b>Welcome to stephen's blog where you will know more about my coding behaviors, favorite novel, books, movie, songs , language and design architectures as well gaining the oppurtunity to learning together.</b></p>
                            <p>You can also always checkout for new blog post on interesting/mind blowng coding/tech related article.</p>
                            <p style={{color:'#8a0725'}}><i>We Learn... We Build...</i></p>
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={3}>
                            <img style={{borderRadius:'5002px'}} width="220" height="350" alt="Stephen's pic" src={personlaImage} />
                        </Col>
                        <Col md={4}>
                            <h2 className="text-center" style={{color:'#f56490'}}>About Stephen</h2>
                            <p>
                                I am a team-oriented software engineer with 4+ years of experience. Seeking to use proven development skills to provide optimal code solutions for the moving of arising technologies. At Innotelligent Inc., led a team that received a DeveloperWeek award for best workflow ever. Conducted software supervision at production level. Implemented automated testing program that perform error checks better than human. Built high scalable micro services application using Identity server for managing user and client identity with over 20,000 thousand users constantly increasing, Am also vast in micro services architecture design as well as integrating it with Identity Server for authentication management. 
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="blog-starter">
                <Container>
                    <Row>
                        <Col md={5}>
                            {IsPending && <p>Loading blogs please wait a while...</p>}
                            { data && <BlogList blogs={ data } title= "All blogs" />} 
                            { erroMsg && <p style={{ 
                                color:'red'
                                }}> { erroMsg }</p>}
                        </Col>
                        <Col md={1}>
                        </Col>
                        <Col md={5}>
                            <Row>
                                <Col md={1}>
                                    <p style={{marginTop:'12px'}}><FontAwesomeIcon icon={faSearch}/></p>
                                </Col>
                                <Col md={11}>
                                    <input placeholder="Search Blog" type="search" style={{border:'0'}} className="fcnt"/>
                                </Col>
                            </Row>
                            <div className="text-center ">
                                <p className="mt-3">Do you also want to create a blog, or you want to share some experience fact with others? click the plus sign below</p>
                                <Link to="/createblog"><FontAwesomeIcon className="create-blog" size="3x" icon={faPlusCircle}/></Link>
                            </div>
                            <div className="mt-3">
                                <CarouselDisplay />
                            </div>
                        </Col>
                    </Row>
                </Container>
             </div> 
            <Footer /> 
         </div>
     );
}
 
export default Blog;