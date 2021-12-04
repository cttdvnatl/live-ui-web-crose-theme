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
        <div className="container-fluid" style={{"backgroundColor": "#F5CBA7", "display":"block"}}>
            <div className="row">
                {/* <!-- Section Heading --> */}
                <div className="col-12">
                    <div className="text-center" style={{"marginTop":".5rem"}}>
                    <a href={prop.url}>
                            {msgSize === 'lg' ?
                                <h2 style={{"color":"#BA4A00"}}>{"LỄ HỘI GIÁNG SINH - 12/18/2021 - 5:00PM ~ 11:30PM"}</h2> :
                                <h5 style={{"color":"#ffffff"}}>{"LỄ HỘI GIÁNG SINH - 12/18/2021 - 5:00PM ~ 11:30PM"}</h5>
                            }
                        </a>                   
                    </div>
                </div>
            </div>
           
        </div>
    ) : null;
};
export default BannerMsg;
