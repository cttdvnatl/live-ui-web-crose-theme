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
        {id === "KGD" ? 
        <a href="https://archatl.com/ministries-services/safe-environment/"
            style={{
                cursor: "pointer",
                margin: "auto",
                textAlign: "center",
                margin: 10
            }} 
            target="_blank"
        >
            <img 
                src="https://hvmatl.s3.us-east-2.amazonaws.com/gallery/kgd/arch-diocese/arch-diocese-promise-to-protect.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJIMEYCIQCHrWEsJ%2BXp2ZmwRFsNax2qhkMi6zMVNOXwZ2raQeQkzAIhALIBe%2FTNz4mMJ0EKxM3l3k4K91vO4sSBk4rWM01ZCGKCKvsCCDoQABoMMTg3MTUwNTY3NDEyIgx19HUZIo2ViUiPCzIq2ALAax565GrRu88lrrWsTNCUNdnB98S380Grpu2tWU9PkKkZjuYKj%2FyWeXAsu8xrJ6H641PQcuyAhYSOsKu0T2wiXvyvZSDdsoxPcrvwod83oeIfnkzDF4Dy0mrkmP3DlabQYvXvth5YCFnLcOjM6OeaBd%2FsvtpkCpsZTFq7ZMjmSnZCOcfW064Rg3jcO%2FOxg7%2B%2BJDcgTPxUitHsIIOG3nXHRLt2iFP2weJMybjB5Dv59vejW0MyUorswndd%2B2ZUN4YVorYvcyCJpSeL6PQtw8NnQTf1f6ptmwewbrMSemEjHL%2FR4Xcd91FGHdIhq4n%2BKNTxcUMwciMMUyjPZnRNLkTNBXb6dM2dEo69nI5XfxIXYQOXJaYQWaYtVfOu9yXOb4BkHhZi2d8JbrKaM1chjF6lDMfpFM2LFq%2Fn5maXnJhp9ExksV%2B9FD%2FXar3HIZCGMWi2vNpA%2BMdAlDDg2q%2ByBjqyAniZwHpp34ULYMfVTzhxJ15vXf95wwaEvDWppEX8iDOF8K2iOY5kYddHXkForE%2B7HSgNeIQ6JlJrliEz2dzn1U2fTKUJDYlXbPMRTFjTCGZXUCHkDjpGCu2hii%2BgmLz2A0M1%2FL2N%2FY%2FqA6Len5tZzQY82ksXRyppc0iDcuMtqxcG7c3CHNj%2BZVF%2F0AmeJbXcPoXwT4jVthg8%2FU5%2BpnG1v2JX%2F9wwjhfAZTiMK9irR22jMcztjUQchyJ5rbr0NfcCbMDzB8rg%2BoEGuk1kj%2FyTztsiUKEVpm9u3rIIDEHvj6ZVMugTh5LsVANb0vyPmE6Rsv4oRpo9H2p071l8qmBU1%2BgS3l9ZE1Z%2FAHEzndMS%2F%2FzaWYkIxD8EOxrO7sziHzk3wN%2Blq6Oa8H70F3lurpivGhEVTA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240521T005143Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASXEYLA72NMZP3NA7%2F20240521%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=b3b5fc77203c35ff84bc30d37d523784bb179c9d13e481568ab25b0d90a86e80"
                style={{
                    cursor: "pointer",
                    width: "350px"
                }}
                alt="promise-to-protect-img"
            />
        </a>
        :
        <></>
        }
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