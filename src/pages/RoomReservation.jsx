import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-multi-lang';

const RoomReservation = () => {
    const t = useTranslation()
    const form = useRef();
    const [displayFormTwo, setDisplayFormTwo] = useState("none");

    return (
        <>
            <Header />
            <div className='form'>
                <h1>{t('roomReservationForm.pageTitle')}</h1>
                <form ref={form}>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="location">{t('roomReservationForm.where')}</label>
                            <input placeholder={'' + t('roomReservationForm.whereTextBoxName')} type="text" name="where" />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="group">{t('roomReservationForm.nameOfGroup')}</label>
                            <input type="text" name="group" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="purpose">{t('roomReservationForm.reason')}</label>
                            <input placeholder={'' + t('roomReservationForm.reasonTextBoxName')} type="text" name="reason" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="date">{t('roomReservationForm.date')}</label>
                            <input placeholder={'' + t('roomReservationForm.dateTextBoxName')} type="text" name="day" />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="days">{t('roomReservationForm.days')}</label>
                            <input placeholder={'' + t('roomReservationForm.daysTextBoxName')} type="text" name="days" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="time">{t('roomReservationForm.time')}</label>
                            <input placeholder={'' + t('roomReservationForm.timeTextBoxName')} type="text" name="time" />
                        </div>
                        <div className= 'form-input'>
                            <label htmlFor="hours">{t('roomReservationForm.hours')}</label>
                            <input placeholder={'' + t('roomReservationForm.hoursTextBoxName')} type="text" name="hours" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="name">{t('roomReservationForm.name')}</label>
                            <input placeholder={'' + t('roomReservationForm.nameTextBoxName')} type="text" name="name" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="email">{t('roomReservationForm.email')}</label>
                            <input placeholder={'' + t('roomReservationForm.emailTextBoxName')} type="text" name="email" />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="phone">{t('roomReservationForm.phone')}</label>
                            <input placeholder={'' + t('roomReservationForm.phoneTextBoxName')} type="text" name="phone" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="equipment">{t('roomReservationForm.equipment')}</label>
                            <input type="text" name="equipment" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="equipments">{t('roomReservationForm.operatingEquipmentOne')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="equipments">{t('roomReservationForm.operatingEquipmentTwo')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="food-drink">{t('roomReservationForm.foodDrink')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="entertainment">{t('roomReservationForm.entertainment')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="attendants">{t('roomReservationForm.attendants')}</label>
                            <input type="text" name="attendants" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-input'>
                            <label htmlFor="needs">{t('roomReservationForm.message')}</label>
                            <input type="text" name="needs" />
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-checkbox'>
                            <label for="statement">{t('roomReservationForm.statement')}</label>
                            <input type="checkbox" onClick={() => setDisplayFormTwo(displayFormTwo === "block" ? "none" : "block")}/>
                        </div>
                    </div>
                    <div className='formTwo' style={{display: displayFormTwo}}>
                        <div className='form-row'>
                            <div className='form-input'>
                                <label htmlFor="celebrant">{t('roomReservationForm.celebrantName')}</label>
                                <input placeholder={'' + t('roomReservationForm.celebrantNameTextBoxName')} type="text" name="where" />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='form-input'>
                                <label htmlFor="language">{t('roomReservationForm.language')}</label>
                                <input placeholder={'' + t('roomReservationForm.languageTextBoxName')} type="text" name="reason" />
                            </div>
                        </div>
                        <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="sacristy">{t('roomReservationForm.sacristy')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="choir">{t('roomReservationForm.choir')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="altarServer">{t('roomReservationForm.altarServer')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="sound">{t('roomReservationForm.sound')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="liveStream">{t('roomReservationForm.liveStream')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="slideShow">{t('roomReservationForm.slideShow')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="usher">{t('roomReservationForm.usher')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                     <div className='form-row'>
                        <div className='select'>
                            <label htmlFor="speech">{t('roomReservationForm.speech')}</label>
                            <select>
                                <option value="no">{t('roomReservationForm.no')}</option>
                                <option value="yes">{t('roomReservationForm.yes')}</option>
                            </select>
                        </div>
                     </div>
                    </div>
                    <input type="submit" />
                </form>
            </div>
            <Footer />
        </>
    );
}

export default RoomReservation;