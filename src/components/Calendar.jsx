import React, {useEffect, useState, useCallback} from 'react';
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

const Calendar = (prop) => {
    const [calendar, setCalendar] = useState("");
    const resizeCallback = useCallback(() => {
        setCalendar(window.innerWidth < 800 ?
            "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=Y2h1cmNoLmluZm9AaHZtYXRsLm9yZw&color=%234285F4&mode=AGENDA"
            : "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=Y2h1cmNoLmluZm9AaHZtYXRsLm9yZw&color=%234285F4");
    }, [setCalendar]);

    useEffect(() => {
        resizeCallback();
        window.addEventListener("resize", resizeCallback);
        return () => window.removeEventListener("resize", resizeCallback);
    }, [resizeCallback]);
    return(
        <section>
            <ResponsiveEmbed className="container-fluid text-center" style={{"height": "750px", "padding":"20px 0"}}>
                <object style={{"width":"100%", "height":"100%"}} title={"liturgicalCalendar"} data={calendar}/>
            </ResponsiveEmbed>
        </section>
    );
};
export default Calendar;