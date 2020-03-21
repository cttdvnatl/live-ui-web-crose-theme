import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Acitivities = () => {
    return (
        <div>
            <Header/>
            <div className="events-area section-padding-100">
                <div className="container">
                    <div className="row">
                        {/* <!-- Events Title --> */}
                        <div className="col-12">
                            <div className="events-title text-center">
                                <h2>Sinh hoạt trong Cộng Đoàn</h2>
                            </div>
                        </div>

                        <div className="col-12">
                            {/* <!-- Single Upcoming Events Area --> */}
                            <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                {/* <!-- Thumbnail --> */}
                                <div className="upcoming-events-thumbnail">
                                    <img src="img/bg-img/NewYear.jpg" alt=""/>
                                </div>
                                {/* <!-- Content --> */}
                                <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                    <div className="events-text">
                                        <h4><br/>
                                            Lịch Lễ tháng 1 / January Mass Schedule (2020)</h4>
                                        <div className="events-meta">
                                            <a href="/"><i className="fa fa-calendar" aria-hidden="true"></i> January, 2020</a>
                                            <a href="/"><i className="fa fa-clock-o" aria-hidden="true"></i> </a>
                                            <a href="/"><i className="fa fa-map-marker" aria-hidden="true"></i> Holy Vietnam Martyrs
                                                Catholic Church</a>
                                        </div>
                                        <ol>
                                            <li><strong><u>1/1/2020 (Thứ tư) Lễ Đức Maria Mẹ Thiên Chúa, Lễ trọng và buộc:</u></strong> </li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><u>(Wednesday) Feast of Mary Mother of God, Holy Obligation:</u></strong> </li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-9:30 AM 2 Thánh Lễ / Mass</li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-11:30 AM 1 Thánh Lễ / Mass</li>
                                            <li><strong><u>1/5/2020 (Chúa nhật) Lễ Hiển Linh.  (Sunday) -  Epiphany mass.</u></strong></li>
                                            <li><strong><u>1/25/2020 (Thứ Bảy) Mùng 1 Tết Nguyên Đán năm Canh Tý:</u></strong></li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><u>(Saturday) - 1st day of Lunar New Year, the year of the rat:</u></strong></li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp8:00 AM - 1 Thánh Lễ / Mass.  Trước thánh lễ có Tế Tự.</li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp8:00 PM - 1 Thánh Lễ / Mass.  Trước thánh lễ có Tế Tự.</li>
                                            <li><strong><u>1/26/2020 (Chúa nhật) - Ngày mùng Hai Tết Nguyên Đán, Nghi Thức Bái Niên, Lộc Thánh…:</u></strong></li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><u>(Sunday) - Celebrate 2nd day of Lunar New Year, with tradition activities:</u></strong></li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp7:30 AM, 9:30 AM, 11:30 AM - Thánh Lễ / Mass</li>
                                            <li><strong><u>1/27/2020 (Thứ Hai) - Ngày mùng Ba Tết Nguyên Đán:</u></strong></li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong><u>(Monday) - Celebrate 3rd day of Lunar New Year:</u></strong></li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp8:00 AM, 8:00 PM - Thánh Lễ / Mass</li>
                                        </ol>
                                        {/* <!-- <a href="#">Read More <i className="fa fa-angle-double-right"></i></a> --> */}
                                    </div>
                                    {/* <!-- <div className="find-out-more-btn"> */}
                                        {/* <a href="#" className="btn crose-btn btn-2">Find Out More</a> */}
                                    {/* </div> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            {/* <!-- Single Upcoming Events Area --> */}
                            <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                {/* <!-- Thumbnail --> */}
                                <div className="upcoming-events-thumbnail">
                                    <img src="img/bg-img/manger1.jpg" alt=""/>
                                </div>
                                {/* <!-- Content --> */}
                                <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                    <div className="events-text">
                                        <h4><br/>
                                            Lịch Lễ tháng 12.  December Mass content and Schedule (2019)</h4>
                                        <div className="events-meta">
                                            <a href="/"><i className="fa fa-calendar" aria-hidden="true"></i> December/2019</a>
                                            <a href="/"><i className="fa fa-clock-o" aria-hidden="true"></i> </a>
                                            <a href="/"><i className="fa fa-map-marker" aria-hidden="true"></i> Holy Vietnam Martyrs
                                                Catholic Church</a>
                                        </div>
                                        <ol>
                                            <li><strong><u>12/15/2019 Chúa Nhật tuần III Mùa Vọng/ 3rd Sunday of Advent:</u></strong></li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-Sau các Thánh lễ có Xức Dầu Bệnh Nhân. Anointed of the sick will be after all the Mass.</li>
                                            <li><strong><u>12/24/2019 Đêm Canh thức và Lễ vọng, Christmas Eve mass:</u></strong></li>
                                            <li>-7:00 PM cho Thiếu Nhi.  Hoạt Cảnh Giáng Sinh tại Hội Trường Giuse. </li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTiếp theo 1 Thánh Lễ tại Nhà Thờ.</li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspYouth Christmas pageant follow by a Mass.</li>
                                            <li>-10:00 PM cho Cộng đoàn.  1 Thánh Lễ Canh thức Vọng Giáng Sinh tại Nhà Thờ.</li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspChrismas Eve Mass.</li>
                                            <li><strong><u>12/25/2019 Ngày Đại Lễ Giáng Sinh, Christmas Mass: </u></strong></li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-9:30 AM 2 Thánh Lễ / Mass, Đức Cha Bernard sẽ chủ sự 1 thánh Lễ.</li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-11:30 AM 1 Thánh Lễ / Mass.</li>
                                            <li><strong><u>12/29/2019 Lễ Thánh Gia. Feast of the Holy Family:</u></strong></li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-Chúa nhật, Lễ Thánh Gia. Sẽ có Giờ Chầu Tạ Ơn cuối năm sau mỗi Thánh Lễ.  Không có 2 Thánh Lễ Thiếu Nhi lúc 11:30am và 1:30pm.</li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp-Sunday, there will be a thanksgiving dedication at end of the year after each Mass.  There will be no youth masses on this day.</li>
                                        </ol>
                                        {/* <!-- <a href="#">Read More <i className="fa fa-angle-double-right"></i></a> --> */}
                                    </div>
                                    {/* <!-- <div className="find-out-more-btn"> */}
                                        {/* <a href="#" className="btn crose-btn btn-2">Find Out More</a> */}
                                    {/* </div> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            {/* <!-- Single Upcoming Events Area --> */}
                            <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                {/* <!-- Thumbnail --> */}
                                <div className="upcoming-events-thumbnail">
                                    <img src="img/bg-img/Youth_group.jpg" alt=""/>
                                </div>
                                {/* <!-- Content --> */}
                                <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                    <div className="events-text">
                                        <h4><br/>
                                            Tháng 12 va Tháng 1 - Thông báo và Lễ cho Thiếu Nhi.  Mass and Announcements for Youth members.</h4>
                                        <div className="events-meta">
                                            <a href="/"><i className="fa fa-calendar" aria-hidden="true"></i> January, 2020</a>
                                            <a href="/"><i className="fa fa-clock-o" aria-hidden="true"></i> </a>
                                            <a href="/"><i className="fa fa-map-marker" aria-hidden="true"></i> Holy Vietnam Martyrs
                                                Catholic Church</a>
                                        </div>
                                        <ol>
                                            <li><strong><u>12/24/2019</u></strong> -  Diễn kịch và Lễ vọng cho Thiếu Nhi bắt đầu lúc 7:00 giờ tối.</li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - The play and youth mass start at 7:00 PM.</li>
                                            <li><strong><u>12/28/2019 & 1/4/2019</u></strong> -  Không có lớp Việt Ngữ.</li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - No Vietnamese classes.</li>
                                            <li><strong><u>12/29/2019 & 1/5/2019</u></strong> -  Không có lớp Giáo Lý.  Không có hai Thánh Lễ Thiếu &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspNhi</li>
                                            <li>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp - No religion classes.  No youth masses.</li>
                                        </ol>
                                        {/* <!-- <a href="#">Read More <i className="fa fa-angle-double-right"></i></a> --> */}
                                    </div>
                                    {/* <!-- <div className="find-out-more-btn"> */}
                                        {/* <a href="#" className="btn crose-btn btn-2">Find Out More</a> */}
                                    {/* </div> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            {/* <!-- Single Upcoming Events Area --> */}
                            <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                {/* <!-- Thumbnail --> */}
                                <div className="upcoming-events-thumbnail">
                                    <img src="img/bg-img/activity-1.jpg" alt=""/>
                                </div>
                                {/* <!-- Content --> */}
                                <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                    <div className="events-text">
                                        <h4>
                                            HỘI CAO NIÊN DIÊN HỒNG – Họp Mặt Trại Hè 2019</h4>
                                        <div className="events-meta">
                                            <a href="/"><i className="fa fa-calendar" aria-hidden="true"></i> 14. September,
                                                2019</a>
                                            <a href="/"><i className="fa fa-clock-o" aria-hidden="true"></i> 12:30pm</a>
                                            <a href="/"><i className="fa fa-map-marker" aria-hidden="true"></i> Chow Time, 2055
                                                Beaver Ruin Rd #G, Norcross, GA 30071</a>
                                        </div>
                                        <p>Hội Cao Niên Diên Hồng xin thông báo tới quý Hội viên ngày họp mặt trại hè 2019.</p>
                                        <p>Thời gian: 12:30pm, Thứ Bảy ngày 14 tháng 9 năm 2019</p>
                                        <p>Địa điểm: Tại Chow Time, 2055 Beaver Ruin Rd #G, Norcross, GA 30071</p>
                                        {/* <!-- <a href="#">Read More <i className="fa fa-angle-double-right"></i></a> --> */}
                                    </div>
                                    {/* <!-- <div className="find-out-more-btn"> */}
                                        {/* <a href="#" className="btn crose-btn btn-2">Find Out More</a> */}
                                    {/* </div> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            {/* <!-- Single Upcoming Events Area --> */}
                            <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                {/* <!-- Thumbnail --> */}
                                <div className="upcoming-events-thumbnail">
                                    <img src="img/bg-img/activity-2.jpg" alt=""/>
                                </div>
                                {/* <!-- Content --> */}
                                <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                    <div className="events-text">
                                        <h4>
                                            Chương Trình Thánh Lễ Cuối Tuần Hội Chợ Mùa Thu</h4>
                                        <div className="events-meta">
                                            <a href="/"><i className="fa fa-calendar" aria-hidden="true"></i> </a>
                                            <a href="/"><i className="fa fa-clock-o" aria-hidden="true"></i> </a>
                                            <a href="/"><i className="fa fa-map-marker" aria-hidden="true"></i> </a>
                                        </div>
                                        <ol>
                                            <li><strong><u>Thứ Sáu, ngày 30 tháng 8</u></strong></li>
                                        </ol>
                                        <ul>
                                            <li>Thánh lễ khai mạc lúc 4:30pm tại Nhà Thờ. Sau lễ rước kiệu Mình Thánh Chúa xuống
                                                Lều Thánh Thể.</li>
                                            <li>Giờ hòa giải và linh hướng tại Lều Thánh Thể: từ 8:00pm-10:00pm.</li>
                                            <li>Lúc 10:45pm chầu phép lành và 11:00pm rước Mình Thánh Chúa về lại Nhà thờ.</li>
                                        </ul>
                                        <ol start="2">
                                            <li><strong><u>Thứ Bảy, ngày 31 tháng 8</u></strong></li>
                                        </ol>
                                        <ul>
                                            <li>Thánh lễ sáng lúc 8:00am tại Nhà Thờ. Sau Thánh lễ rước Mình Thánh Chúa xuống
                                                Lều Thánh Thể. Thánh lễ Chúa
                                                Nhật lúc 5:30pm tại Nhà Thờ.</li>
                                            <li>Giờ hòa giải và linh hướng tại Lều Thánh Thể: phiên thứ nhất từ 9:00am-11:00am,
                                                phiên thứ hai từ
                                                2:00pm-4:00pm, phiên thứ ba từ 7:00pm-10:00pm.</li>
                                            <li>Lúc 10:45pm chầu phép lành và 11:00pm rước Mình Thánh Chúa về lại Nhà thờ.</li>
                                        </ul>
                                        <ol start="3">
                                            <li><strong><u>Chúa Nhật, ngày 1 tháng 9</u></strong></li>
                                        </ol>
                                        <ul>
                                            <li>Lễ 7:30am tại Nhà thờ.</li>
                                            <li>Lễ 9:30am tại Trung Tâm Sinh Hoạt Giáo Xứ.</li>
                                            <li>Lễ 11:30am tại Nhà thờ.</li>
                                            <li>Sau thánh lễ 11:30am rước Mình Thánh Chúa xuống Lều Thánh Thể.</li>
                                            <li>Giờ hòa giải và linh hướng tại Lều Thánh Thể: phiên thứ nhất từ 3:00pm-5:00pm,
                                                phiên thứ hai từ
                                                7:00pm-10:00pm.</li>
                                            <li>Lúc 10:45pm chầu phép lành và 11:00pm rước Mình Thánh Chúa về lại Nhà thờ.</li>
                                            <li><strong><em><u>Lưu ý:</u></em></strong></li>
                                        </ul>
                                        <p><em>Xin ghi danh Chầu Thánh Thể và gặp Cha Linh Hướng.</em></p>
                                        <p><em>Chương trình có thể linh động thay đổi.</em></p>
                                        {/* <!-- <a href="#">Read More <i className="fa fa-angle-double-right"></i></a> --> */}
                                    </div>
                                    {/* <!-- <div className="find-out-more-btn"> */}
                                        {/* <a href="#" className="btn crose-btn btn-2">Find Out More</a> */}
                                    {/* </div> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            {/* <!-- Single Upcoming Events Area --> */}
                            <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                {/* <!-- Thumbnail --> */}
                                <div className="upcoming-events-thumbnail">
                                    <img src="img/bg-img/activity-3.jpg" alt=""/>
                                </div>
                                {/* <!-- Content --> */}
                                <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                    <div className="events-text">
                                        <h4>
                                            Lễ Đức Mẹ Hồn Xác Lên Trời, Lễ Trọng Buộc</h4>
                                        <div className="events-meta">
                                            <a href="/"><i className="fa fa-calendar" aria-hidden="true"></i> 15. August, 2019</a>
                                            <a href="/"><i className="fa fa-clock-o" aria-hidden="true"></i> </a>
                                            <a href="/"><i className="fa fa-map-marker" aria-hidden="true"></i> Holy Vietnam Martyrs
                                                Catholic Church</a>
                                        </div>
                                        <ol>
                                            <li>Thứ Năm ngày 15 tháng 8 lễ Đức Mẹ Hồn Xác Lên Trời, Lễ Trọng Buộc.</li>
                                            <ul>
                                                <li>1 Thánh lễ 8:00 sáng</li>
                                                <li>2 Thánh lễ 8:00 tối</li>
                                            </ul>
                                            <li>Sau các thánh lễ Chúa Nhật ngày 18 tháng 8 sẽ có Xức Dầu Bệnh Nhân.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Acitivities;