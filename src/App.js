import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ClergyListPage from './pages/ClergyListPage';
import Index from './pages/Index';
import Directors from './pages/Directors';
import DeptInfo from './pages/DeptOwnerPage';
import About from './pages/About';
import Acitivities from './pages/Activities';
import './css/style.css';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

const App = () => {
  return (
    <Router>
          <Route path="/clergy-list" component={ClergyListPage} exact />
          <Route path="/departments/:id" render={(prop) => <DeptInfo {...prop}/>} exact />
          <Route path="/directors" render={() => <Directors/>} exact/>
          <Route path="/" render={(prop) => <Index {...prop}/>} exact/>   
          <Route path="/about" render={() => <About/>}/>
          <Route path="/activities" render={() => <Acitivities/>}/>
          <Route path="/articles" component={Articles}/>   
          <Route path="/detail/:date" component={ArticleDetail}/>
    </Router>
  ) 
}


export default App;
