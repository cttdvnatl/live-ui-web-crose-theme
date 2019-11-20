
var date = new Date(2019, 10, 10);

var container = document.getElementsByClassName("weekly-news-container")[0];
// let getHTMLString = (date) => {
//     return `
//     <div class="col-xl-12 col-12 ">
//         <a href="./pdf/${date.getFullYear()}-${date.getMonth() + 1}_cn${date.getDate()}.pdf">
//             <h6><b>CN ${date.getDate()} Tháng ${date.getMonth() + 1}, ${date.getFullYear}</b></h6>
//         </a>
//     </div>
//     `;
// };
    for (let i = 0; i < 5; i++) {
    
    container.innerHTML += 
    `
    <div class="col-xl-12 col-12 ">
        <a href="./pdf/${date.toLocaleDateString("en-US", {year:"numeric", month:"2-digit"})}_cn${date.getDate()}.pdf">
            <h6><b>CN ${date.getDate()} Tháng ${date.getMonth() + 1}, ${date.getFullYear()}</b></h6>
        </a>
    </div>
    `;
    date.setDate(date.getDate() - 7);
    }