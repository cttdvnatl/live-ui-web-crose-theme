import React, {useEffect, useCallback, useState} from 'react';

const EmergencyEvent = (prop) => {
    const [msgSize, setMsgSize] = useState('');

    const resizeCallback = useCallback(() => {
        if(window.innerWidth < 1450) {
            setMsgSize('sm');
        } else
            setMsgSize('lg');
    },[]);

    useEffect(() => {
        resizeCallback();
        window.addEventListener("resize", resizeCallback);
        return () => {
            window.removeEventListener("resize", resizeCallback);
        };
    }, [resizeCallback]);

    return 'emergency' in prop && prop.emergency === true ? (
        <div className="container-fluid" style={{"backgroundColor": "#c92f2f", "display":"block"}}>
            <div className="row">
                {/* <!-- Section Heading --> */}
                <div className="col-12">
                    <div className="text-center" style={{"marginTop":".5rem"}}>
                        <a href={prop.url}>
                            {msgSize === 'lg' ?
                                <h2 style={{"color":"#ffffff"}}>{prop.message}</h2> :
                                <h5 style={{"color":"#ffffff"}}>{prop.message}</h5>
                            }
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};
export default EmergencyEvent;