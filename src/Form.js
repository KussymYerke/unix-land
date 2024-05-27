import * as React from "react";
import {useState} from "react";

function ContactInfo({ label, value }) {
  return (
    <p>
      <span className="text-2xl text-white">{label}:</span>
      <br />
      <span className="text-white">{value}</span>
    </p>
  );
}

function ImageWithAlt({ src, alt }) {
  return <img loading="lazy" src={src} alt={alt} className="mt-7 w-full border-2 border-solid border-zinc-300 stroke-[2px] stroke-zinc-300 max-md:max-w-full" />;
}

const Form = () => {
    const countries = [
        { code: "KZ", name: "Казахстан", dialCode: "+7" },
        { code: "RU", name: "Россия", dialCode: "+7" },
        { code: "US", name: "США", dialCode: "+1" },
        { code: "GB", name: "Великобритания", dialCode: "+44" },
      ];

    const [phoneCode, setPhoneCode] = useState("+7");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handlePhoneCodeChange = (event) => {
        let value = event.target.value;
        if (value.charAt(0) !== '+') {
          value = '+' + value; // Ensure plus sign is always present
        }
        if (value.length <= 3 && /^[+]\d{0,2}$/.test(value)) {
          setPhoneCode(value);
        }
      };

    const handlePhoneNumberChange = (event) => {
        let value = event.target.value.replace(/\D/g, "");
        if (value.length > 10) {
        value = value.slice(0, 10); 
        }
        const formattedNumber = value.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
        setPhoneNumber(formattedNumber);
    };

  return (
    <section className="max-w-[1435px] mx-auto mt-10 relative">
      <div>
        <div className="flex justify-center max-md:flex-col max-md:gap-0">
         <div className="flex flex-col">
          <div className="flex flex-col w-[100%] max-md:w-full bg-[#292D32] rounded-br-[0px] pb-[30px] pl-[30px] pt-[30px] pr-[50px] rounded-[24px]">
              <header className="flex flex-col px-5 text-2xl font-medium text-white leading-[75px] max-md:mt-10">
                <h1 className="lg:text-4xl xl:text-6xl capitalize max-md:text-4xl max-md:leading-[61px]">
                  Свяжитесь <br />
                  с нами: <br />
                </h1>
                <h2 className="mt-10 lg:text-[24px] xl:text-[32px] leading-[74.88px] max-md:mt-4">Контактная информация:</h2>
                <div className="mt-4 max-md:mt-10">
                  <ContactInfo label="Адрес" value="[адрес]" />
                  <ContactInfo label="Телефон" value="[номер телефона]" />
                  <ContactInfo label="Электронная почта" value="[электронная почта]" />
                </div>
              </header>
            </div>
            <footer className="mt-10 ml-10 text-blue-600 capitalize text-[22px] leading-[341%] max-md:mt-10">
              All right reserved by Uni-x.kz
            </footer>
         </div>
          <section className="flex flex-col w-[55 %] pr-[50px] max-md:w-full relative pt-10 top-16 left-0 bg-[#292D32] lg:h-[660px] xl:h-[700px] rounded-r-[24px]">
            <form className="flex flex-col grow pl-20  w-full rounded-3xl pb-20 bg-[#FBFBFB] max-md:px-5 pt-10 max-md:max-w-full">
              <label htmlFor="fullName" className="text-3xl font-light leading-10 text-black max-md:max-w-full">Полное имя:</label>
              <input id="fullName" type="text" className="mt-12 bg-zinc-50 text-base font-light leading-10 text-neutral-500 max-md:mt-10 max-md:max-w-full" placeholder="Ваша Фамилия Имя Отчество" aria-label="Full Name" />
              <label htmlFor="email" className="mt-12 text-3xl font-light leading-10 text-black max-md:mt-10 max-md:max-w-full">Email:</label>
              <input id="email" type="email" className="mt-12 bg-zinc-50 text-base font-medium leading-10 text-neutral-500 max-md:mt-10 max-md:max-w-full" placeholder="Ваш email" aria-label="Email" />
              <div className="flex gap-5 mt-12 ml-3.5 max-w-full text-3xl font-light leading-10 text-black whitespace-nowrap w-[393px] max-md:mt-10 max-md:ml-2.5">
                <label htmlFor="country" className="flex-auto font-light">Страна:</label>
                <label htmlFor="phone" className="flex-auto font-light">Телефон:</label>
              </div>

              <div className="flex gap-5 items-center mt-10 text-2xl font-medium leading-10 text-zinc-800 max-md:flex-wrap max-md:max-w-full">
                <select id="country" className="flex-auto bg-zinc-50 p-2 text-base font-medium leading-10 text-neutral-500 max-md:mt-2 max-md:max-w-full">
                  {countries.map((country) => (
                    <option key={country.code} value={country.dialCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <input
                  id="phoneCode"
                  type="text"
                  value={phoneCode}
                  onChange={handlePhoneCodeChange}
                  className="w-20 p-2 text-base font-medium leading-10 bg-zinc-50 text-neutral-500 max-md:mt-2 max-md:max-w-full"
                  placeholder="+7"
                  aria-label="Phone Code"
                />
                <input
                  id="phoneNumber"
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="flex-auto p-2 text-base bg-zinc-50 font-medium leading-10 text-neutral-500 max-md:mt-2 max-md:max-w-full"
                  placeholder="--- --- -- --"
                  aria-label="Phone Number"
                />
              </div>
              <button className="flex ml-30 gap-1 self-center px-3.5 py-2.5 mt-16 text-lg font-medium text-center text-white border-2 border-blue-600 border-solid bg-zinc-300 bg-opacity-10 leading-[75.06px] rounded-[44px] max-md:mt-10">
                <span className="justify-center px-10 bg-blue-600 rounded-[44px] max-md:px-5">Отправить заявку</span>
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Form;
