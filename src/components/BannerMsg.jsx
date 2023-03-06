import React, {useEffect, useCallback, useState} from 'react';
import { Col, Row, Container, ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

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
        <Container fluid style={{"backgroundColor": "#9932CC"}}>
            <Row>
                {/* <!-- Section Heading --> */}
                <Col className="justify-content-center text-center" md={12} xs={12}  lg={12}>
                
                    <a href={prop.url}>
                            {/* {msgSize === 'lg' ?
                                <h2 style={{"color":"#FFFACD"}}>{"***    Ghi danh buổi Hiệp Hành của Giáo Xứ     ***"}</h2> :
                                <h5 style={{"color":"#FFFACD"}}>{"***    Ghi danh buổi Hiệp Hành của Giáo Xứ     ***"}</h5>
                            } */}
                            {msgSize === 'lg' 
                                ? <h2 style={{"color":"#FFFACD"}}>***{prop.message}***</h2> 
                                : <h5 style={{"color":"#FFFACD"}}>***{prop.message}***</h5>
                            }
                        </a> 
                    
                    <ButtonGroup className="mb-2">
                        <Link to={`/st-joseph`} className="text-white">
                            <Button variant="outline-light" className="mx-2">{prop.button1Text}</Button>     
                        </Link>
                        
                        <Link to={`/viet-hong`} className="text-white">
                            <Button variant="outline-light" className="mx-2">{prop.button2Text}</Button> 
                        </Link>
                    </ButtonGroup>
                </Col>
            </Row>
           
        </Container >
    ) : null;
};
export default BannerMsg;
