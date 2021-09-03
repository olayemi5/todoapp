import Home from "./Home";
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Blog from "./Blog";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
        <div className="App">
          <NavBar />
            <div className="content">
                  <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/blogs'>
                        <Blog />
                    </Route>
                    <Route path='/todo'>
                        
                    </Route>
                    <Route path='/market'>
                        
                    </Route>
                    <Route path='/signup'>
                        <SignUp />
                    </Route>
                    <Route path='/createblog'>
                        <CreateBlog />
                    </Route>
                    <Route path='/blogs/:id'>
                        <BlogDetails />
                    </Route>
                    <Route path='*'>
                        
                    </Route>
                  </Switch>
            </div>
        </div>
    </Router>
  );
}

export default App;
