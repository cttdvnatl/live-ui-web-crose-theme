import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import { useTranslation } from 'react-multi-lang';
import DeptOwnerContent from '../database/departmentOwners-content';

import {useParams} from 'react-router-dom';

/*
const DeptOwnerPage = ({ match }) => {
    const t = useTranslation();
    const id = match.params.id;
    const DeptOwnerDetail = useTranslation().find(DeptOwnerDetail => DeptOwnerDetail.name === id);
    if (!DeptOwnerDetail) return <h1>DeptOwnerDetail does not exist!</h1>

    return (
        <>
            <Header />
            <p></p>
            <div class="row about-content justify-content-center">
                <div class="col-10 col-md-6 col-lg-3">
                    <div class="about-us-content mb-100">
                        <img src={t("staff.content.image")} alt="" />
                        <div class="about-text">
                            <h3><b>{t("staff.content.title")}</b></h3>
                            <h4>{t('staff.content.name')}</h4>
                            <h4>{t('staff.content.phone')}</h4>
                            <h4>{t('staff.content.email')}</h4>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
*/

const DeptOwnerPage = ({match}) => {
    const {id} = useParams();

    const DeptOwnerDetail = DeptOwnerContent.find(DeptOwnerDetail => DeptOwnerDetail.name === id);
    if (!DeptOwnerDetail) return <h1>DeptOwnerDetail does not exist!</h1>

    return (
    <>
    <Header/>
    <p></p>       
    <div class="row about-content justify-content-center">
        <div class="col-10 col-md-6 col-lg-3">
            <div class="about-us-content mb-100">
                <img src={DeptOwnerDetail.primaryOwnerImg} alt=""/>
                <div class="about-text">
                    <h3><b>{DeptOwnerDetail.primaryOwnerTitle}</b></h3>
                    <h4>{DeptOwnerDetail.primaryOwner}</h4>
                    <h4>{DeptOwnerDetail.primaryOwnerPhone}</h4>
                    <h4>{DeptOwnerDetail.primaryOwnerEmail}</h4>
                </div>
            </div>
        </div>
        <div class="col-10 col-md-6 col-lg-3">
            <div class="about-us-content mb-100">
                <img src={DeptOwnerDetail.secondaryOwnerImg} alt=""/>
                <div class="about-text">
                    <h3><b>{DeptOwnerDetail.secondaryOwnerTitle}</b></h3>
                    <h4>{DeptOwnerDetail.secondaryOwner}</h4>
                    <h4>{DeptOwnerDetail.secondaryOwnerPhone}</h4>
                    <h4>{DeptOwnerDetail.secondaryOwnerEmail}</h4>
                </div>
            </div>
        </div>
        <div class="col-10 col-md-6 col-lg-3">
            <div class="about-us-content mb-100">
                <img src={DeptOwnerDetail.thirdOwnerImg} alt=""/>
                <div class="about-text">
                    <h3><b>{DeptOwnerDetail.thirdOwnerTitle}</b></h3>
                    <h4>{DeptOwnerDetail.thirdOwner}</h4>
                    <h4>{DeptOwnerDetail.thirdOwnerPhone}</h4>
                    <h4>{DeptOwnerDetail.thirdOwnerEmail}</h4>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>   
    );
}
export default DeptOwnerPage;