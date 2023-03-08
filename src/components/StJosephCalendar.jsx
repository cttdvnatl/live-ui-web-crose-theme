import React, {useState, useCallback, useEffect} from 'react';
import Ratio from 'react-bootstrap/Ratio';

const StJosephCalendar = (prop) => {
    const [calendar, setCalendar] = useState("");
    const resizeCallback = useCallback(() => {
        setCalendar(window.innerWidth < 800 ?
            "https://calendar.google.com/calendar/embed?src=truong.thanh.giuse%40hvmatl.org&ctz=America%2FNew_York&mode=AGENDA"
            : "https://calendar.google.com/calendar/embed?src=truong.thanh.giuse%40hvmatl.org&ctz=America%2FNew_York");
    }, [setCalendar]);

    useEffect(() => {
        resizeCallback();
        window.addEventListener("resize", resizeCallback);
        return () => window.removeEventListener("resize", resizeCallback);
    }, [resizeCallback]);

    return(
    <Ratio>
        <object id="viet-hong-calendar" title="VietHong" data={calendar} style={{borderWidth:0}} width="70%" height="650" frameBorder="0" scrolling="no"/>
    </Ratio>
    );
};

export default StJosephCalendar;
//https://calendar.google.com/calendar/embed?src=c_dgivr3d12tg5os4klf11vk1770%40group.calendar.google.com&ctz=America%2FNew_York