import React from "react";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    console.log(email);
  };

  const services = [
    "Shops",
    "QR Code",
    "Gaming Room",
    "More Services",
  ];

  const company = ["About Us", "Careers", "FAQ"];

  const more = ["Blogs", "Portfolio"];

  return (
    <div className="  pt-10 pb-5">
    <div className="fl-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 mb-5">
        <div className="col-span-10 md:col-span-4 lg:col-span-6 order-last md:order-first pt-14 pb-5 md:pt-0 md:pb-0 text-center md:text-left m-auto md:m-0 grid justify-items-center md:justify-items-start">
          <div className="text-2xl font-medium max-w-[281px] leading-normal">
            Sign up to our newsletter and get the latest updates
          </div>
          <div className="mt-5 flex">
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-[281px] h-12 pl-5 rounded-l bg-[#EFEFEF] focus:outline-none"
            />

            <button
              className="bg-black text-white h-12 w-14 rounded-r flex justify-center items-center"
              style={{ background: "var(--primary-gradient)" }}
              onClick={handleSubmit}
            >
              <img
                src="/svgs/arrow-right.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        <div className="col-span-6 md:col-span-6 lg:col-span-4 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-6 *:pt-5 *:md:pt-0 px-4 md:px-0">
          <div className="col-span-4 md:col-span-4 lg:col-span-3">
            <div className="text-[20px] pb-1 font-medium">Main Pages</div>
            <ul className="*:text-[16px] *:py-[6px] text-[#414141] font-light">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="text-[20px] pb-1 font-medium">Company</div>
            <ul className="*:text-[16px] *:py-[6px] text-[#414141] font-light">
              {company.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="text-[20px] pb-1 font-medium">More</div>
            <ul className="*:text-[16px] *:py-[6px] text-[#414141] font-light">
              {more.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 mb-7 ">
        <div className="flex gap-5 m-auto md:m-0 pb-5 md:pb-0">
          <a href="/">
            <img
              src="/svgs/Facebook.svg"
              alt="Facebook link"
              width={20}
              height={20}
              className="w-9 md:w-5"
            />
          </a>
          <a href="/">
            <img
              src="/svgs/Instagram.svg"
              alt="Instagram link"
              width={20}
              height={20}
              className="mt-[1px] w-9 md:w-5"
            />
          </a>
        </div>
        <div className="text-center md:text-right text-[#202020] text-[14px] font-light">
          © 2024 - Registration statement - Created by Xvintec
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
