//TODO: Working on this
// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const Articles = (prop) => {
//     return(
//         <div>
//             <Header/>
//             <div class="events-area section-padding-100">
//                 <div class="container">
//                     <div class="row articles-container">
//                         {/* <!-- Articles Title --> */}
//                         <div class="col-12">
//                             <div class="events-title text-center">
//                                 <h2>Các Bài Viết</h2>
//                             </div>
//                         </div>
//                         { prop.data.map(article => {
//                         return(
//                             <div class="col-12">
//                                 {/* <!-- Single Upcoming Artile Area --> */}
//                                 <div class="single-upcoming-events-area d-flex flex-wrap align-items-center">
//                                     {/* <!-- Thumbnail --> */}
//                                     <div class="upcoming-events-thumbnail">
//                                         <img src={article.thumbnail} alt=""/>
//                                     </div>
//                                     {/* <!-- Content --> */}
//                                     <div class="upcoming-events-content d-flex flex-wrap align-items-center">
//                                         <div class="events-text">
//                                             <h4>{article.title}</h4>
//                                             <div class="events-meta">
//                                                 <p><i class="fa fa-calendar" aria-hidden="true"></i>{article.date}</p>
//                                             </div>
//                                             <p>{article.snippet}</p>
//                                         </div>
//                                         <div class="find-out-more-btn">
//                                             <a href={article.url} class="btn crose-btn btn-2">Xem thêm</a>
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