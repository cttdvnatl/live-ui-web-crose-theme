import React from 'react';

const VNSaintsComponents = ({list}) => (
        <>
        <div class="vn-saints-toc">
        {list.map((SaintsTOC) => (
            <>
                <h1>{SaintsTOC.day}</h1>
                <a href={'#' + SaintsTOC.link}>{SaintsTOC.prayerName}</a>
            </>
        ))}
        </div>
        <div class="vn-saints-sections">
        {list.map((Saint) => (
        <>
            <h1 id="1">{Saint.day}</h1>
            <h1>{Saint.name} ({Saint.birthDeath})</h1>
            <h5><b>HÁT: Cầu Xin Chúa Thánh Thần (Đứng)</b></h5>
            <p>{Saint.song}</p>
            <p><b>Lời dẫn:</b> {Saint.introduction}
            <br/>
            &#123;Mời cộng đoàn ngồi&#125;
            </p>
            <h5><b>TIỂU SỬ</b></h5>
            <p><b style={{fontSize: '17px'}}>{Saint.title1}</b>
                <br/>
                {Saint.story1}
            </p>
            <p><b>{Saint.title2}</b>
                <br/>
                {Saint.story2}
            </p>
            <p><b>{Saint.title3}</b>
                <br/>
                {Saint.story3}
            </p>
            <p><b>{Saint.title4}</b>
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
            <h5>KINH LẠY CHA</h5>
            <h5><b>Lời Nguyện</b></h5>
            <p>{Saint.para1}</p>
            <h5><b>Kinh Các Thánh Tử Đạo Việt Nam</b></h5>
            <p>{Saint.para2}</p>
        </>
        ))}
        </div>
        </>
        )        

export default VNSaintsComponents;