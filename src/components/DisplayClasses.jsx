import React from 'react';

const Classes = ({list}) => (
    <>
    <div class="container">
    <div class="row about-content justify-content-center">
    {list.map((Classes) => (
        <div class="school-classes col-10 col-md-6 col-lg-2">
            <div style={{width: "250px"}} class="about-us-content mb-50">
                <a id="classwork" href={"/viet-hong-classwork/" + Classes.name} style={{fontSize: "25px", fontWeight: "700"}}>Lớp {Classes.class}</a>
                <h6>{Classes.teachers}
                    <p class="vh-hover-text">{Classes.emails}</p>                
                </h6>
            </div>
        </div>
    ))}
    </div>
    </div>
    </>
);

export default Classes;