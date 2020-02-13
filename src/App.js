import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ClergyListPage from './pages/ClergyListPage';
import Index from './pages/Index';
import Directors from './pages/Directors';
import DeptInfo from './pages/DeptOwnerPage';
function App() {
  return (
    <Router>
    	<div className="App">
          <Route path="/clergy-list" component={ClergyListPage} exact />
          <Route path="/departments/:id" component={DeptInfo} exact />
          <Route path="/directors" component={Directors} exact/>
          <Route path="/" component={Index} exact/>
      	</div>
    </Router>
  ) 
}

export default App;
