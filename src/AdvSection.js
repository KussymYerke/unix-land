import * as React from "react";

const AdvantageItemWithImg = ({ src1, src2, src3, src4, text }) => (
  <div className="flex flex-col w-[33%] max-md:w-full rounded-lg">
    <div className="relative flex flex-col w-full aspect-[1.55] overflow-hidden pl-4 pt-2">
      <img loading="lazy" src={src1} alt="" className="object-cover absolute inset-0 w-full h-full rounded-lg" />
      <div className="relative flex gap-1.5 mt-2 pr-1">
        <img loading="lazy" src={src2} alt="" className="shrink-0 w-[150px] max-w-full aspect-[2.13] rounded-lg" />
        <div className="flex flex-col items-center">
          <img loading="lazy" src={src3} alt="" className="w-[123px] aspect-[3.57] rounded-lg" />
          <img loading="lazy" src={src4} alt="" className="w-[123px] mt-1 aspect-[3.7] rounded-lg" />
        </div>
      </div>
      <div className="relative flex justify-between items-start gap-5 px-px mt-2 text-base font-medium text-black max-[600px]:mt-8">
        <div> {text} <br /> ИЛЛЮСТРАЦИИ должны нести смысл </div>
        <div className="self-end flex items-center justify-center px-4 py-2 relative top-[30px] bg-lime-200 rounded-full h-[42px] w-[42px] max-[600px]:mt-12" tabIndex="0">
          →
        </div>
      </div>
    </div>
  </div>
);

const AdvantageItemWithIcon = ({ src, icon, text }) => (
  <div className="flex flex-col w-[33%] max-md:w-full bg-slate-100 rounded-[25px]">
    <div className="relative flex flex-col w-full aspect-[1.48] overflow-hidden">
      {/* <img loading="lazy" src={src} alt="" className="object-cover absolute inset-0 w-full h-full rounded-lg" /> */}
      <div className="relative text-blue-600 ml-10 mt-7">{icon}</div>
      <div className="relative mt-12 text-black ml-7 font-medium">{text} <br /> Иконка должны нести <br/> смысл </div>
    </div>
  </div>
);

function AdvSection() {
  
  return (
    <main className="flex flex-col gap-5 max-w-[1435px] mx-auto mt-20">
      <section className="flex-auto">
        <div className="flex gap-5 items-end max-[600px]:flex-col">
          <div className="flex flex-col w-[72%] max-md:w-full">
            <div className="flex flex-col px-5 max-md:mt-2.5">
              <h1 className="text-6xl font-medium text-black leading-[64px] max-md:text-4xl max-md:leading-[52px]">Блок преимуществ</h1>
              <h2 className="mt-9 text-4xl tracking-tight text-black">Почему выбирают нас:</h2>
              <div className="mt-12 max-md:mt-10">
                <div className="flex max-[600px]:flex-col gap-5">
                  <AdvantageItemWithImg {...advantages[0]} />
                  <AdvantageItemWithIcon {...advantages[1]} />
                  <AdvantageItemWithIcon {...advantages[2]} />
                </div>
              </div>
            </div>
          </div>
          <aside className="flex flex-col w-[28%] max-md:w-full relative top-[-20px]">
            <div className="flex flex-col px-5 mt-10 font-semibold">
              <h3 className="text-5xl text-black">Партнеры:</h3>
              <div className="flex gap-5 items-start mt-5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/69f3f6bded9ea41b683fe1cf65a5f3de9cdf466e5e4a69d8ef1d8aa1de9f9de1?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" alt="Partner 1 Logo" className="shrink-0 w-20 aspect-[1.01] rounded-lg" />
                {/* <div className="text-5xl text-zinc-700">Logo</div>
                <div className="text-4xl leading-8 text-orange-400">
                  <span className="text-orange-600">Logo_</span>tip
                </div> */}
              </div>
              <p className="mt-6 text-base text-neutral-600">Наши надежные партнеры</p>
            </div>
          </aside>
        </div>
      </section>
      {/* <footer className="flex flex-col px-5 mt-10 text-black">
        <div className="text-5xl font-semibold">24\7</div>
        <p className="mt-4 text-lg">Тех.поддержка</p>
        <p className="mt-10 text-base text-neutral-600">Добросовестная команда</p>
      </footer> */}
    </main>
  );
}

export default AdvSection;


const advantages = [
  {
    src1: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa0ce010745ca00498878b86a416658e5cd78012b66ea7cc591de360ae637c8f?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    src2: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5f20273a899b9f8199249aab069e1cc7dd95ed08de8a379dd65ef9a9a079212?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    src3: "https://cdn.builder.io/api/v1/image/assets/TEMP/22d31e9eddc657453e2df3914c6b815c36a1262c7025b63e95298083e008b7c8?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    src4: "https://cdn.builder.io/api/v1/image/assets/TEMP/32fd4caff859b0f6a32e3b2bad33881f84d1c0b89d047c14058ddd25cbcbca6b?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    text: "Текст приемущества",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffd9803155d358474c1e5f24c9aff5cc61c58dfe9e8cc012249f0ac5a2041414?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    icon: "ic",
    text: "Текст приемущества",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffd9803155d358474c1e5f24c9aff5cc61c58dfe9e8cc012249f0ac5a2041414?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    icon: "ic",
    text: "Текст приемущества",
  }
];
