import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import historyContent from '../database/history-content';
//import hvmatlDataVN from '../database/hvmatlDataVN';
//import hvmatlDataEN from '../database/hvmatlDataEN';
import History from '../components/History';
import { useTranslation} from 'react-multi-lang';

/*
const HistoryPage = () => {

    let Data;

    if (getLanguage() === 'vn') {
        Data = hvmatlDataVN.history;
    }
    if (getLanguage() === 'en') {
        Data = hvmatlDataEN.history;
    }

    const t = useTranslation()
    return (
        <div>
            <Header />
            <history data={Data} />
            <Footer />
        </div>
    );
};
*/
const history = historyContent;

const HistoryPage = () => {

    const t = useTranslation()
    return (
    <>
        <Header />
            <h3 style={{textAlign : 'center'}} className="history">{t("history.pageTitle")}<br></br> {t("history.pageTitleContinued")} &#8211; Atlanta Georgia</h3>
            <section className="" id="timeline">
            <History list={history} />
            </section>
        <Footer />
    </>
    )

};

export default HistoryPage;