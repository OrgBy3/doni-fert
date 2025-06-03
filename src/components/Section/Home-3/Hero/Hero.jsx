"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n.client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
const Hero = () => {

  const { t } = useTranslation("common");
  
  return (
    <section className="main-slider main-slider-three">
      <Swiper
        className="swiper-container thm-swiper__slider"
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        pagination={{
          el: "#main-slider-pagination",
          type: "bullets",
          clickable: true,
        }}
        navigation={{
          nextEl: "#main-slider__swiper-button-next",
          prevEl: "#main-slider__swiper-button-prev",
        }}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
      >
        <div className="swiper-wrapper">
          {/* Start Swiper Slide Single */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{ backgroundImage: "url(/img/landing-1.jpg)" }}
            ></div>

            <div className="container">
              <div className="main-slider-three__single padding">
                <div className="shape1">
                  <img src="/img/shape/slider-v3-shape1.png" alt="" />
                </div>
                <div className="main-slider-three__content text-center">
                  <div className="tagline-box">
                    <div className="icon">
                      <img src="/img/icon/title-marker.png" alt="" />
                    </div>
                    <div className="text">
                      <p>{t("LandingPage")}</p>
                    </div>
                  </div>

                  <div className="title-box">
                    <h2>{t("LandingPage.slogan1")}<br />
                      <span>{t("LandingPage.name")}</span>
                    </h2>
                  </div>

                  <div className="btn-box">

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* End Swiper Slide Single */}

          {/* Start Swiper Slide Single */}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{ backgroundImage: "url(/img/landing-2.jpg)" }}
            ></div>

            <div className="container">
              <div className="main-slider-three__single padding">
                <div className="shape1">
                  <img src="/img/shape/slider-v3-shape1.png" alt="" />
                </div>
                <div className="main-slider-three__content text-center">
                  <div className="tagline-box">
                    <div className="icon">
                      <img src="/img/icon/title-marker.png" alt="" />
                    </div>
                    <div className="text">
                      <p>{t("LandingPage")}</p>
                    </div>
                  </div>

                  <div className="title-box">
                    <h2>{t("LandingPage.slogan2")}<br />
                      <span>{t("LandingPage.name")}</span>
                    </h2>
                  </div>
                  <div className="btn-box">
                  </div>
                </div>
                
              </div>
            </div>
          </SwiperSlide>
          {/* End Swiper Slide Single */}
        </div>
        
        <div className="swiper-pagination" id="main-slider-pagination"></div>

      </Swiper>
    </section>
  );
};

export default Hero;
