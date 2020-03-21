import React from 'react';

const Calendar = (prop) => {
    return(
        <section>
            <div className="container-fluid text-center" style={{"height": "750px", "padding":"20px 0"}}>
                <iframe style={{"width":"75%", "height":"100%"}}
                        title={"liturgicalCalendar"}
                        src={"https://calendar.google.com/calendar/embed?height=650&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=Y2h1cmNoLmNhbGVuZGFyQGN0dGR2bmF0bC5vcmc&color=%23616161&title=L%E1%BB%8Bch%20Gi%C3%A1o%20X%E1%BB%A9&showNav=1&showDate=1&showPrint=0&showCalendars=1&showTz=0"}>
                </iframe>
            </div>
        </section>
    );
};
export default Calendar;