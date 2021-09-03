import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blogg-list">
            <h3 style={{color:'#5c0018'}}><b>{ title }</b></h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <Link to={`/blogs/${ blog.id }`}>
                        <h4>{ blog.title }</h4>
                        <p>written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;