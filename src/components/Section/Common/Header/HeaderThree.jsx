"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n.client"; // adjust if needed
import Select from "react-select";

const options = [
  { value: "en", label: "EN" },
  { value: "al", label: "AL" },
];

const HeaderThree = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isOpenSideMenu, setIsOpenSideMenu] = useState(false);
  const [home, setHome] = useState(false);
  const [service, setService] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  
  const initialSelected = options.find((option) => option.label === "EN");

  const [selected, setSelected] = useState(initialSelected);
  const { t } = useTranslation("common");

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    i18n.changeLanguage(selectedOption.value); 
  };    

  const mobileMenuOpen = () => {
    setMobileMenu(true);
    setIsOverlayActive(true);
    document.body.classList.add("disable-scroll");
  };

  const mobileMenuClose = () => {
    setMobileMenu(false);
    setIsOverlayActive(false);
    document.body.classList.remove("disable-scroll");
  };
  const serviceHandler = () => {
    setService(!service);
  };
  const pageHandler = () => {
    setPage(!page);
  };
  const [scrollClassName, setScrollClassName] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollClassName("sticky-menu");
      } else {
        setScrollClassName("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Search Popup
  const [isActive, setIsActive] = useState(false);

  const togglePopup = () => {
    setIsActive(!isActive);
    document.body.classList.toggle("locked");
  };
  function preloader() {
    // Implementation of the preloader function
  }
  if (typeof window !== "undefined") {
    window.onload = () => {
      preloader();
    };
  }

  return (
    <header className="main-header main-header-three">
      <div id="sticky-header" className={`menu-area ${scrollClassName}`}>
        <div className="menu-area__inner">
          <div className="mobile-nav-toggler" onClick={mobileMenuOpen}>
            <i className="fas fa-bars"></i>
          </div>
          <div className="menu-wrap">
            <nav className="menu-nav">
              <div className="container">
                <div className="main-header-three__inner">
                  <div className="logo-box-three">
                    <Link href="/">
                      <img src="/img/resource/logo-6.png" alt="Logo" />
                    </Link>
                  </div>

                  <div className="main-header-three__top">
                    <div
                      className="main-header-three__top-pattern"
                      style={{
                        backgroundImage:
                          "url(/img/pattern/header-v3-pattern.png)",
                      }}
                    ></div>
                    <div className="main-header-three__top-inner">
                      <div className="main-header-three__top-left">
                        <div className="header-contact-info-style2">
                          <ul className="clearfix">
                            <li>
                              <div className="icon-box">
                                <span className="icon-pin"></span>
                              </div>
                              <div className="text-box">
                                <p>{t("location")}</p>
                                <h4>{t("actualLocation")}</h4>
                              </div>
                            </li>

                            <li>
                              <div className="icon-box">
                                <span className="icon-paper-plane"></span>
                              </div>
                              <div className="text-box">
                                <p>{t("email")}</p>
                                <h4>
                                  <Link href="mailto:yourmail@email.com">
                                    {t("actualEmail")}
                                  </Link>
                                </h4>
                              </div>
                            </li>

                            <li>
                              <div className="icon-box">
                                <span className="icon-out-call"></span>
                              </div>
                              <div className="text-box">
                                <p>{t("phone")}</p>
                                <h4>
                                  <Link href="tel:123456789">
                                    {t("phoneNumber")}
                                  </Link>
                                </h4>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-header-three__bottom clearfix">
                    <div className="main-header-three__bottom-left">
                      <div className="navbar-wrap main-menu">
                        <ul className="navigation">
                          <li className="active menu-item-has-children">
                            <Link href="#">{t("nav.home")}</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/">Home One</Link>
                              </li>
                              <li>
                                <Link href="home-2">Home Two</Link>
                              </li>
                              <li>
                                <Link href="home-3">Home Three</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="about">{t("nav.about")}</Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link href="#">{t("nav.services")}</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="services ">12313</Link>
                              </li>
                              <li>
                                <Link href="road-transport ">
                                  Road Transport
                                </Link>
                              </li>
                              <li>
                                <Link href="cargo-transport ">
                                  Cargo Transport   
                                </Link>
                              </li>
                              <li>
                                <Link href="ocean-freight ">Ocean Freight</Link>
                              </li>
                              <li>
                                <Link href="rail-transport ">
                                  Rail Transport
                                </Link>
                              </li>
                              <li>
                                <Link href="warehousing ">Warehousing</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link href="#">Pages</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="team ">Team</Link>
                              </li>
                              <li>
                                <Link href="team-details ">Team Details</Link>
                              </li>
                              <li>
                                <Link href="projects ">Projects</Link>
                              </li>
                              <li>
                                <Link href="project-details ">
                                  Project Details
                                </Link>
                              </li>
                              <li>
                                <Link href="error ">404</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <Link href="#">Blog</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link href="blog ">Blog</Link>
                              </li>
                              <li>
                                <Link href="blog-standard ">Blog standard</Link>
                              </li>
                              <li>
                                <Link href="blog-details ">Blog Details</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="contact ">{t("nav.contact")}</Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="main-header-three__bottom-right">
                     
                      <div
                        className="navSidebar-button-box"
                        onClick={() => setIsOpenSideMenu(true)}
                      >
                      </div>
                      <div className="main-header__language-switcher">
                        <Select
                          className="selectmenu wide"
                          options={options}
                          value={selected}
                          onChange={handleChange}
                          isSearchable={false}
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              height: "45px",
                              fontSize: "14px",
                            }),
                            option: (provided) => ({
                              ...provided,
                              color: "#fff",
                              backgroundColor: "#FF5E15",
                            }),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* <!-- Mobile Menu  --> */}
        <div className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""}`}>
          <nav className="menu-box">
            <div
              className={`close-btn ${mobileMenu ? "rotate" : ""}`}
              onClick={mobileMenuClose}
            >
              <i className="fas fa-times"></i>
            </div>
            <div className="nav-logo">
              <Link href="/">
                <img src="/img/resource/mobile-menu-logo3.png" />
              </Link>
            </div>
            <div className="menu-outer">
              <ul className="navigation">
                <li className="active menu-item-has-children">
                  <Link href="#">Home</Link>
                  <ul
                    className={`sub-menu ${
                      home ? "sub-menu-visible test" : "sub-menu-hidden"
                    }`}
                    style={{ zIndex: `${home ? "0" : ""}` }}
                  >
                    <li
                      style={{
                        borderTop: `${
                          home ? "1px solid #0000001a" : "1px solid #0000001a"
                        }`,
                      }}
                    >
                      <Link href="/">Home One</Link>
                    </li>
                    <li
                      style={{
                        borderTop: `${
                          home ? "1px solid #0000001a" : "1px solid #0000001a"
                        }`,
                      }}
                    >
                      <Link href="home-2">Home Two</Link>
                    </li>
                    <li
                      style={{
                        borderTop: `${
                          home ? "1px solid #0000001a" : "1px solid #0000001a"
                        }`,
                      }}
                    >
                      <Link href="home-3">Home Three</Link>
                    </li>
                  </ul>
                  <div className="dropdown-btn" onClick={() => setHome(!home)}>
                    <span className="fas fa-angle-down"></span>
                  </div>
                </li>
                <li
                  style={{
                    marginTop: `${home ? "0px" : "-134px"}`,
                    zIndex: `${home ? "999" : ""}`,
                    transition: "0.3s linear",
                  }}
                >
                  <Link href="about">About</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="#">Services</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="services">Services</Link>
                    </li>
                    <li>
                      <Link href="road-transport">Road Transport</Link>
                    </li>
                    <li>
                      <Link href="cargo-transport">Cargo Transport</Link>
                    </li>
                    <li>
                      <Link href="ocean-freight">Ocean Freight</Link>
                    </li>
                    <li>
                      <Link href="rail-transport">Rail Transport</Link>
                    </li>
                    <li>
                      <Link href="warehousing">Warehousing</Link>
                    </li>
                  </ul>
                  <div className="dropdown-btn" onClick={serviceHandler}>
                    <span className="fas fa-angle-down"></span>
                  </div>
                  {/* onClick={()=>setService(!service)} */}
                </li>
                <li
                  className="menu-item-has-children"
                  style={{
                    marginTop: `${service ? "0px" : "-314px"}`,
                    zIndex: `${service ? "0" : "999"}`,
                    transition: "0.3s linear",
                  }}
                >
                  <Link href="#">Pages</Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="team">Team</Link>
                    </li>
                    <li>
                      <Link href="team-details">Team Details</Link>
                    </li>
                    <li>
                      <Link href="projects">Projects</Link>
                    </li>
                    <li>
                      <Link href="project-details">Project Details</Link>
                    </li>
                    <li>
                      <Link href="error">404</Link>
                    </li>
                  </ul>
                  <div className="dropdown-btn" onClick={pageHandler}>
                    <span className="fas fa-angle-down"></span>
                  </div>
                  {/* onClick={()=>setPage(!page)} */}
                </li>
                <li
                  className="menu-item-has-children"
                  style={{
                    marginTop: `${page ? "0px" : "-224px"}`,
                    zIndex: `${page ? "0" : "99999"}`,
                    transition: "0.3s linear",
                  }}
                >
                  <Link href="#">Blog</Link>
                  <ul
                    className="sub-menu"
                    style={{ opacity: `${blog ? "1" : "0"}` }}
                  >
                    <li>
                      <Link href="blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="blog-standard">Blog standard</Link>
                    </li>
                    <li>
                      <Link href="blog-details">Blog Details</Link>
                    </li>
                  </ul>
                  <div className="dropdown-btn" onClick={() => setBlog(!blog)}>
                    <span className="fas fa-angle-down"></span>
                  </div>
                </li>
                <li
                  style={{
                    marginTop: `${blog ? "0px" : "-134px"}`,
                    zIndex: `${blog ? "99999" : "99999"}`,
                    transition: "0.3s linear",
                  }}
                >
                  <Link href="contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div
              className="contact-info"
              style={{ backgroundColor: "white", zIndex: "99999" }}
            >
              <div className="icon-box" Name>
                <span className="icon-telephone-handle-silhouette"></span>
              </div>
              <p>
                <Link href="tel:123456789">(629) 555-0129</Link>
              </p>
            </div>
            <div
              className="social-links"
              style={{ backgroundColor: "white", zIndex: "99999" }}
            >
              <ul
                className="clearfix list-wrap"
                style={{ backgroundColor: "white", zIndex: "99999" }}
              >
                <li>
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          className={` ${mobileMenu ? "menu-backdrop" : ""}`}   
          onClick={mobileMenuClose}
        ></div>
        {isOverlayActive && (
          <div className="overlay" onClick={mobileMenuClose}></div>
        )}
        {/* <!-- End Mobile Menu --> */}
      </div>
     

      <div
        className={`xs-sidebar-group info-group info-sidebar ${
          isOpenSideMenu ? "isActive" : ""
        }`}
      >
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div
              className="widget-heading"
              onClick={() => setIsOpenSideMenu(false)}
            >
              <Link href="#" className="close-side-widget">
                X
              </Link>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="logo">
                    <Link href="/">
                      <img src="/img/resource/logo-1.png" alt="" />
                    </Link>
                  </div>
                  <div className="content-box">
                    <h4>About Us</h4>
                    <div className="inner-text">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                      </p>
                    </div>
                  </div>

                  <div className="form-inner">
                    <h4>Get a free quote</h4>
                    <form action="/" method="post">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Message..."
                        ></textarea>
                      </div>
                      <div className="form-group message-btn">
                        <button
                          className="thm-btn"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span className="txt">Submit Now</span>
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="sidebar-contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                      <li>
                        <span className="icon-pin"></span> 88 broklyn street,
                        New York
                      </li>
                      <li>
                        <span className="icon-call"></span>
                        <Link href="tel:123456789">+1 555-9990-153</Link>
                      </li>
                      <li>
                        <span className="fa fa-envelope"></span>
                        <Link href="mailto:info@example.com">
                          info@example.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="thm-social-link1">
                    <ul className="social-box">
                      <li className="facebook">
                        <Link href="#">
                          <i className="icon-facebook" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="twitter">
                        <Link href="#">
                          <i className="icon-twitter" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="linkedin">
                        <Link href="#">
                          <i className="icon-instagram" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li className="gplus">
                        <Link href="#">
                          <i
                            className="fab fa-pinterest"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderThree;
