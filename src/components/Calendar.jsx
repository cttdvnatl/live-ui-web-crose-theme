import React, {useEffect, useState, useCallback} from 'react';
import Ratio from "react-bootstrap/Ratio";

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
        <div className="container-fluid text-center my-4">
            <Ratio aspectRatio="16x9">
                <object title={"liturgicalCalendar"} data={calendar}/>
            </Ratio>
        </div>
    );
};
export default Calendar;