import React from 'react';
const ClergyList = (prop) => {
    return (
        <section className="about-area section-padding-100-0">
            {prop.data.map((section, index) => {
                return (
                    <div className="container" key={index}>
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h2><b>{section.title}</b></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row about-content justify-content-center">
                            {section.content.map((clergy,idx) => {
                                return(
                                    <div className="col-12 col-md-6 col-lg-4" key={idx}>
                                        <div className="about-us-content mb-100">
                                            <center><img src={clergy.image} alt=""/></center>
                                            <div className="about-text text-center">
                                                <h4>{clergy.name}</h4>
                                                {clergy.date ? <h4>{clergy.date}</h4> : null}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>    
                    </div>
                );
            })}
        </section>
    );
};
export default ClergyList;
