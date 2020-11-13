import articles from "../database/covid19-content.js";
var container = document.getElementsByClassName("articles-container")[0];

let getArticleString = (image, title, date, body, link) => (
    `
    <div class="col-12">
        <!-- Single Upcoming Artile Area -->
        <div class="single-upcoming-events-area d-flex flex-wrap align-items-center">
            <!-- Thumbnail -->
            <div class="upcoming-events-thumbnail">
                <img src="${image}" alt="">
            </div>
            <!-- Content -->
            <div class="upcoming-events-content d-flex flex-wrap align-items-center">
                <div class="events-text">
                    <h4>${title}</h4>
                    <div class="events-meta">
                        <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i>${date.split("-").reverse().join("-")}</a>
                    </div>
                    <p>${body.replace(/(?:\r\n|\r|\n)/g, '<br>').substring(0,101) + "..."}</p>
                    <!-- <a href="#">Read More <i class="fa fa-angle-double-right"></i></a> -->
                </div>
                <div class="find-out-more-btn">
                    <a href="${link}" class="btn crose-btn btn-2">Xem thêm</a>
                </div>
            </div>
        </div>
    </div>
    `
);

// traverse through all article objects in the database
for (let i = 0; i < articles.length; i++) {
    let article = articles[i];
    
    //if there is no image in the article object, set the default image for the article object
    if (!article.image) article.image = "https://hvmatl.net/gallery/img/hvm_covid19/hvmCovid_logoBox.png";

    //preprocess link to the article
    //if there is a specific link, use it
    if (article.link);    
    //if there is pdf link, use pdf link as the link
    else if (article.pdf){
        article.link = article.pdf;
    }
    //if there is no pdf arttribute, use default html link
    else {
        article.link = `hvm_covid19_single-article.html?date=${article.date}`;
    }

    //add one article to the page
    container.innerHTML += getArticleString(article.image, article.title, article.date, article.body, article.link);
}
