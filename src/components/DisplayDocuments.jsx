import React from 'react';

const DisplayDocuments = ({list}) => (
    <>  
    {list.map((Documents) => (
        <>
            <h3>{Documents.description} <a href={Documents.downloadFile} download>{Documents.fileName}</a></h3>
            <br/>
        </>
    ))}
    </>
);

export default DisplayDocuments;