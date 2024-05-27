
import * as React from "react";

const CourseBadge = ({ text }) => (
  <span className="justify-center px-3 py-3 whitespace-nowrap rounded-3xl border border-black border-solid bg-amber-500 bg-opacity-0" role="button" tabIndex="0">
    {text}
  </span>
);

const CourseCard = ({ title, description, colors }) => (
  <section className={`flex flex-col grow pl-8 pt-10 pb-6 mx-auto w-full rounded-[59.894px_0px_59.894px_59.894px] h-[330px] max-w-[345px] ${colors.bg} ${colors.text} max-[600px]:m-0 max-[600px]:mb-5`} tabIndex="0">
    <header className="flex gap-4 justify-between px-px w-full">
      <div className="flex">
        <div className="shrink-0 w-7 h-7 rounded-full border-0 border-white border-solid stroke-[0.257px]" style={{ backgroundColor: colors.circle1 }} />
        <div className="relative left-[-10px] shrink-0 w-7 h-7 rounded-full border-0 border-white border-solid stroke-[0.257px]" style={{ backgroundColor: colors.circle2 }} />
        <div className="relative left-[-20px] shrink-0 w-7 h-7 rounded-full border-0 border-white border-solid stroke-[0.257px]" style={{ backgroundColor: colors.circle3 }} />
      </div>
      <div className="flex relative left-[-20px] gap-2 items-center my-auto whitespace-nowrap">
        <span className="text-sm font-semibold text-black">+154</span>
        <span className="text-xs text-neutral-600">Студентов</span>
      </div>
    </header>
    <header className="mt-9 text-2xl font-semibold text-black">{title}</header>
    <p className="mt-4 mr-5 text-[18] text-neutral-600">{description}</p>
    <footer className="flex justify-between mt-2 font-semibold">
      <span className="my-auto text-sm text-black">Academic courses</span>
      <span className="relative left-[-20px] justify-center items-center px-2.5 pt-1 text-sm text-center text-white whitespace-nowrap bg-black rounded-full h-[30px] w-[30px]">↗</span>
    </footer>
  </section>
);

function MyComponent() {
  return (
    <main className="px-5 mx-auto py-10" style={{maxWidth: '1435px'}}>
      <section className="flex gap-5 max-md:flex-col max-md:gap-0">
        <article className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <header className="flex flex-col self-stretch my-auto text-black max-md:mt-8 max-md:max-w-full">
            <h1 className="text-[54px] font-medium leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">Пример курса</h1>
            <h2 className="mt-9 text-4xl font-light tracking-tight max-md:max-w-full">Узнайте о нашем <br/> лучшем курсе:</h2>
            <div className="flex gap-3 mt-12 text-base flex-wrap max-md:mt-10">
              {['ICT', 'Physical Geology', 'Introduction to Petroleum'].map((badge, index) => (
                <CourseBadge key={index} text={badge} />
              ))}
            </div>
            <a href="#" className="mt-5 text-sm font-semibold text-neutral-500 max-md:max-w-full max-[600px]:mb-5">Смотреть больше</a>
          </header>
        </article>
        <CourseCard
          title="Physical Geology"
          description="Курс, посвященный изучению физических аспектов Земли и процессов, формирующих ее поверхность и внутреннюю структуру."
          colors={{ bg: 'bg-orange-300', text: 'text-black', circle1: '#2563eb', circle2: '#ea580c', circle3: '#0c4a6e' }}
        />
        <figure className="max-md:ml-0 max-xl:hidden">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/498c1add3b26e010e8fe2c454bac2b0978ef1b564c50fc0904cb543dfbe8376a?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" alt="Descriptive text about this image" className="grow shrink-0 max-w-full aspect-[0.7] w-[220px] h-[330px] max-md:mt-5" />
        </figure>
        <CourseCard
          title="ICT"
          description="Курс по изучению современных технологий, включая программирование, базы данных, Python и Power BI."
          colors={{ bg: 'bg-lime-100', text: 'text-black', circle1: '#38bdf8', circle2: '#1e3a8a', circle3: '#f97316' }}
        />
      </section>
    </main>
  );
}

export default MyComponent;
