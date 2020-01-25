import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogListPage from './pages/BlogListPage';
import ClergyListPage from './pages/ClergyListPage';
import Index from './pages/Index';
import Directors from './pages/Directors';
import DeptInfo from './pages/DeptOwnerPage';
function App() {
  return (
    <Router>
    	<div className="App">
			    <Route path="/blog-list/:id" component={BlogPage} exact />
        	<Route path="/blog-list" component={BlogListPage} exact />
          <Route path="/clergy-list" component={ClergyListPage} exact />
          <Route path="/departments/:id" component={DeptInfo} exact />
          <Route path="/directors" component={Directors} exact/>
          <Route path="/" component={Index} exact/>
          
      	</div>
    </Router>
  ) 
}

export default App;
