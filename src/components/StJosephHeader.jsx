import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { Link } from 'react-router-dom';

const StJosephHeader = () => {
    const t = useTranslation();

    const stJosephLinks = [
        { path: '/st-joseph', text: 'stjoseph.header.item1'},
        { path: '/st-joseph/teachers', text: 'stjoseph.header.item2'},
        { path: '/st-joseph/activities', text: 'stjoseph.header.item3'},
        { path: '/st-joseph/documents', text: 'stjoseph.header.item4'},
    ]

    return (
        <>
        <div id="viet-hong-header">
            {stJosephLinks.map(link => <Link key={link.path} to={link.path}>{t(link.text)}</Link>)}
                {/*<a href="/st-joseph-classes">{t('stjoseph.header.item5')}</a>*/}
            </div>
        </>
    );
};

export default StJosephHeader;