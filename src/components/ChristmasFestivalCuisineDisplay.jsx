import React from 'react';

const ChristmasFestivalCuisineDisplay = ({list}) => {
    return (
        <>
        {list.map((ChristmasFestivalDisplaysContent) => (
                <div class="row about-content justify-content-center">
            <div class="cuisine-image">
                <img src={ChristmasFestivalDisplaysContent.img} alt=""/>
                <figcaption>{ChristmasFestivalDisplaysContent.caption}</figcaption><br/><br/>
            </div>
            </div>

        ))}
        </>
    )
}

export default ChristmasFestivalCuisineDisplay;