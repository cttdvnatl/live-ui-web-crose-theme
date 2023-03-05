import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { Link } from 'react-router-dom';

const VietHongHeader = () => {
    const t = useTranslation();
    const viethongLinks = [
        { path: '/viet-hong', text: 'viethong.header.item1'},
        { path: '/viet-hong/teachers', text: 'viethong.header.item2'},
        { path: '/viet-hong/classes', text: 'viethong.header.item3'},
        { path: '/viet-hong/activities', text: 'viethong.header.item4'},
        { path: '/viet-hong/documents', text: 'viethong.header.item5'},
    ]

    return (
        <div id="viet-hong-header">
            {viethongLinks.map(link => <Link to={link.path}>{t(link.text)}</Link>)}
        </div>
    );
};
export default VietHongHeader;