import axios from 'axios';
import * as actionType from '../actionType';

//Auth dispatch
export const authenticate = (dispatch, credentials) => axios.post('https://hvmatl-backend.herokuapp.com/authentication', credentials)
    .then(res => dispatch({type: actionType.AUTH, token: res.data.token}));

export const restoreToken = (dispatch, token) => dispatch({type: actionType.AUTH, token: token})
//Get WeeklyNews
export const getWeeklyNews = (dispatch, from, to, token) => axios.get('https://hvmatl-backend.herokuapp.com/weeklyNews', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params:{
            from: from,
            to: to
        }
    }).then(res => dispatch({type: actionType.GET_WEEKLY_NEWS, data: res.data}));

//Get Carousel Slides
export const getSlides = (dispatch, date, token) => axios.get('https://hvmatl-backend.herokuapp.com/carousel', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params:{
            date: date
        }
    }).then(res => dispatch({type:actionType.GET_SLIDES, data: res.data}));