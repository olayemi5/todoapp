import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
    return ( 
        <div className="blog-header">
            <Container>
                <Row>
                    <Col md={4}>
                         <h2>Stephen's Blog</h2>
                         <p><b>Welcome to stephen's blog where you will know more about my coding behaviors, favorite novel, books, movie, songs , langiage and design architectures as well gaining the oppurtunity to learning together with me</b></p>
                         <p>You can also always checkout for new blog post on interesting/mind blowng coding/tech related article.</p>
                         <p>We Learn... We Build...</p>
                    </Col>
                </Row>
            </Container>
           
        </div>
     );
}
 
export default Blog;