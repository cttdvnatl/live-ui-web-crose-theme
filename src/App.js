import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogListPage from './pages/BlogListPage';
import Index from './pages/Index';
import Directors from './pages/Directors';
function App() {
  return (
    <Router>
    	<div className="App">
			    <Route path="/blog-list/:id" component={BlogPage} exact />
        	<Route path="/blog-list" component={BlogListPage} exact />
          <Route path="/directors" component={Directors} exact/>
          <Route path="/" component={Index} exact/>
          
      	</div>
    </Router>
  ) 
}

export default App;
