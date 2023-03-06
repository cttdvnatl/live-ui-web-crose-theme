import React from 'react';
import styled from 'styled-components';

const loader = styled.div`
    background-color: #f3f3f3;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 50%;
    overflow: hidden;
    width: 0;
    height: 6px;
    z-index: 10;
    border-radius: 0;
    background-color: #c92f2f;
    margin-top: -3px;
    -webkit-animation: line 10000ms linear 0s;
    animation: line 10000ms linear 0s; 
`

const line = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    overflow: hidden;
    width: 0;
    height: 6px;
    z-index: 10;
    border-radius: 0;
    background-color: #c92f2f;
    margin-top: -3px;
    -webkit-animation: line 10000ms linear 0s;
    animation: line 10000ms linear 0s;

    @-webkit-keyframes line {
        0% {
          width: 0; }
        100% {
          width: 100%; } }
    @keyframes line {
    0% {
        width: 0; }
    100% {
        width: 100%; } }
`

const Preloader = (prop) => {
    return (
        <div className="preloader d-flex align-items-center justify-content-center">
            {/*<!-- ##### Preloader ##### -->*/}
            <div >
                {/*<!-- Line -->*/}
                <div className="line-preloader"/>
            </div>
            {/*<!-- ##### Header Area Start ##### -->*/}
        </div>
    )
};
export default Preloader;