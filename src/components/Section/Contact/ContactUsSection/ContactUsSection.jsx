'use client';
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n.client";

const ContactUsSection = () => {

    const { t } = useTranslation("common");

    return (
        <section className="contact-page padding">
            <div className="shape2 float-bob-y"><img src="/img/shape/contact-page-shape2.png" alt="" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="contact-page__contact-info">
                            <div className="sec-title-style3">
                                <div className="sub-title">
                                    <div className="icon">
                                        <img src="/img/icon/title-marker-4.png" alt="" />
                                    </div>
                                    <h5>{t("contactUs.getInTouch")}</h5>
                                </div>
                                <h2>{t("contactUs.contactUs")}</h2>
                            </div>

                            <ul>
                                <li>
                                    <div className="icon-box">
                                        <span className="icon-telephone-call"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>{t("contactUs.callUs")}</p>
                                        <h2><Link href="https://wa.me/+38344114081" target="_blank">{t("contactUs.phone")}</Link></h2>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-location"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>{t("contactUs.location")}</p>
                                        <h2><Link href="https://maps.app.goo.gl/Paq1YrnGbbjKMCSF9" target="_blank">{t("contactUs.actualLocation")}</Link></h2>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-email"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>{t("contactUs.email")}</p>
                                        <h2>
                                            <ul>
                                                <li>
                                                    <Link href="mailto:donifert@gmail.com" passHref legacyBehavior>
                                                <a target="_blank" rel="noopener noreferrer">{t("contactUs.actualEmail1")}</a>
                                            </Link> 
                                                </li>
                                                <li>
                                                    <Link href="mailto:donifert@hotmail.com" passHref legacyBehavior>
                                                <a target="_blank" rel="noopener noreferrer">{t("contactUs.actualEmail2")}</a>
                                            </Link>
                                                </li>
                                            </ul>
                                        </h2>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-time"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>{t("contactUs.openingTime")}</p>
                                        <h2>{t("contactUs.workingDays")}</h2>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="contact-page__form-box">
                            <div className="title">
                                <h2>{t("contactUsForm.title")}</h2>
                            </div>

                            <form id="contact-form"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = e.target;
                                    const name = form.name.value;
                                    const email = form.email.value;
                                    const number = form.number.value;
                                    const company = form.company.value;
                                    const message = form.message.value;

                                    const text = `Full Name: ${name}%0AEmail: ${email}%0APhone: ${number}%0ACompany: ${company}%0AMessage: ${message}`;
                                    const phoneNumber = '38344114081';

                                    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
                                    }}
                                >
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder={t("contactUsForm.name")} name="name" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="email" placeholder={t("contactUsForm.email")} name="email" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="number" placeholder={t("contactUsForm.phone")} name="number" required/>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder={t("contactUsForm.company")} name="company" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <textarea name="message" placeholder={t("contactUsForm.message")}></textarea>
                                        </div>
                                        <div className="contact-page__btn">
                                            <button type="submit" className="thm-btn" data-loading-text="Please wait...">
                                                <span className="txt">{t("contactUsForm.SendMessage")}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p className="ajax-response mb-0"></p>

                            <div className="contact-page__form-box-text">
                                <p><span>{t("contactUsForm.note")}</span>{t("contactUsForm.noteText")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;