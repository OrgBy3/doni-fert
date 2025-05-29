'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCardFour from "~/components/Ui/Cards/BlogCardFour";
import data from '~/public/db/blogDataFour.json'
const Blog = () => {

    return (
        <div>
            <section className="blog-two blog-two--three blog-two--three--blog padding" id="blog-cta">
                <div className="container">
                    <div className="row">
                        {data?.map((item, index) => (
                            <BlogCardFour item={item} key={index}></BlogCardFour>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;