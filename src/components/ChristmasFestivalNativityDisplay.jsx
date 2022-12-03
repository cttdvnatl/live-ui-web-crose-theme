import React from 'react';

const ChristmasFestivalNativityDisplay = ({list}) => {
    return (
        <>
        {list.map((ChristmasFestivalDisplaysContent) => (
                <div class="row about-content justify-content-center">
            <div class="christmas-image">
                <img src={ChristmasFestivalDisplaysContent.img} alt=""/>
                <figcaption>{ChristmasFestivalDisplaysContent.caption}</figcaption><br/><br/>
            </div>
            </div>

        ))}
        </>
    )
}

export default ChristmasFestivalNativityDisplay;