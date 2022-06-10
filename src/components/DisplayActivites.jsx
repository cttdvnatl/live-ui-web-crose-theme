import React from 'react';

const DisplayActivities = ({list}) => {
    return (
        <>
        {list.map((VietHongActivities) => (
            <div class="activities-image">
                <img alt="activities-img" src={VietHongActivities.img}/>
                <figcaption>{VietHongActivities.caption}</figcaption>
            </div>
        ))}
        </>
    )
}

export default DisplayActivities;