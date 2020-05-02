import React, {useState, useCallback, useEffect} from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

const VietHongCalendar = (prop) => {
    const [calendar, setCalendar] = useState("");
    const resizeCallback = useCallback(() => {
        setCalendar(window.innerWidth < 800 ?
            "https://calendar.google.com/calendar/b/2/embed?height=650&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=dmlldGhvbmdAY3R0ZHZuYXRsLm9yZw&color=%23039BE5&showNav=1&showDate=1&showPrint=0&showCalendars=0&showTz=0&mode=AGENDA"
            : "https://calendar.google.com/calendar/b/2/embed?height=650&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=dmlldGhvbmdAY3R0ZHZuYXRsLm9yZw&color=%23039BE5&showNav=1&showDate=1&showPrint=0&showCalendars=0&showTz=0");
    }, [setCalendar]);

    useEffect(() => {
        resizeCallback();
        window.addEventListener("resize", resizeCallback);
        return () => window.removeEventListener("resize", resizeCallback);
    }, [resizeCallback]);

    return(
    <ResponsiveEmbed>
        <object id="viet-hong-calendar" title="VietHong" data={calendar} style={{borderWidth:0}} width="70%" height="650" frameborder="0" scrolling="no"/>
    </ResponsiveEmbed>
    );
};

export default VietHongCalendar;
 //"https://calendar.google.com/calendar/b/2/embed?height=650&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dmlldGhvbmdAY3R0ZHZuYXRsLm9yZw&amp;color=%23039BE5&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0"