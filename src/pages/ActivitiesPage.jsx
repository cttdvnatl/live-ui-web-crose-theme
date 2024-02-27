import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-multi-lang';

const ActivitiesPage = () => {
    const [urls, setUrls] = useState([]);
    const t = useTranslation()

    /* 
        fetch the google doc url to get the page source
        use regular expression to get all image tags (copy the image tag from the response)
        map urls into correct images
        popular images as desired in a div instead of using a iframe
    */
    useEffect(() => {
        const regex = /<img[^>]+src="([^">]+)"/g
        fetch(`https://docs.google.com/document/d/e/2PACX-1vTcDXqoECI94lT1wpRnonouurzZdaWJNRlDS73ipoTcuqXdZRgqwLTGEo4SOdYNM8GFdD8-eFjsPwfx/pub?embedded=true`)
            .then(response => response.text())
            .then(text => {
                let url
                while ((url = regex.exec(text))) {
                    setUrls(urls => [...urls, url.at(1)])
                }
            })
    }, [])

    return (
        <>
            <Header />
            <section className="section-padding-25">
                <h2 className="section-heading">{t('activities.title')}</h2>
                {urls.map((url) => (
                    <div class="row about-content justify-content-center section-padding-25">
                        <div class="center-50">
                            <img src={url} alt="" />
                        </div>
                    </div>
                ))}
            </section>
            <Footer />
        </>
    );
}
export default ActivitiesPage;


