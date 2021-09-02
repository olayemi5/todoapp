import Home from "./Home";
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar";



function App() {
  return (
    <Router>
        <div className="App">
          <NavBar />
            <div className="content">
                  <Switch>
                    <Route path='/'>
                        <Home />
                    </Route>
                    <Route path='/blogs'>
                        
                    </Route>
                    <Route path='/todo'>
                        
                    </Route>
                    <Route path='/market'>
                        
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
