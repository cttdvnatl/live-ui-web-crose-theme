import React, {useEffect, useCallback, useState} from 'react';

const BannerMsg = (prop) => {
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

    return 'banner' in prop && prop.banner === true ? (
        <div className="container-fluid" style={{"backgroundColor": "#F5B7B1", "display":"block"}}>
            <div className="row">
                {/* <!-- Section Heading --> */}
                <div className="col-12">
                    <div className="text-center" style={{"marginTop":".5rem"}}>
                    <a href={prop.url}>
                            {msgSize === 'lg' ?
                                <h2 style={{"color":"#943126"}}>{"*****   Click HERE to register for a Free COVID-19 Home Test Kit     *****"}</h2> :
                                <h5 style={{"color":"#943126"}}>{"*****   Click HERE to register for a Free COVID-19 Home Test Kit     *****"}</h5>
                            }
                        </a>                   
                    </div>
                </div>
            </div>
           
        </div>
    ) : null;
};
export default BannerMsg;
