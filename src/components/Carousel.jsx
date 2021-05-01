import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSlides } from "../store/dispatch/dispatch";
import Carousel from "react-bootstrap/Carousel";
import "../css/carousel.css";

const CustomCarousel = (props) => {
  useEffect(() => {
    if (
      (sessionStorage.getItem("token") || props.token) &&
      !props.data.length
    ) {
      (async () => {
        await props.getSlides(
          "04-05-2020",
          props.token || sessionStorage.getItem("token")
        );
      })();
    }
  }, [props]);

  return (
    <Carousel interval="10000">
      {props.data.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            {item.image !== undefined ? (
              <img
                src={item.image}
                alt={item.image.slice(item.image.lastIndexOf("/") + 1)}
              />
            ) : null}
            <Carousel.Caption>
              <div>
                {item.title.map((title, idx) => (
                  <h1 className="animated fadeInUpShort" key={idx}>
                    {title}
                  </h1>
                ))}
                <div className="animated fadeInUpShort">
                  {item.content !== undefined
                    ? item.content.map((content, i) => (
                        <p
                          key={i}
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                      ))
                    : null}
                </div>
                {item.button !== undefined ? (
                  <a
                    href={item.button.action}
                    className="crose-btn animated fadeInUpShort"
                  >
                    {item.button.title}
                  </a>
                ) : null}
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  data: state.carousel.data,
});

const mapDispatchToProps = (dispatch) => ({
  getSlides: (date, token) => getSlides(dispatch, date, token),
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomCarousel);
