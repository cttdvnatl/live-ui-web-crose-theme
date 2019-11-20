import articles from "../database/articles-content.js";
var container = document.getElementsByClassName("blog-posts-area")[0];

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
}


let getArticleString = (title, date, body) => (
    `
    <!-- Post Details Area -->
    <div class="single-post-details-area">
        <div class="post-thumbnail mb-30 col-12 col-lg-2">
            <img src="img/bg-img/27.jpg" alt="">
        </div>
        <div class="post-content col-12 col-lg-auto">
            <h2 class="post-title">${title}</h2>
            <p>${body.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
        </div>
    </div>
    `
);

