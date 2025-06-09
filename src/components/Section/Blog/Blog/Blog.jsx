
//CHOOSE US SECTION HERE
'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import BlogCardFour from "~/components/Ui/Cards/BlogCardFour"; 
const Blog = () => {

    const { t } = useTranslation('common');
    const blog = t('cards', { returnObjects: true });

    return (
        <div>
            <section className="blog-two blog-two--three blog-two--three--blog padding" id="blog-cta">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h5>
                                <span className="icon-right-arrow-1"></span> {t('why_choose_us')}
                            </h5>
                        </div>
                        <h2>{t('some_reasons')}</h2>
                    </div>
                    <div className="row">
                        {blog?.map((item, index) => (
                            <BlogCardFour item={item} key={index}></BlogCardFour>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;