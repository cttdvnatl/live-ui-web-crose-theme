import React from 'react';

const ChristmasFestivalMusicDisplay = ({list}) => {
    return (
        <>
        {list.map((ChristmasFestivalDisplaysContent) => (
                <div class="row about-content justify-content-center">
            <div class="music-image">
                <img src={ChristmasFestivalDisplaysContent.img} alt=""/>
                <figcaption>{ChristmasFestivalDisplaysContent.caption}</figcaption><br/><br/>
            </div>
            </div>

        ))}
        </>
    )
}

export default ChristmasFestivalMusicDisplay;