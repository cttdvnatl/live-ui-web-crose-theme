import React, {useEffect, useCallback, useState} from 'react';

const HcmtEvent = (prop) => {
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

    return 'hcmt' in prop && prop.hcmt === true ? (
        <div className="container-fluid" style={{"backgroundColor": "#b5ff9e", "display":"block"}}>
            <div className="row">
                {/* <!-- Section Heading --> */}
                <div className="col-12">
                    <div className="text-center" style={{"marginTop":".5rem"}}>
                    <a href={prop.url}>
                        <img src="http://hvmatl.com/gallery/hcmt21/InLine_LHMT.png"/>   
                    </a>                     
                    </div>
                </div>
            </div>
           
        </div>
    ) : null;
};
export default HcmtEvent;