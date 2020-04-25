//TODO: Working on this
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import articleContent from '../database/articles-content';

const ArticleDetail = ({ match }) => {
    const date = match.params.date;
    const article = articleContent.find(article => article.date === date);
    if (!article) return <h1>Article does not exist</h1>
    return (
        <div>
            <Header />
            <div dangerouslySetInnerHTML={{ __html: '<!-- ##### Blog Content Area Start ##### -->' }} />
            <section class="blog-content-area section-padding-100">
                <div class="container">
                    <div class="row justify-content-between">
                        {/* <!-- Blog Posts Area --> */}
                        <div class="col-12 col-lg-12">
                            <div class="blog-posts-area">

                                {/* <!-- Post Details Area Start --> */}

                                <div class="single-post-details-area">
                                    {/* <!-- <div class="post-thumbnail mb-30 col-12 col-lg-2"><img src="" alt=""></div> --> */}

                                    <div class="post-content col-12 col-lg-auto">
                                        <h2 class="post-title">{article.title}</h2>
                                        <p>{article.body.split('\n').map((item, key) => {
                                            return <span  key={key}>{item}<br /></span >
                                        })}</p>
                                    </div>
                                </div>
                                {/* <!-- Post Details Area End --> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ##### Blog Content Area End ##### --> */}
            <Footer />
        </div>
    );
}

export default ArticleDetail;



// const ArticleDetail = (prop) => {
//     const date = prop.match.params.date;
//     const [getContent, setContent] = useState({});
//     return(
//         <div>
//             <Header/>
//             <section class="blog-content-area section-padding-100">
//                 <div class="container">
//                     <div class="row justify-content-between">
//                         {/* <!-- Blog Posts Area --> */}
//                         <div class="col-12 col-lg-12">
//                             <div class="blog-posts-area">
//                                 <div class="single-post-details-area">
//                                     <div class="post-content col-12 col-lg-auto">
//                                         <h2 class="post-title">{getContent.title}</h2>
//                                         <p>{getContent.content}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Footer/>
//         </div>
//     );
// }
// export default ArticleDetail;