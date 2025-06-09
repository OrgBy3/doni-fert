import Link from "next/link";

const BlogCardFour = ({ item }) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="blog-two__single">
                <div className="blog-two__single-img">
                    <div className="overlay-img__outer">
                        <div className="name">
                            <p>{item?.name}</p>
                        </div>
                    </div>
                    <div className="inner">
                        <img src={item?.img2} alt="" />
                    </div>
                </div>

                <div className="blog-two__single-content">
                    <h2>{item?.title}</h2>
                    <ul className="meta-box">
                        <li>{item?.description}</li>
                    </ul>
                    <ul className="meta-box">
                        <li><b>{item?.category1}</b>{item?.result1}</li>
                    </ul>
                    <ul className="meta-box">
                        <li><b>{item?.category2}</b>{item?.result2}</li>
                    </ul>
                    <ul className="meta-box">
                        <li><b>{item?.category3}</b>{item?.result3}</li>
                    </ul>
                    <ul className="meta-box">
                        <li><b>{item?.category4}</b>{item?.result4}</li>
                    </ul>
                    <ul className="meta-box">
                        <li><b>{item?.category5}</b>{item?.result5}</li>
                    </ul>
                    <ul className="meta-box">
                        <li><b>{item?.category6}</b>{item?.result6}</li>
                    </ul>
                    <ul className="meta-box">
                        <li><b>{item?.category7}</b>{item?.result7}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogCardFour;