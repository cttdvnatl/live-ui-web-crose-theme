import React from 'react';

const Classes = ({list}) => (
    <>
    <div class="container">
    <div class="row about-content justify-content-center">
    {list.map((Classes) => (
        <div class="col-10 col-md-6 col-lg-2">
            <div style={{width: "250px"}} class="about-us-content mb-50">
                <h3 style={{fontSize: "19px"}}>{Classes}Lớp </h3>
                <h3 style={{fontSize: "19px"}}></h3>
            </div>
        </div>
    ))}
    </div>
    </div>
    </>
);

export default Classes;