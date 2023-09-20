import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      {/* Left Side */}
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profileCharacter}
          alt="RiIsBiTech"
          className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left">
          ARTIFICIAL INTELLIGENCE FULL-STACK ENGINEER
        </h2>

        {/* Description */}
        <p className="font-medium capitalize mt-4 text-base">
          Embark on a journey into the future with our pioneering Artificial
          Intelligence solutions that redefine industry standards. Harness the
          potential of Full Stack AI with our expert guidance, seamlessly
          integrating technologies to revolutionize your operations.
        </p>

        {/* Categories */}
        <p className="font-medium capitalize mt-4 text-base">
          <strong>Artificial Intelligence:</strong> Explore the limitless
          possibilities of tomorrow's technology today. Our cutting-edge AI
          solutions are meticulously crafted to propel businesses into an era of
          unprecedented innovation and efficiency.
        </p>

        <p className="font-medium capitalize mt-4 text-base">
          <strong>MERN Stack:</strong> Elevate your web presence with our
          transformative MERN Stack solutions. Experience the seamless
          integration of MongoDB, Express, React, and Node.js - a dynamic
          combination that empowers your digital endeavors like never before.
        </p>

        <p className="font-medium capitalize mt-4 text-base">
          <strong>Python:</strong> Unlock unparalleled success with our
          extensive expertise in Python. Our seasoned developers bring forth a
          wealth of experience to leverage this powerful language, ensuring your
          projects are at the forefront of innovation.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
