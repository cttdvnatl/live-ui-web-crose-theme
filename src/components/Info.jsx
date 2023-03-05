import React, { useEffect, useState } from "react";
import { useTranslation } from "react-multi-lang";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getWeeklyNews } from "../store/dispatch/dispatch";
import AllSoulsReqPopupModal from "./AllSoulsReqPopupModal";
import ConfirmModal from "./ConfirmModal";

const Info = (props) => {
  const t = useTranslation();

  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState({
    show: false,
    content: {
      header: "",
      message: "",
    },
  });
  const showPopup = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const onSubmit = (content) => {
    setShow(false);
    setShowConfirm({
      show: true,
      content: { ...content },
    });
  };
  const onHide = () => {
    setShow(false);
    setShowConfirm({
      show: false,
      content: {
        header: "",
        message: "",
      },
    });
  };

  useEffect(() => {
    if ((sessionStorage.getItem("token") || props.token) && !props.image) {
      (async () =>
        await props.getImage(
          new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          new Date().toISOString(),
          props.token || sessionStorage.getItem("token")
        ))();
    }
  }, [props]);

  const infoData = [
    {
      path: "/learn-bible",
      imgSrc: "http://hvmatl.net/gallery/img/bg-img/catholic2.jpg",
      imgAlt: "Catechism",
      heading: "info.item1.heading",
      description: "info.item1.description",
      isDisplay: true,
    },
    {
      path: "#",
      imgSrc: "http://hvmatl.net/gallery/img/index/about3.png",
      imgAlt: "Prayer",
      heading: "info.item4.heading",
      description: "",
      isDisplay: false,
      links: [
        {
          icon: "fas fa-praying-hands",
          bgColor: "#6666ff",
          action: (e) => showPopup(e)
        },
      ],
    },
    {
      path: "/weekly-news",
      imgSrc: "http://hvmatl.com/gallery/img/weekly-news/02-26-2023.jpg",
      imgAlt: "Weekly News",
      heading: "info.item2.heading",
      description: "info.item2.description",
      isDisplay: true,
    },
    {
      path: "#",
      imgSrc: "http://hvmatl.net/gallery/img/index/about3.png",
      imgAlt: "Catechism",
      heading: "info.item3.heading",
      description: "",
      isDisplay: true,
      links: [
        {
          icon: "fab fa-facebook-f",
          bgColor: "#4267B2",
          link: "https://www.facebook.com/pg/hvmatl/videos/?ref=page_internal",
        },
        {
          icon: "fab fa-youtube",
          bgColor: "#FF0000",
          link: "https://www.youtube.com/c/HVMATL",
        },
      ],
    },
  ];

  const infoDisplay = (infoList) => {
    return infoList.map((item) => {
      return item.isDisplay ? (
        <div className="col-12 col-md-6 col-lg-3" key={item.heading}>
          <div className="about-us-content mb-100 text-center">
            <Link to={item.path}>
              <img src={item.imgSrc} alt={item.imgAlt} />
            </Link>
            <div className="about-text">
              <Link to={item.path}>
                <h4>{t(item.heading)}</h4>
              </Link>
              {item.description ? (
                <p>{t(item.description)}</p>
              ) : (
                <div className="find-out-more-btn">
                  <p className="text-center">
                    {item.links.map((link) => {
                      if (link.action) {
                        return <a 
                                key={link.icon}
                                style={{fontSize:"36px", color:"#ffffff", backgroundColor: link.bgColor}} 
                                href="/#" 
                                onClick={link.action} 
                                className="crose-btn">
                                    <i className={link.icon}/>
                                </a>
                      } else {
                        return (
                          <a
                            target="_blank"
                            href={link.link}
                            style={{
                              fontSize: "30px",
                              color: "#ffffff",
                              backgroundColor: link.bgColor,
                            }}
                            className="crose-btn my-2"
                          >
                            <i className={link.icon} />
                          </a>
                        );
                      }
                    })}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      );
    });
  };

  return (
    <section className="about-area section-padding-100-0">
      <div className="container">
        <div className="row about-content justify-content-center">
          {infoDisplay(infoData)}
        </div>
      </div>
      {show ? (
        <AllSoulsReqPopupModal
          show={show}
          onSubmit={onSubmit}
          onHide={onHide}
        />
      ) : null}
      {showConfirm.show ? (
        <ConfirmModal
          show={showConfirm.show}
          content={showConfirm.content}
          onHide={onHide}
        />
      ) : null}
    </section>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  image:
    state.weeklyNews.data.length === 0 ? null : state.weeklyNews.data[0].image,
});

const mapDispatchToProps = (dispatch) => ({
  getImage: (from, to, token) => getWeeklyNews(dispatch, from, to, token),
});
export default connect(mapStateToProps, mapDispatchToProps)(Info);
