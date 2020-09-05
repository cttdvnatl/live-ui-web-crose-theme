import React from 'react';

const DisplayDocuments = ({list}) => (
    <>  
    {list.map((Documents) => (
        <>
            <h5>{Documents.description} <a style={{color: '#e60000'}} href={Documents.downloadFile} download>{Documents.fileName}</a></h5>
        </>
    ))}
    </>
);

export default DisplayDocuments;