
//BLOG SECTION HERE
'use client';
import { useTranslation } from 'react-i18next';
import ServiceCardTwo from '~/components/Ui/Cards/ServiceCardTwo';

const ChooseUs = () => {
  const { t } = useTranslation('common');
  const cards = t('blog', { returnObjects: true });

  return (
    <section className="choose-us-one padding">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sub-title">
            <h5>
              <span className="icon-right-arrow-1"></span> {t('blogTittle')}
            </h5>
          </div>
          <h2>{t('blogTittle')}</h2>
        </div>
        <div className="row">
          {cards.map((item, index) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".1s"
              key={index}
            >
              <ServiceCardTwo item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
