import { Col, Container, Row } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import Footer from './Footer';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const {data, Ispending, errorMsg} = useFetch(`http://localhost:8003/blogs/${id}`);
    const {deleteError, setErrorMsg} = useState();

    const handleDelete = (e) => {
        e.preventDefault();
        setTimeout(() => {
            fetch(`http://localhost:8003/blogs/${id}`, {
            method:'DELETE',
            }).then(() => { 
                history.push(`/blogs`);
            }).catch(error => 
                {
                 setErrorMsg(error.message);
                })
        },200)
    }
    

    return ( 
        <div className="blog-details">
            <div className="home-content7">
               <Container>
                   <Row className="justify-content-center">
                       <Col>
                            <button onClick={ () => history.goBack() } className="bltn-inherit mb-3"><FontAwesomeIcon icon={ faArrowLeft }/> All Blogs</button>
                            { deleteError && <p className="text-danger"> { deleteError } </p>}
                            { errorMsg && <p className="text-danger"> { errorMsg } </p>}
                            { Ispending && <p>Loading blog details...</p>}
                            { data && 
                                <article>
                                    <h1>{ data.title }</h1>
                                    <p className="default-gray">Written by <b className="text-danger">{ data.author }</b> </p>
                                    <div className="default-gray">{ data.body }</div>
                                    <button onClick={ handleDelete } class="bltn-p mt-5">Delete</button>
                                </article> }
                       </Col>
                   </Row>
               </Container>
            </div>
            <Footer />
        </div>
     );
}
 
export default BlogDetails;