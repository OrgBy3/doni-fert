"use client"
import React from 'react';
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import BrandLogo from "~/components/Ui/Logo/BrandLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-one ">
<ScrollToTop smooth top='80' color="white" style={{backgroundColor:"#FFD550", "&:hover": { backgroundColor: "#186265" }}}/>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="copyright-text">
              <p>
                © {currentYear} <Link href="#">DoniFERT</Link> All Rights Reserved.
              </p>
            </div>

            {/* <div className="copyright-menu">
              <ul>
                <li>
                  <Link href="#">
                    Trams &amp; Condition
                    <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Privacy Policy <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Support <span className="icon-right-arrow-5"></span>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
