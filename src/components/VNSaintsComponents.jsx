import React from 'react';

const VNSaintsComponents = ({list}) => {
        return (
        <>
        <form action="../components/setSection.jsx" style={{display: 'none'}}>
        <label for="saint">Chọn Ngày</label>
        <select name="saint" id="saint">
        {list.map((SaintsTOC) => (
            <>
                <option type="submit" value={SaintsTOC.id}><input type="submit" value="Submit"/>{SaintsTOC.day}</option>
            </>
        ))}
        </select>
        </form>
        <div class="vn-saints-sections">
        {list.map((Saint) => (
        <div class="saint">  
            <h1 id={Saint.id}>{Saint.day}</h1>
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
            <h5>THÁNH VỊNH {Saint.psalmNumber}</h5>
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
            <p>{Saint.prayer1}</p>
            <p><b>{Saint.prayerResponse}</b></p>
            <p>{Saint.prayer2}</p>
            <p><b>{Saint.prayerResponse}</b></p>
            <p>{Saint.prayer3}</p>
            <p><b>{Saint.prayerResponse}</b></p>
            <p>{Saint.prayer4}</p>
            <p><b>{Saint.prayerResponse}</b></p>
            <p>{Saint.prayer5}</p>
            <p><b>{Saint.prayerResponse}</b></p>
            <h5>KINH LẠY CHA</h5>
            <h5><b style={{fontSize: '17px'}}>Lời Nguyện</b></h5>
            <p>{Saint.para1}</p>
            <h5><b style={{fontSize: '17px'}}>{Saint.heading2}</b></h5>
            <p>{Saint.para2}</p>
        </div>
        ))}
        </div>
        </>
        )
        }        

export default VNSaintsComponents;