import React from 'react';


const ClergyList = ({list}) => (

    <>   
    <section class="about-area section-padding-25">
    <div class="container">
    <div class="row about-content justify-content-center">
    {list.map((article, endDate='TBD') => (         
        <div class="col-10 col-md-6 col-lg-3">
            <div class="about-us-content mb-100">
                <img src={article.image} alt=""/>
                <div class="about-text">
                    <h4>{article.name}</h4>
                    <h4>{article.title}</h4>
                </div>
            </div>
        </div>
    ))}
    </div>
    </div>
    </section>
    </>   

);

export default ClergyList;
