import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();

    const {data, Ispending, errorMsg} = useFetch(`http://localhost:8003/blogs/${id}`);
    console.log(data);

    return ( 
        <div className="blog-details">
            <div className="home-content7">
               <Container>
                   <Row className="justify-content-center">
                       <Col>
                            { errorMsg && <p className="text-danger"> { errorMsg } </p>}
                            { Ispending && <p>Loading blog details...</p>}
                            { data && <article>
                                <h1>{ data }</h1>
                            </article> }
                       </Col>
                   </Row>
               </Container>
            </div>
        </div>
     );
}
 
export default BlogDetails;