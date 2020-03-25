import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './css/style.css';
import ClergyListPage from './pages/ClergyListPage';
import Index from './pages/Index';
import Directors from './pages/Directors';
import DeptInfo from './pages/DeptOwnerPage';
import About from './pages/About';
import Activities from './pages/Activities';

const App = () => {
  return (
    <Router>
          <Route path="/clergy-list" component={ClergyListPage} exact />
          <Route path="/departments/:id" component={DeptInfo} exact />
          <Route path="/directors" component={Directors} exact/>
          <Route path="/" component={Index} exact/>
          <Route path="/about" component={About}/>
          <Route path="/activities" component={Activities}/>
    </Router>
  ) 
};
export default App;
