import React from 'react';
import Preloader from '../components/Preloader';
import Header from '../components/Header';


const Directors = (prop) => {
    return(
        <div>
            <Preloader/>
            <Header/>

            {/* <!-- ##### About Us Area Start ##### --> */}
            <div class="Sơ Đồ Tổ Chức-area section-padding-25">
                <center><h2>Hội Đồng Mục Vụ 2019-2023</h2></center>
                <img src="img/core-img/HDMV2019.jpg" alt="HDMV2019" class="center-50"/>
            </div>
        </div>
    )
}
export default Directors;