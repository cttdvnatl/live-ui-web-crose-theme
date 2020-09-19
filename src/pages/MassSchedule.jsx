import React from 'react';
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MassSchedule = (prop) => {
    return (
        <div>
            <Preloader/>
            <Header/>
            <section className="section-padding-100">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <p>
                                <h3>Giờ Lễ</h3>
                                <b>Thứ Hai - Thứ Bảy:</b>  8:00AM<br/>
                                <b>Thứ Năm - Thứ Sáu:</b>  7:00PM<br/>
                                <b>Thứ Bảy:</b>  Lễ Vọng Chúa Nhật 5:30PM<br/>
                                <b>Chúa Nhật:</b>  7:30AM , 9:30AM , & 11:30AM<br/><br/>
                                <h3>Giải Tội</h3>
                                <b>Ngày Thường:</b> Sau Thánh Lễ  8:00AM<br/>
                                <b>Thứ Bảy:</b>  4:30PM - 5:15PM<br/><br/><br/>
                                <h3>Rửa Tội Trẻ Em</h3>
                                <b>Chúa Nhật Tuần Thứ 1:</b>  9:30AM - 10:30AM<br/>
                                <b>Thứ Bảy Tuần Thứ 2:</b> Sau Lễ 8:00AM<br/><br/><br/>
                            </p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <p>
                                <h3>Mass Times</h3>
                                <b>Monday - Saturday:</b>  8:00AM<br/>
                                <b>Thurday - Friday:</b>  7:00PM<br/>
                                <b>Saturday:</b>  Vigil Mass 5:30PM<br/>
                                <b>Sunday:</b>  7:30AM , 9:30AM , & 11:30AM<br/><br/>
                                <h3>Reconciliation (Confession)</h3>
                                <b>Weekdays:</b> following 8:00AM Mass<br/>
                                <b>Saturday:</b>  4:30PM - 5:15PM<br/><br/><br/>
                                <h3>Baptisms</h3>
                                <b>1st Sunday of Month (Mandatory Class):</b>  9:30AM - 10:30AM<br/>
                                <b>2nd Saturday of Month (Baptism):</b> After Mass 8:00AM<br/><br/><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};
export default MassSchedule;