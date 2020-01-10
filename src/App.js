import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogListPage from './pages/BlogListPage';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  //return '';
  return (
    <Router>
    	<div className="App">
			    <Route path="/blog-list/:id" component={BlogPage} exact />
        	<Route path="/blog-list" component={BlogListPage} exact />
      	</div>
    </Router>
  ) 
}

export default App;
