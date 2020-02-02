import React from 'react';

const ClergyList = (prop) => {
    console.log(prop);
    return (
        <section className="about-area section-padding-100-0">
            {prop.data.map(section => {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h2><b>{section.title}</b></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row about-content justify-content-center">
                            {section.content.map(clergy => {
                                return(
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="about-us-content mb-100">
                                            <img src={clergy.image} alt=""/>
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
