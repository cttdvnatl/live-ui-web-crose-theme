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
                                <h2 style={{"color":"#BA4A00"}}>{"Thánh Lễ mừng Bổn Mạng Giáo Xứ Nov 25 - 9:30AM"}</h2> :
                                <h5 style={{"color":"#ffffff"}}>{"Thánh Lễ mừng Bổn Mạng Giáo Xứ Nov 25 - 9:30AM"}</h5>
                            }
                        </a>                   
                    </div>
                </div>
            </div>
           
        </div>
    ) : null;
};
export default BannerMsg;