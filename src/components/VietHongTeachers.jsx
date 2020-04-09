import React from 'react';

//Work in Progress

const VietHongTeachers = ({list}) => (
    <>
    <div class="container">
    <div class="row about-content justify-content-center">
    {list.map((VietHongTeachers) => (
        <div class="col-10 col-md-6 col-lg-3">
            <div class="about-us-content mb-100">
                <img height="auto" src={VietHongTeachers.image} alt=""/>
                <div class="about-text">
                    <h4>{VietHongTeachers.name}</h4>
                    <h4><a style={{fontSize : '16px'}}>{VietHongTeachers.email}</a></h4>
                </div>
            </div>
        </div>
    ))}
    </div>
    </div>
    </>
);

export default VietHongTeachers;