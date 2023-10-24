import React from "react";

const AboutUs = () => {
  return (
    <div className="h-screen w-full">
      <div className="grid grid-rows-1  md:flex gap-1 px-4 md:justify-center md:items-center lg:w-full lg:h-full lg:mt-1 lg:px-10 lg:py-8">
        <div className="h-auto md:w-1/2 lg:h-full mt-10 place-self-start">
          <div className="w-32 border-t-8 border-primary-neutral mb-8" />
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-primary-dark font-bold">
            About Us
          </h1>
          <p className="text-justify text-sm leading-6 md:text-md lg:text-lg mt-3 lg:leading-8">
            The Legal Arch is a law firm in India comprising over 20 lawyers
            having offices in New Delhi and Noida. We provide legal advice and
            services to international and domestic clients. Our aim is to
            provide outstanding legal solutions in our chosen practice areas
            with a strong emphasis on ethics. Our clients benefit from our
            expertise and experience with the privilege of personal attention.
            Differentia Legal’s practice extends across diverse sectors of
            industry and services such as Manufacturing, Real Estate and
            Financial Services & Banking etc.
            <br />
            We provide a diverse set of legal services to our clients and assist
            them to meet these challenges successfully. Our practice areas are
            Criminal law, Civil law, Banking & Finance; Capital Market;
            Corporate/M&A; Dispute Resolution & Litigation; Employment; Energy;
            Infrastructure & Mining; Information Technology & Communications;
            Insurance; Intellectual Property Rights and Real Estate. Our team is
            highly efficient in recovery matters relating to 138 NI Act (Cheque
            Bounce), Civil Recovery, Arbitration etc.
          </p>
        </div>
        <div className="container w-full h-4/5 mt-8 md:h-96 md:w-1/2 md:mt-28 lg:h-5/6 inline-block ">
          <span className="h-full w-auto block">
            <img
              src="/about.png"
              alt="About Us Image"
              className="h-full object-contain mx-auto block  drop-shadow-xl"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
