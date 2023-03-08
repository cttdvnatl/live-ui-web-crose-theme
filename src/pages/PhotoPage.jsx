import React from "react";
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import content from "../database/photos.json";
import { Link } from "react-router-dom";

const PhotoPage = (prop) => {
//   useEffect(() => {
//     const loadImage = (image) => {
//       return new Promise((resolve, reject) => {
//         const loadImg = new Image();
//         loadImg.src = image.url;
//         // wait 2 seconds to simulate loading time
//         loadImg.onload = () =>
//           setTimeout(() => {
//             resolve(image.url);
//           }, 2000);

//         loadImg.onerror = (err) => reject(err);
//       });
//     };
// 
//     Promise.all(IMAGES.map((image) => loadImage(image)))
//       .then(() => setImgsLoaded(true))
//       .catch((err) => console.log("Failed to load images", err));
//   }, []);
  console.log(content)
  return (
    <div>
      <Header />
      <section class="mt-5">
        <h2 className="section-heading">Thư Viện Hình Ảnh</h2>
        <div className="container">
          {content.map((item, idx) => {
            return (
              <div
                className="row single-upcoming-events-area d-flex flex-wrap align-items-center"
                key={idx}
              >
                <div className="upcoming-events-thumbnail">
                  <img src={item.image} alt="" />
                </div>
                <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                  <div className="events-text">
                    <h4>{item.title}</h4>
                    <div className="events-meta">
                      <a href="/">
                        <i className="fa fa-calendar" aria-hidden="true" />
                        {item.date}
                      </a>
                    </div>
                    <p>{item.body}</p>
                  </div>
                  <div className="find-out-more-btn">
                    <Link to={item.pdf} className="crose-btn btn-2">
                      Xem thêm
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p>&nbsp;</p>
      </section>
      <Footer />
    </div>
  );
};
export default PhotoPage;
