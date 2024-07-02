import React from 'react';

const Volunteers = (prop) => {
    return (
        <section className="about-area section-padding-100-0">
            {prop.data.map((section, index) => {
                return (
                    <div className="container" key={index}>
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h2><b>{section.title}</b></h2>
                                    <center><h2><b>{section.year}</b></h2></center>
                                </div>
                            </div>
                        </div>
                        <div className="row about-content justify-content-center">
                            {section.content.map((staff, idx) => {
                                return (
                                    <div className="col-10 col-md-6 col-lg-2" key={idx}>
                                        <div className="about-us-content mb-50">
                                            <center><img src={staff.image} alt="" /></center>
                                            <div className="about-text">
                                                <h7><b>{staff.name}</b></h7>
                                                <h6>{staff.title}{staff.deptName}</h6>
                                                <h4 style={{ fontSize: '11px' }}>{staff.email}</h4>
                                                <h4 style={{ fontSize: '12px' }}>{staff.phone}</h4>
                                                <h4 style={{ fontSize: '11px' }}>{staff.date ? <h4>{staff.date}</h4> : null}</h4>
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
/*
const Volunteers = ({ list }) => (
    <>
    <div class="container">
    <div class="row about-content justify-content-center">
    {list.map((Volunteers) => (
        <div class="col-10 col-md-6 col-lg-2">
            <div class="about-us-content mb-50">
                <img height="auto" src={Volunteers.image} alt=""/>
                <div class="about-text">
                    <h7><b>{Volunteers.name}</b></h7>
                    <h4>{Volunteers.title}{Volunteers.deptName}</h4>
                    <h4 style={{fontSize: '11px'}}>{Volunteers.email}</h4>
                    <h4 style={{fontSize: '12px'}}>{Volunteers.phone}</h4>
                </div>
            </div>
        </div>
    ))}
    </div>
    </div>
    </>
);
*/
export default Volunteers;