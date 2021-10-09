import React from 'react';

/*
const History = (prop) => {
    return (
        <article>
            {prop.data.map((section, index) => {
                return (
                    <div className={section.significance}>
                        <span className={section.significance}>
                            <span className={section.significance}>{section.year}</span>
                        </span>
                        <h2>{section.title}</h2>
                        <p><img alt="section" className="section-image" src={section.imgsrc} height={section.imgheight} width={section.imgwidth}></img>{section.description}</p>
                    </div>
                );
            })
         }
        </article>
    );
};

*/



const History = ({ list }) => (
    <>
    {list.map((history) => (

    <article>
        <div class={history.significance}>
            <span class={history.significance}>
                <span class={history.significance}>{history.year}</span>
            </span>
            <h2>{history.title}</h2>
            <p><img alt="history" className="history-image" src={history.imgsrc} height={history.imgheight} width={history.imgwidth}></img>{history.description}</p>
            <p> {history.translate}</p>
        </div>
    </article>
    ))}
    </> 
);

export default History;