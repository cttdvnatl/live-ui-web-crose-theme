import React, {Suspense, useEffect} from 'react';
import {authenticate, restoreToken} from './store/dispatch/dispatch';
import {connect, useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import ReactGA from 'react-ga';
import {setLanguage, getLanguage, setTranslations, setDefaultLanguage} from 'react-multi-lang';
import en from './database/hvmatlDataEN.json';
import vn from './database/hvmatlDataVN.json';

//routes
import routes from './routes.js';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';

//Google Analytics
ReactGA.initialize('UA-168016188-1', {
    debug: true,
    titleCase: false,
    gaOptions: {}
});
ReactGA.pageview(window.location.pathname + window.location.search);

//Website Cookie for Language
setTranslations({vn, en})
setDefaultLanguage('vn')

function checkLangCookie() {
    const language = getCookie("language");
    if (language === 'en') {
        setLanguage('en');
    } else if (language === 'vn') {
        setLanguage('vn');
    } else {
        setLangCookie();
    }
}

function setLangCookie() {
    document.cookie = "language = " + getLanguage();
}
function getCookie(cookieParam) {
    const cookieName = cookieParam + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
}

checkLangCookie()

const App = (props) => {

    const token = useSelector(state => state.token)

    useEffect(() => {
        if(!props.token && !sessionStorage.getItem('token')) {
            (async () => {
                const auth = await props.auth({
                    username: 'anonymous',
                    password: 'anonymous'});
                sessionStorage.setItem('token', auth.token);
            })();
        } else if(sessionStorage.getItem('token')){
            props.restoreToken(sessionStorage.getItem('token'));
        } else {
            sessionStorage.setItem('token', props.token);
        }
    }, [props]);

    const getSubRoutes = (route) => {
        return route.subroutes.map(sub => 
            <Route key={route.path + ' ' + sub.path} path={sub.path} element={sub.component}></Route> 
        )
    }

    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {routes.map(route => 
                    route.subroutes 
                    ? <Route key={route.path} path={route.path} element={route.component}>{getSubRoutes(route)}</Route>
                    : <Route index={route.index} key={route.path} path={route.path} element={route.component}></Route>
                )}
            </Routes>
        </Router>
    )
};

const mapStateToProps = (state) => ({
    token: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
    auth: (credentials) => authenticate(dispatch, credentials),
    restoreToken: (token) => restoreToken(dispatch, token)
})
export default connect(mapStateToProps, mapDispatchToProps)(App);