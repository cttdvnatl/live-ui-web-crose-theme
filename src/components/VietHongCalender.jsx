import React from 'react';

    const calender = document.getElementById("viet-hong-calender");

    if (window.innerWidth < 800) {
        calender.src = "";
    }
    
const VietHongCalender = () => (
    <>
        <iframe width="100%`" title="VietHong" src="https://calendar.google.com/calendar/b/2/embed?height=650&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dmlldGhvbmdAY3R0ZHZuYXRsLm9yZw&amp;color=%23039BE5&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0" style={{borderWidth:0}} width="70%" height="650" frameborder="0" scrolling="no"/>
    </>
);

export default VietHongCalender;
 