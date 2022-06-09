import React from 'react';

const DisplayActivities = ({list}) => {
    return (
        <>
        {list.map((VietHongActivities) => (
            <div class="activities-image">
                <img src={VietHongActivities.img}/>
            </div>
        ))}
        </>
    )
}

export default DisplayActivities;