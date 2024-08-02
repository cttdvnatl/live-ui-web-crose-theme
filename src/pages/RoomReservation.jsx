import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-multi-lang';

const RoomReservation = () => {
    const t = useTranslation()
    const form = useRef();
    const locationInput = useRef();
    const groupInput = useRef();
    const purposeInput = useRef();
    const dateInput = useRef();
    const daysInput = useRef();
    const timeInput = useRef();
    const hoursInput = useRef();
    const nameInput = useRef();
    const emailInput = useRef();
    const phoneInput = useRef();
    const equipmentInput = useRef();
    const equipmentSupportInput = useRef();
    const equipmentTrainingInput = useRef();
    const foodDrinkInput = useRef();
    const entertainmentInput = useRef();
    const attendantsInput = useRef();
    const needsInput = useRef();
    const statementInput = useRef();
    const celebrantInput = useRef();
    const languageInput = useRef();
    const sacristyInput = useRef();
    const choirInput = useRef();
    const alterServerInput = useRef();
    const soundInput = useRef();
    const liveStreamInput = useRef();
    const slideShowInput = useRef();
    const usherInput = useRef();
    const speechInput = useRef();
    const submit = useRef();
    const [displayFormTwo, setDisplayFormTwo] = useState("none");

    const sendEmail = (e) => {
        e.preventDefault();
        if (nameInput.current.value !== '' && emailInput.current.value !== '') {
            submit.current.remove();
            emailjs.sendForm('service_b0k0s9n', 'template_tyxp1sl', form.current, '-ZHFDCmDLZL4Veu0z')
            .then((result) => {
                //console.log(result.text);
                window.location.href = "/form-success";
            }, (error) => {
                //console.log(error.text);
                window.location.href = "/form-error";
            });
        }
    };

    return (
        <>
            <Header />
            <div className='form'>
                <h1>{t('roomReservationForm.pageTitle')}</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="location">{t('roomReservationForm.where')}</label>
                            <input placeholder={'' + t('roomReservationForm.whereTextBoxName')} ref={locationInput} type="text" name="where" />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="group">{t('roomReservationForm.nameOfGroup')}</label>
                            <input ref={groupInput} type="text" name="group" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="purpose">{t('roomReservationForm.reason')}</label>
                            <input placeholder={'' + t('roomReservationForm.reasonTextBoxName')} ref={purposeInput} type="text" name="reason" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="date">{t('roomReservationForm.date')}</label>
                            <input placeholder={'' + t('roomReservationForm.dateTextBoxName')} ref={dateInput} type="text" name="day" />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="days">{t('roomReservationForm.days')}</label>
                            <input placeholder={'' + t('roomReservationForm.daysTextBoxName')} ref={daysInput} type="text" name="days" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="time">{t('roomReservationForm.time')}</label>
                            <input placeholder={'' + t('roomReservationForm.timeTextBoxName')} ref={timeInput} type="text" name="time" />
                        </div>
                        <div className= 'form-input'>
                            <label htmlFor="hours">{t('roomReservationForm.hours')}</label>
                            <input placeholder={'' + t('roomReservationForm.hoursTextBoxName')} ref={hoursInput} type="text" name="hours" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="name">{t('roomReservationForm.name')}</label>
                            <input placeholder={'' + t('roomReservationForm.nameTextBoxName')} ref={nameInput} type="text" name="name" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="email">{t('roomReservationForm.email')}</label>
                            <input placeholder={'' + t('roomReservationForm.emailTextBoxName')} ref={emailInput} type="text" name="email" />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="phone">{t('roomReservationForm.phone')}</label>
                            <input placeholder={'' + t('roomReservationForm.phoneTextBoxName')} ref={phoneInput} type="text" name="phone" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="equipment">{t('roomReservationForm.equipment')}</label>
                            <input ref={equipmentInput} type="text" name="equipment" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="equipments">{t('roomReservationForm.operatingEquipmentOne')}</label>
                            <select name= "equipmentSupport" ref={equipmentSupportInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="equipments">{t('roomReservationForm.operatingEquipmentTwo')}</label>
                            <select name="equipmentTraining" ref={equipmentTrainingInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="food-drink">{t('roomReservationForm.foodDrink')}</label>
                            <select name="foodDrink" ref={foodDrinkInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="entertainment">{t('roomReservationForm.entertainment')}</label>
                            <select name= "entertainment" ref={entertainmentInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="attendants">{t('roomReservationForm.attendants')}</label>
                            <input ref={attendantsInput} type="text" name="attendants" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="needs">{t('roomReservationForm.message')}</label>
                            <input ref={needsInput} type="text" name="needs" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-checkbox'>
                            <label for="statement">{t('roomReservationForm.statement')}</label>
                            <input ref={statementInput} type="checkbox" onClick={() => setDisplayFormTwo(displayFormTwo === "block" ? "none" : "block")}/>
                        </div>
                    </div>
                    <div className='formTwo' style={{display: displayFormTwo}}>
                        <div className='form-row'>
                            <div className='form-input'>
                                <label htmlFor="celebrant">{t('roomReservationForm.celebrantName')}</label>
                                <input placeholder={'' + t('roomReservationForm.celebrantNameTextBoxName')} ref={celebrantInput} type="text" name="celebrant" />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-input'>
                                <label htmlFor="language">{t('roomReservationForm.language')}</label>
                                <input placeholder={'' + t('roomReservationForm.languageTextBoxName')} ref={languageInput} type="text" name="language" />
                            </div>
                        </div>
                        <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="sacristy">{t('roomReservationForm.sacristy')}</label>
                            <select name= "sacristy" ref={sacristyInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="choir">{t('roomReservationForm.choir')}</label>
                            <select name="choir" ref={choirInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="altarServer">{t('roomReservationForm.altarServer')}</label>
                            <select name="altarServer" ref={alterServerInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="sound">{t('roomReservationForm.sound')}</label>
                            <select name="sound" ref={soundInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="liveStream">{t('roomReservationForm.liveStream')}</label>
                            <select name="liveStream" ref={liveStreamInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="slideShow">{t('roomReservationForm.slideShow')}</label>
                            <select name="slideShow" ref={slideShowInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="usher">{t('roomReservationForm.usher')}</label>
                            <select name="usher" ref={usherInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="speech">{t('roomReservationForm.speech')}</label>
                            <select name="speech" ref={speechInput}>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                    </div>
                    <input ref={submit} class="contact-form-submit" type="submit" value="Submit" />
                </form>
            </div>
            <Footer />
        </>
    );
}

export default RoomReservation;