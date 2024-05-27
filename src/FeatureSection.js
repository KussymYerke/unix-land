import React from 'react';
import Slider from 'react-slick';
import FeatureCard from './Feature';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import feat1 from './assets/feat-1.svg';
import feat2 from './assets/feat-2.svg';
import feat3 from './assets/feat-3.svg';

const features = [
  {
    title: 'Разделение на модули:',
    description: 'Гибкая система организации <br/> пользователей и материалов позволяет создать персонализированные образовательные планы.',
    image: feat2,
  },
  {
    title: 'Умная отчетность:',
    description: 'Получайте детальные отчеты о прогрессе каждого участника, чтобы оценить их успех и поддерживать развитие.',
    image: feat3,
  },
  {
    title: 'Умная отчетность:',
    description: 'Получайте детальные отчеты о прогрессе каждого участника, чтобы оценить их успех и поддерживать развитие.',
    image: feat3,
  },
  {
    title: 'Умная отчетность:',
    description: 'Получайте детальные отчеты о прогрессе каждого участника, чтобы оценить их успех и поддерживать развитие.',
    image: feat3,
  },
  {
    title: 'Умная отчетность:',
    description: 'Получайте детальные отчеты о прогрессе каждого участника, чтобы оценить их успех и поддерживать развитие.',
    image: feat3,
  },
];

const FeatureSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="bg-gray-900 text-white py-12">
      <div>
        <div className="mx-auto px-6" style={{ maxWidth: '1435px' }}>
          <h2 className="text-[54px] font-medium">Возможности платформы</h2>
          <p className="mt-2 text-[34px] font-medium text-[#77FF85]">Узнайте, что делает <br /> <span className='text-[#fff]'>Uni-X.kz</span> особенным:</p>
        </div>
        <div className="mt-8 overflow-x-hidden overflow-y-auto">
          <Slider className='relative lg:left-[50px] xl:left-[300px] max-[600px]:left-0' {...settings}>
            <div className="relative top-[15px] flex-col pl-8 font-medium max-w-[515px] h-[551px] max-md:px-5 max-[600px]:max-w-[300px] max-[600px]:max-h-[320px]">
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f21b6504d63d4ea29cd976e8858ad9b2f96e4f7f96a1e50630ce850c19d791c?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" 
                alt="" 
                className="object-cover absolute inset-0 size-full" 
              />
              <h2 className="relative mt-60 ml-6 text-3xl leading-10 text-white max-md:mt-10 max-md:ml-2.5 max-[600px]:mt-[225px]">
                Адаптивное обучение:
              </h2>
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f9df09e9688c32fbdd303c6b7e0725fad0d7c5c35e336219fd97ca0b15cee2?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" 
                alt="" 
                className="mt-16 border-2 border-solid aspect-[100] border-zinc-800 stroke-[1.5px] stroke-zinc-800 w-[87px] max-md:mt-10" 
              />
              <p className="relative mt-7 text-[22px] leading-7 font-medium text-black">
                Наши курсы адаптируются под потребности каждого участника, обеспечивая оптимальный опыт обучения.
              </p>
            </div>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            ))} 
          </Slider>
        </div>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray' }}
      onClick={onClick}
    />
  );
};

export default FeatureSection;
