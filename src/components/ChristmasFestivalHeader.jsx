import React from 'react';
import { useTranslation } from 'react-multi-lang';

const ChristmasFestivalHeader = () => {
    const t = useTranslation();
    return (
        <>
        <div id="viet-hong-header">
                <a href="/christmasfestival">{t('christmasfestival.header.item1')}</a>
                <a href="/christmas-festival-program">{t('christmasfestival.header.item2')}</a>
                <a href="/christmas-festival-displays">{t('christmasfestival.header.item3')}</a>
                <a href="/christmas-festival-menu">{t('christmasfestival.header.item4')}</a>
        </div>
        </>
    );
};

export default ChristmasFestivalHeader;