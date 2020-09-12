import React from 'react';

const Classes = ({list}) => {
    var url = window.location.href;
    var lastURLSegment = url.substr(url.lastIndexOf('/') + 1);
    let schoolurl = "";

    if (lastURLSegment === "viet-hong-classes") {
        schoolurl += "/viet-hong-classwork/";
    }
    else {
        schoolurl += "/st-joseph-classwork/"
    }

    return (
        <>
        <div class="container">
        <div class="row about-content justify-content-center">
        {list.map((Classes) => (
            <div class="school-classes col-10 col-md-6 col-lg-4">
                <div style={{width: "350px"}} class="about-us-content mb-50">
                    <a id="classwork" href={schoolurl + Classes.name} style={{fontSize: "25px", fontWeight: "700"}}>Lớp {Classes.class}</a>
                    <h6>{Classes.teachers}
                        <a href = {"mailto: " + Classes.emails} class="classes-hover-text">{Classes.emails}</a>                
                    </h6>
                </div>
            </div>
        ))}
        </div>
        </div>
        </>
    )
};

export default Classes;