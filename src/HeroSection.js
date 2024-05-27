import * as React from "react";
import heroBg from './hero-bg.png';

function MoreInfoButton() {
  return (
    <button
      className="flex gap-1 self-start py-1 pr-7 pl-3 md:pr-3 mt-9 text-lg font-medium text-center text-white border-2 border-blue-600 border-solid backdrop-blur-[7px] bg-zinc-300 bg-opacity-10 leading-[75.06px] rounded-[44px] max-md:pr-5"
      tabIndex="0"
    >
      <span className="grow justify-center md:px-7  px-14 pb-0 mb-0.5 bg-blue-600 rounded-[44px] w-fit max-md:px-5">
        Узнать больше
      </span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d998596ed26aa6f3f1faa33e862e80dcd9dff920e1d39a61c57413eda6b29ea3?apiKey=f0565c05649044c09c5a9cc7ba5651cb&"
        alt=""
        className="shrink-0 my-auto aspect-square w-[47px]"
      />
    </button>
  );
}

function CreativeThinkingCard() {
  return (
    <figure className="flex flex-col pt-3 pr-4 pl-3 pb-9 text-xl font-semibold text-black whitespace-nowrap bg-orange-300 rounded-3xl xl:w-[160px] absolute top-[25%] left-[10%] transition-all duration-300 group-hover:top-[20%] group-hover:left-[12%] lg:w-[120px] max-[600px]:p-3 max-[600px]:left-[5%] max-[600px]:top-[15%]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/158728c2bf9ff316bc4136b26d08f485526c24f8a8ea7c00492e8b6a4820f544?apiKey=f0565c05649044c09c5a9cc7ba5651cb&"
        alt="Creative icon"
        className="aspect-square w-[39px] max-[600px]:w-[24px]"
      />
      <figcaption className="mt-3 w-full xl:text-[20px] lg:text-[16px] max-[600px]:text-[14px]">
        Креативное <br /> мышление
      </figcaption>
    </figure>
  );
}

function MultimediaMaterials() {
  return (
    <section 
      className="flex gap-0 px-2 py-3.5 text-lg font-medium text-black whitespace-nowrap bg-green-300 rounded-lg absolute top-[50%] left-[50%] translate-x-[50%] translate-y-[-100%] transition-all duration-300 group-hover:top-[55%] group-hover:left-[55%] md:text-[16px]
      max-[600px]:text-[14px] max-[600px]:p-1 max-[600px]:left-[50%] max-[600px]:top-[55%] max-[600px]:translate-x-[20%] 
      "
    >
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/90a7682197509a411967d8fcfb8b5b46f2097aed4a3a2804380fe41e47b543d1?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" className="shrink-0 w-10 aspect-[1.03] md:w-8 max-[600px]:w-6" alt="Multimedia Materials Icon" />
      <div>Мультимедийные <br /> материалы</div>
    </section>
  );
}

function CareerText() {
  return (
    <div className="absolute top-[60%] right-[20%] text-xl text-black transition-all duration-300 group-hover:top-[65%] group-hover:right-[15%] group-hover:text-2xl  font-thin max-[600px]:text-[14px] max-[600px]:group-hover:text-xl max-[600px]:right-[15%] max-[600px]:group-hover:right-[0%]">
      Улучшите <br/> свои навыки, <br /> чтобы продвинуться <br/> по карьерной <br /> лестнице
    </div>
  );
}

function Hero() {
  return (
    <main className="flex flex-col max-w-[1435px] mx-auto pb-40">
      <section className="flex flex-col md:flex-row justify-between items-center pl-11 text-2xl leading-8 text-black max-md:pl-5 w-full">
        <div className="flex-1">
          <h1 className="xl:text-7xl md:text-5xl font-semibold leading-[88px] max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
            Добро пожаловать <br /> на Uni-X.kz! <br />
          </h1>
          <p className="mt-24 tracking-tight md:mt-8 md:text-[20px] max-md:mt-10 max-md:max-w-full lg:w-[90%]">
            Платформа для современного образования <br />
          </p>
          <p className="mt-9 tracking-tight md:text-[20px] max-md:max-w-full lg:w-[90%] hero-descrip max-[600px]:text-[16px]">
            Наши курсы помогут вашей команде, студентам или ученикам раскрыть
            свой потенциал и достичь новых высот в обучении и развитии. <br />
          </p>
          <MoreInfoButton />
        </div>
        <div className="flex-1 mt-10 md:mt-0 relative group lg:left-[-30px] max-[600px]:left-[-30px]">
          <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover" />
          <CreativeThinkingCard />
          <MultimediaMaterials />
          <CareerText />
        </div>
      </section>
    </main>
  );
}

export default Hero;
