import React from 'react';
import { useTranslation } from 'react-multi-lang';

const VietHongHeader = () => {
    const t = useTranslation();
    return (
        <div id="viet-hong-header">
            <a href="/viethong">{t('viethong.header.item1')}</a>
            <a href="/viet-hong-teachers">{t('viethong.header.item2')}</a>
            <a href="/viet-hong-activities">{t('viethong.header.item3')}</a>
            <a href="/viet-hong-documents">{t('viethong.header.item4')}</a>
            <a href="/viet-hong-classes">{t('viethong.header.item5')}</a>
        </div>
    )

}

export default VietHongHeader;