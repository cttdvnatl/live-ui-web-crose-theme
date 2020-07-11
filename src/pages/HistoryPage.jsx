import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import historyContent from '../database/history-content';
import History from '../components/History';
import { useTranslation, setTranslations, setDefaultLanguage } from 'react-multi-lang';
import vn from '../database/hvmatlDataVN.json';
import en from '../database/hvmatlDataEN.json';

setTranslations({vn, en})
setDefaultLanguage('vn')

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