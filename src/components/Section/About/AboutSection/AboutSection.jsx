"use client";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n.client";
import Link from "next/link";
import CircleTextThree from "~/components/Ui/Components/CircleTextThree";

const AboutSection = () => {

     const { t } = useTranslation("common");

    return (
        <section className="about-three padding">
            <div className="container">
                <div className="row">
                    {/* <!--Start About Three Img--> */}
                    <div className="col-xl-6">
                        <div className="about-three__img">
                            <div className="shape1"><img src="/img/shape/about-v3-shape1.png" alt="" /></div>
                            <div className="about-three__img1 wow fadeInLeft" data-wow-delay=".1s">
                                <img src="/img/about/stone-1.jpg" alt="" />
                            </div>
                            <div className="about-three__img2 wow fadeInRight" data-wow-delay=".1s">
                                <img src="/img/about/stone-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <!--End About Three Img--> */}

                    {/* <!--Start About Three Content--> */}
                    <div className="col-xl-6">
                        <div className="about-three__content">
                            <div className="sec-title-style3">
                                <div className="sub-title">
                                    <div className="icon">
                                        <img src="/img/icon/title-marker-4.png" alt="" />
                                    </div>
                                    <h5>{t("aboutUs.aboutUs")}</h5>
                                </div>
                                <h2>{t("aboutUs.mainTitle")}</h2>
                            </div>
                            <div className="about-three__content-text">
                                <p><b>{t("aboutUs.name")}</b> {t("aboutUs.mainDescription")}</p>
                            </div>

                            <ul className="about-three__content-list">
                                <li>
                                    <div className="icon-box">
                                        <span className="icon-esteemed-company"></span>
                                    </div>

                                    <div className="text-box">
                                        <h3>{t("aboutUs.title1")}</h3>
                                        <p>{t("aboutUs.description1")}</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-enter-product-details"></span>
                                    </div>

                                    <div className="text-box">
                                        <h3>{t("aboutUs.title2")}</h3>
                                        <p>{t("aboutUs.description2")}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--End About Three Content--> */}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;