import articles from "../database/articles-content.js";
var container = document.getElementsByClassName("articles-container")[0];

let getArticleString = (title, date, body) => (
    `
    <div class="col-12">
        <!-- Single Upcoming Artile Area -->
        <div class="single-upcoming-events-area d-flex flex-wrap align-items-center">
            <!-- Thumbnail -->
            <div class="upcoming-events-thumbnail">
                <img src="http://cttdvnatl.net/gallery/img/core-img/articles-chaTuan.jpg" alt="">
            </div>
            <!-- Content -->
            <div class="upcoming-events-content d-flex flex-wrap align-items-center">
                <div class="events-text">
                    <h4>${title}</h4>
                    <div class="events-meta">
                        <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i>${date}</a>
                    </div>
                    <p>${body.replace(/(?:\r\n|\r|\n)/g, '<br>').substring(0,101) + "..."}</p>
                    <!-- <a href="#">Read More <i class="fa fa-angle-double-right"></i></a> -->
                </div>
                <div class="find-out-more-btn">
                    <a href="single-article.html?date=${date}" class="btn crose-btn btn-2">Xem thêm</a>
                </div>
            </div>
        </div>
    </div>
    `
);

for (let i = 0; i < articles.length; i++) {
    let article = articles[i];//articles.find(article => article.date = "2018-10-26");
    let formattedDate = article.date.split("-").reverse().join("-");
    container.innerHTML += getArticleString(article.title, formattedDate, article.body);
}
