import Footer from "~/components/Section/Common/Footer";
import Header, { HeaderThree } from "~/components/Section/Common/Header";
import About from "~/components/Section/Home-1/About";
import Blog from "~/components/Section/Blog/Blog";
import ChooseUs from "~/components/Section/Home-1/ChooseUs/ChooseUs";
import Cta from "~/components/Section/Contact/ContactUsSection";
import Fact from "~/components/Section/Home-1/Fact/Fact";
import Faq from "~/components/Section/Home-1/Faq/Faq";
import Hero from "~/components/Section/Home-3/Hero";
import RecentProjects from "~/components/Section/Home-1/RecentProjects";
import RequestService from "~/components/Section/Home-1/RequestService/RequestService";
import Service from "~/components/Section/Home-1/Service";
import Team from "~/components/Section/Home-1/Team";
import Testimonial from "~/components/Section/Home-1/Testimonial";
import Video from "~/components/Section/Home-1/Video";
import WorkingProcess from "~/components/Section/Home-1/WorkingProcess/WorkingProcess";
import ContactUsSection from "~/components/Section/Contact/ContactUsSection";
import AboutSection from "~/components/Section/About/AboutSection";
import FaqSection from "~/components/Section/Home-2/FaqSection/FaqSection";
import Faq1 from "~/components/Section/Home-3/Faq/Faq1";

export default function Home() {
  return (
    <div className="body-dark-bg homeOne">
      <div className="fix">
        <HeaderThree />

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="products">
          <Faq1 />
        </section>

        <section id="why-us">
          <Blog />
        </section>

        <section id="facts">
          <Fact />
        </section>

        <section id="contact">
          <ContactUsSection />
        </section>

        <Footer />
      </div>
    </div>
  );
}
