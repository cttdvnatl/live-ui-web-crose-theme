import articles from "../database/covid19-content.js";
var container = document.getElementsByClassName("blog-posts-area")[0];

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

let date = String(getUrlVars()["date"]);
let article = articles.find(article => article.date == date);


let getArticleString = (title, body) => (
    `
    <!-- Post Details Area -->
    <div class="single-post-details-area">
        <!-- <div class="post-thumbnail mb-30 col-12 col-lg-2">
            <img src="" alt="">
        </div> -->
        <div class="post-content col-12 col-lg-auto">
            <h2 class="post-title">${title}</h2>
            <p>${body.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
        </div>
    </div>
    `
);

if (article) container.innerHTML += getArticleString(article.title, article.body);