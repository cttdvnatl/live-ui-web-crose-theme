import React from 'react';

const DisplayActivities = ({list}) => {
    return (
        <>
        {list.map((VietHongActivitiesContent) => (
            <div class="activities-image">
                <img alt="activities-img" src={VietHongActivitiesContent.img}/>
                <figcaption>{VietHongActivitiesContent.caption}</figcaption>
            </div>
        ))}
        </>
    )
}

export default DisplayActivities;