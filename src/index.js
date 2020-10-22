import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import carouselReducer from './store/reducer/carouselReducer';
import weeklyNewsReducer from './store/reducer/weeklyNewsReducer';
import authReducer from './store/reducer/authReducer';
import formReducer from "./store/reducer/formReducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    auth: authReducer,
    carousel: carouselReducer,
    weeklyNews: weeklyNewsReducer,
    form: formReducer
})
//Redux store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
