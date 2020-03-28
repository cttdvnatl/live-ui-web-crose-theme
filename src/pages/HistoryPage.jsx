import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import historyContent from '../database/history-content';
import History from '../components/History';

const history = historyContent;

const HistoryPage = () => (
    <>
        <Header />
            <h3 style={{textAlign : 'center'}} className="history">Quá Trình Thành Lập<br></br> Giáo Xứ Các Thánh Tử Đạo Việt Nam &#8211; Atlanta, Georgia</h3>
            <section className="" id="timeline">
            <History list={history} />
            </section>
        <Footer />
    </>
);

export default HistoryPage;