import React from 'react';
import { useTranslation } from 'react-multi-lang';

const StJosephHeader = () => {
    const t = useTranslation();
    return (
        <>
        <div id="viet-hong-header">
                <a href="/viethong">{t('stjoseph.header.item1')}</a>
                <a href="/viet-hong-teachers">{t('stjoseph.header.item2')}</a>
                <a href="/viet-hong-activities">{t('stjoseph.header.item3')}</a>
                <a href="/viet-hong-documents">{t('stjoseph.header.item4')}</a>
                <a href="/viet-hong-classes">{t('stjoseph.header.item5')}</a>
            </div>
        </>
    );
};

export default StJosephHeader;