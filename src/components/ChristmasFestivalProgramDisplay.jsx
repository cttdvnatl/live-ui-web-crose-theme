import React from 'react';

const ChristmasFestivalProgramDisplay = ({list}) => {
    return (
        <>
        {list.map((ChristmasFestivalProgramContent) => (
                <div class="row about-content justify-content-center">
            <div class="program-image">
                <img src={ChristmasFestivalProgramContent.img} alt=""/>
                <figcaption>{ChristmasFestivalProgramContent.caption}</figcaption><br/><br/>
            </div>
            </div>

        ))}
        </>
    )
}

export default ChristmasFestivalProgramDisplay;