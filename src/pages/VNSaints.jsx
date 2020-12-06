import React from 'react';
import TOC from '../database/vnSaintsTOC';
import Header from '../components/Header';
import Footer from '../components/Footer';



const VNSaintsComponents = ({list}) => {;
    const section = "9"
    return (
    <>
    <div class="vn-saints-sections">
    {list.map((Saint) => (
    <div style={{
        display: (() => {
            if (section === Saint.id) {
                return "block";
            } else {
                return "block";
            }
        })() 
    }}
    
    class="saint">  
        {/*<h1 id={Saint.id}>{Saint.day}</h1>*/}
        <h1>{Saint.name} ({Saint.birthDeath})</h1>
    <h5><b>HÁT: {Saint.songName}</b></h5>
        <p>{Saint.song}</p>
        <p><b>Lời dẫn:</b> {Saint.introduction}
        <br/>
        <b>&#123;Mời cộng đoàn ngồi&#125;</b>
        </p>
        <h5><b>TIỂU SỬ</b></h5>
        <p><b style={{fontSize: '17px'}}>{Saint.title1}</b>
            <br/>
            {Saint.story1}
        </p>
        <p><b style={{fontSize: '17px'}}>{Saint.title2}</b>
            <br/>
            {Saint.story2}
        </p>
        <p><b style={{fontSize: '17px'}}>{Saint.title3}</b>
            <br/>
            {Saint.story3}
        </p>
        <p><b style={{fontSize: '17px'}}>{Saint.title4}</b>
            <br/>
            {Saint.story4}
        </p>
        {/* <h5>THÁNH VỊNH {Saint.psalmNumber}</h5>
        <p>
            <b>ĐC:{Saint.psalmResponse}</b>
            <br/>
            {Saint.psalm1}
            <br/>
            {Saint.psalm2}
            <br/>
            <b>ĐC:{Saint.psalmResponse}</b>
        </p>
        <h5>LỜI CHÚA ({Saint.chVerse})</h5>
        <p>{Saint.reading}</p>
        <h5><b>Lời Cầu: &#123;Mời cộng đoàn đứng&#125;</b></h5>
        <p id='prayer1'>{Saint.prayer1}</p>
        <p id="prayer-response1" style={{display: Saint.display1}}><b>{Saint.prayerResponse}</b></p>
        <p id="prayer2">{Saint.prayer2}</p>
        <p id="prayer-response2" style={{display: Saint.display2}}><b>{Saint.prayerResponse}</b></p>
        <p id="prayer3">{Saint.prayer3}</p>
        <p id="prayer-response3" style={{display: Saint.display3}}><b>{Saint.prayerResponse}</b></p>
        <p id="prayer4">{Saint.prayer4}</p>
        <p id="prayer-response4" style={{display: Saint.display4}}><b>{Saint.prayerResponse}</b></p>
        <p id="prayer5">{Saint.prayer5}</p>
        <p id="prayer-response5" style={{display: Saint.display5}}><b>{Saint.prayerResponse}</b></p>
        <h5>KINH LẠY CHA</h5>
        <h5><b style={{fontSize: '17px'}}>Lời Nguyện</b></h5>
        <p>{Saint.para1}</p>
        <h5><b style={{fontSize: '17px'}}>{Saint.heading2}</b></h5>
        <p>{Saint.para2}</p> */}
    </div>
    ))}
    </div>
    </>
    )
}        

const VNSaints = () => {
    return (
    <>
    <Header/>
    <div class="vn-saints">
        <VNSaintsComponents list={TOC}/>
    </div>
    <Footer/>
    </>
    )
};

export default VNSaints;