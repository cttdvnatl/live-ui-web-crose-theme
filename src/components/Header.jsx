/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
// import axios from 'axios';
const Header = (prop) => {
    // const [getTemp, setTemp] = useState(() => navigator.geolocation.getCurrentPosition(async(pos) => {
	// 	const res = await axios({
	// 		url:"https://api.openweathermap.org/data/2.5/weather",
	// 		method: 'get',
	// 		params: {
	// 			lat: pos.coords.latitude,
	// 			lon: pos.coords.longitude,
    //             appid: 'a1f8ea13ceb084b2fc8527fa54ffa3c3',
    //             units:'imperial'
	// 		},
    //     });
    //     return res.data.main.temp;
    // }));
    return (
        // <!-- ##### Header Area Start ##### -->
        <header className= "header-area">
        
            {/* <!-- ***** Top Header Area ***** --> */}
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="top-header-content d-flex flex-wrap align-items-center justify-content-between">
                                {/* <!-- Top Header Meta --> */}
                                <div className="top-header-meta d-flex flex-wrap">
                                    <p><a href="/" className="open" data-toggle="tooltip" data-placement="bottom" title= {prop.time}><i className="fa fa-clock-o" aria-hidden="true"></i> <span>Time: {prop.time}</span> </a>Temperature: 30 F</p>
                                    <div className="top-social-info">
                                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                {/* <!-- Top Header Meta --> */}
                                <div className="top-header-meta">
                                    <a href="mailto:info@cttdvn.org" className="email-address"><i className="fa fa-envelope" aria-hidden="true"></i> <span>info@cttdvn.org</span></a>
                                    <a href="#" className="phone"><i className="fa fa-phone" aria-hidden="true"></i> <span>770-921-0077</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Top Header Area ***** -->  */}
        
            {/* <!-- ***** Navbar Area ***** --> */}
            <div className="crose-main-menu">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        {/* <!-- Menu --> */}
                        <nav className="classy-navbar justify-content-between" id="croseNav">
        
                            {/* <!-- Nav brand --> */}
                            <a href="/" className="nav-brand"><img src="img/core-img/gxlogo.png" alt=""/></a>
        
                            {/* <!-- Navbar Toggler --> */}
                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span></span><span></span><span></span></span>
                            </div>
        
                            {/* <!-- Menu --> */}
                            <div className="classy-menu">
        
                                {/* <!-- close btn --> */}
                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                </div>
        
                                {/* <!-- Nav Start --> */}
                                <div className="classynav">
                                        <ul>
                                            {/* <!--li><a href="index.html">TRANG CHÙ</a></li--> */}
                                            <li><a href="/">GIÁO XỨ</a>
                                                <ul className="dropdown">
                                                    <li><a href="/">Trang Chủ</a></li>
                                                    <li><a href="SuMenhGX.html">Sứ Mệnh Giáo Xứ</a></li>
                                                    <li><a href="LichSuGX.html">Lịch Sử Giáo Xứ</a></li>
                                                    <li><a href="LichPhungVu.html">Lịch Phụng Vụ</a></li>
                                                    <li><a href="LinhMuTuSi.html">Linh Mục/Tu Sĩ</a></li>
                                                    <li><a href="QuyChuc.html">Qúy Chứ</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">TIN TỨC/SỰ KIỆN</a>
                                                <ul className="dropdown">
                                                    <li><a href="TinTucCG.html">Tin Tức Công Giáo</a></li>
                                                    <li><a href="SinhHoatGX.html">Sinh Hoạt Giáo Xứ</a></li>
                                                    <li><a href="Lich.html">Lịch 2019</a></li>
                                                    <li><a href="HCMT.html">Hội Chợ Mùa Thu</a></li>
                                                    <li><a href="TNTT.html">TNTT Tôma Thiện</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="BanNganh">BAN NGÀNH</a>
                                                <ul className="dropdown">
                                                    <li><a href="SoDoToChu.html">Sơ Đồ Tổ Chức</a></li>
                                                    <li><a href="KCS.html">Khối Cơ Sở</a></li>
                                                    <li><a href="KDS.html">Khối Đời Sống</a></li>
                                                    <li><a href="KGD.html">Khối Giáo Dục</a></li>
                                                    <li><a href="KHC.html">Khối Hành Chánh</a></li>
                                                    <li><a href="KPT.html">Khối Phụng Tự</a></li>                                            
                                                    <li><a href="KTG.html">Khối Truyền Giáo</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="ThuVien">Thư Viện</a>
                                                <ul className="dropdown">
                                                    <li><a href="ThongTinMV.html">Thông Tin Mục Vụ</a></li>
                                                    <li><a href="CacBaiViet.html">Các Bài Viết</a></li>
                                                    <li><a href="CacBaiGiang.html">Các Bài Giảng</a></li>
                                                    <li><a href="ThuVienHinhAnh.html">Thư Viện Hình Ảnh</a></li>
                                                    <li><a href="DonTu.html">Đơn Từ</a></li>
                                                    <li><a href="PrayerRequest.html">Prayer Request</a></li>
                                                </ul>
                                            </li>                                                                     
                                            <li><a href="Contact">Contact</a></li>
                                        </ul>
        
                                    {/* <!-- Search Button --> */}
                                    <div id="header-search"><i className="fa fa-search" aria-hidden="true"></i></div>
        
                                    {/* <!-- Donate Button --> */}
                                    <a href="#" className="btn crose-btn header-btn">DÂNG HIẾN</a>
        
                                </div>
                                {/* <!-- Nav End --> */}
                            </div>
                        </nav>
                    </div>
                </div>
        
                {/* <!-- ***** Search Form Area ***** --> */}
                <div className="search-form-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <div className="searchForm">
                                    <form action="#" method="post">
                                        <input type="search" name="search" id="search" placeholder="Enter keywords &amp; hit enter..."/>
                                        <button type="submit" className="d-none"></button>
                                    </form>
                                    <div className="close-icon" id="searchCloseIcon"><i className="fa fa-close" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Navbar Area ***** --> */}
        </header>
        // <!-- ##### Header Area End ##### -->
    );
};

export default Header;