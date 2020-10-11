import React, {useEffect, useState, useCallback} from 'react';
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

const Calendar = (prop) => {
    const [calendar, setCalendar] = useState("");
    const resizeCallback = useCallback(() => {
        setCalendar(window.innerWidth < 800 ?
            "https://calendar.google.com/calendar/embed?height=650&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=Y2h1cmNoLmNhbGVuZGFyQGN0dGR2bmF0bC5vcmc&color=%23616161&title=L%E1%BB%8Bch%20Gi%C3%A1o%20X%E1%BB%A9&showNav=1&showDate=1&showPrint=0&showCalendars=1&showTz=0&mode=AGENDA"
            : "https://calendar.google.com/calendar/embed?height=650&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=Y2h1cmNoLmNhbGVuZGFyQGN0dGR2bmF0bC5vcmc&color=%23616161&title=L%E1%BB%8Bch%20Gi%C3%A1o%20X%E1%BB%A9&showNav=1&showDate=1&showPrint=0&showCalendars=1&showTz=0");
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