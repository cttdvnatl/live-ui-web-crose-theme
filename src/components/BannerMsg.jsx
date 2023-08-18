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
        <div className="container-fluid" style={{"backgroundColor": "#9932CC", "display":"block"}}>
            <div className="row">
                {/* <!-- Section Heading --> */}
                <div className="col-12 text-center my-2">
                    <div>
                    <a href={prop.url}>
                            {msgSize === 'lg' ?
                                <a href="https://fallfestival.hvmatl.org/"><h2 style={{"color":"#FFFACD"}}>*** {prop.bannerMsg} ***</h2></a> :
                                <a href="https://fallfestival.hvmatl.org/"><h5 style={{"color":"#FFFACD"}}>*** {prop.bannerMsg} ***</h5></a>
                            }
                        </a>                   
                    </div>
                    <div>
                        {prop.button1Text ? <button onClick={prop.button1Action} class="btn btn-outline-light mx-2">{prop.button1Text}</button> : null }
                        {prop.button2Text ? <button onClick={prop.button2Action} class="btn btn-outline-light mx-2">{prop.button2Text}</button> : null }
                    </div>
                </div>
            </div>
           
        </div>
    ) : null;
};
export default BannerMsg;
