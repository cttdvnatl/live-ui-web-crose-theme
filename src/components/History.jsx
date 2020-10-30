import React from 'react';

const History = ({list}) => (
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