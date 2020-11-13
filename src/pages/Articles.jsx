//TODO: Working on this
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import articleContent from '../database/articles-content';

const Articles = (prop) => {
    return (
        <div>
            <Header />

            <div class="events-area section-padding-100">
                <div class="container">
                    <div class="row articles-container">
                        {/* <!-- Articles Title --> */}
                        <div class="col-12">
                            <div class="events-title">
                                <center>
                                    <h2>Các Bài Viết</h2>
                                </center>
                            </div>
                        </div>
                        {/* <!-- Articles List --> */}
                        {articleContent.map((article, key) => {
                            return (
                                <div className="col-12">
                                    {/* <!-- Single Upcoming Artile Area --> */}
                                    <div className="single-upcoming-events-area d-flex flex-wrap align-items-center" key={key}>
                                        {/* <!-- Thumbnail --> */}
                                        <div className="upcoming-events-thumbnail">
                                            <img src={article.image ? article.image : "http://hvmatl.net/gallery/img/articles/article-logo.png"} alt="" />
                                        </div>
                                        {/* <!-- Content --> */}
                                        <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                            <div className="events-text">
                                                <h4>{article.title}</h4>
                                                <div className="events-meta">
                                                    <a href={`/ArticleDetail/${article.date}`}><i className="fa fa-calendar" aria-hidden="true"></i>{article.date.split("-").reverse().join("-")}</a>
                                                </div>
                                                <p>{article.body.substring(0, 101) + "..."}</p>
                                                {/* <!-- <a href="#">Read More <i className="fa fa-angle-double-right"></i></a> --> */}
                                            </div>
                                            <div className="find-out-more-btn">
                                                <a href={`/ArticleDetail/${article.date}`} className="btn crose-btn btn-2">Xem thêm</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <!--  pagination area --> */}
                        {/* <!-- <div class="col-12">
                            <div class="pagination-area mt-70">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#"><i
                                                    class="fa fa-angle-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div> --> */}
                        {/* <!--  pagination area end --> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Articles;

// /**
//  * 
//  * @param {*} prop: list of all articles - available: article contents. 
//  */

// const Articles = (prop) => {
//     return(
//         <div>
//             <Header/>
//             <div className="events-area section-padding-100">
//                 <div className="container">
//                     <div className="row articles-container">
//                         {/* <!-- Articles Title --> */}
//                         <div className="col-12">
//                             <div className="events-title text-center">
//                                 <h2>Các Bài Viết</h2>
//                             </div>
//                         </div>
//                         { prop.data.map(article => {
//                         return(
//                             <div className="col-12">
//                                 {/* <!-- Single Upcoming Artile Area --> */}
//                                 <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
//                                     {/* <!-- Thumbnail --> */}
//                                     <div className="upcoming-events-thumbnail">
//                                         <img src={article.thumbnail} alt=""/>
//                                     </div>
//                                     {/* <!-- Content --> */}
//                                     <div className="upcoming-events-content d-flex flex-wrap align-items-center">
//                                         <div className="events-text">
//                                             <h4>{article.title}</h4>
//                                             <div className="events-meta">
//                                                 <p><i className="fa fa-calendar" aria-hidden="true"></i>{article.date}</p>
//                                             </div>
//                                             <p>{article.snippet}</p>
//                                         </div>
//                                         <div className="find-out-more-btn">
//                                             <a href={article.url} className="btn crose-btn btn-2">Xem thêm</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>);
//                         })
//                         }
//                     </div>
//                 </div>
//             </div>
//             <Footer/>
//         </div>
//     );
// }

// export default Articles;