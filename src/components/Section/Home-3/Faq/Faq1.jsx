
//SERVICE SECTION HERE
'use client';
import { useState } from "react";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n.client";

const Faq1 = () => {

     const { t } = useTranslation("common");

    return (
            <section className="faq-three padding">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h5>
                                <span className="icon-right-arrow-1"></span> {t('serviceTittle')}
                            </h5>
                        </div>
                        <h2>{t('serviceProducts')}</h2>
                    </div>

                    <div className="row">
                        {/* Start Faq Three Fa */}
                        <div className="col-xl-6">
                            <div className="faq-three__faq">
                                <Accordion className='accordion-two accordion-three'>
                                    <Accordion.Item eventKey="0" >
                                        <Accordion.Header >

                                            <h2>
                                                <span>01. </span>{t('serviceProduct1')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>

                                                
                                            <p>
                                                 {t('serviceProductDescription1')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header >

                                            <h2>
                                                <span>02. </span>{t('serviceProduct2')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>  
                                                {t('serviceProductDescription2')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header >

                                            <h2>
                                                <span>03. </span>{t('serviceProduct3')}  
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                               {t('serviceProductDescription3')} 
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header >

                                            <h2>
                                                <span>04. </span> {t('serviceProduct4')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                                {t('serviceProductDescription4')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header >

                                            <h2>
                                                <span>05. </span> {t('serviceProduct5')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                               {t('serviceProductDescription5')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header >

                                            <h2>
                                                <span>06. </span>{t('serviceProduct6')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                               {t('serviceProductDescription6')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header >

                                            <h2>
                                                <span>07. </span> {t('serviceProduct7')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                               {t('serviceProductDescription7')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                     
                         <div className="col-xl-6">
                            <div className="faq-three__faq">
                                <Accordion className='accordion-two accordion-three'>
                                    <Accordion.Item eventKey="7" >
                                        <Accordion.Header >

                                            <h2>
                                                <span>08. </span>{t('serviceProduct8')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                               {t('serviceProductDescription8')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header >

                                            <h2>
                                                <span>09. </span>{t('serviceProduct9')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                                {t('serviceProductDescription9')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="9">
                                        <Accordion.Header >

                                            <h2>
                                                <span>10. </span> {t('serviceProduct10')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                                {t('serviceProductDescription10')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="10">
                                        <Accordion.Header >

                                            <h2>
                                                <span>11. </span> {t('serviceProduct11')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                               {t('serviceProductDescription11')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="11">
                                        <Accordion.Header >

                                            <h2>
                                                <span>12. </span>{t('serviceProduct12')} 
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                               {t('serviceProductDescription12')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="12">
                                        <Accordion.Header >

                                            <h2>
                                                <span>13. </span> {t('serviceProduct13')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                                {t('serviceProductDescription13')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="13">
                                        <Accordion.Header >

                                            <h2>
                                                <span>14. </span> {t('serviceProduct14')}
                                            </h2>

                                        </Accordion.Header>
                                        <Accordion.Body>


                                            <p>
                                                {t('serviceProductDescription14')}
                                            </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        {/* End Faq Three Vide */}
                    </div>
                </div>
            </section>
    );
};

export default Faq1;