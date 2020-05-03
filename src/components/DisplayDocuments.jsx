import React from 'react';

const DisplayDocuments = ({list}) => (
    <>
    {list.map((Documents) => (
        <div class="col-10 col-md-6 col-lg-3">
        <div class="about-us-content mb-100">
            <a href={Documents.downloadLink} download><img height="auto" src={Documents.image} alt=""></img></a>
            <h4>{Documents.description}</h4>
        </div>
        </div>
    ))}
    </>
);

export default DisplayDocuments;