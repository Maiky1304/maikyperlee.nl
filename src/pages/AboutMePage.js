import React from "react";
import moment from "moment";
import LookAtMyWorkButton from "../components/core/LookAtMyWorkButton";
import TextSection from "../components/about/TextSection";
import ToolsLanguagesSection from "../components/about/ToolsLanguagesSection";
import BackToTop from "../components/about/BackToTop";

const AboutMePage = () => {
  const dob = moment("13 April 2004");
  const age = moment().diff(dob, "years");

  return (
    <section className="flex flex-col justify-center mt-20 px-8 md:px-16 lg:px-24 xl:px-28">
      <section className="flex mb-10 flex-col xl:flex-row justify-between items-center gap-x-52">
        <TextSection>
          <p>
            My name is <span className="corinthia text-2xl">Maiky</span>, I'm{" "}
            {age} years old and I'm from The Netherlands, I'm currently studying
            Software Development in Amsterdam, The Netherlands.
          </p>
          <p>
            I'm an enthusiastic developer that loves learning new things on a
            daily basis, I like reading, programming and watching shows. I'm a
            really big fan of the DC shows from CW.
          </p>
          <p>
            If you're interested in hiring me for your next project click on the
            button below.
          </p>
          <div className="flex flex-grow">
            <LookAtMyWorkButton />
          </div>
        </TextSection>
        <div className="mt-16 md:mt-0">
          <img
            src="/assets/sourcecode.svg"
            alt="Illustration of a programmer"
          />
        </div>
      </section>
      <section className="flex flex-col justify-between xl:flex-row-reverse items-center gap-x-52 mt-32">
        <TextSection className="flex flex-col gap-5 load dark:text-white">
          <p>
            I've been coding since I was about 10 years old and I've learned so
            many new things over these {age - 10} years. It's truly amazing what
            you're capable of if just put your time and effort into it.
          </p>
          <p>
            I'm really comfortable with working with React and Next.js, I also
            really enjoy creating Discord Bots when I come up with a cool idea.
          </p>
          <ToolsLanguagesSection />
        </TextSection>
        <div className="mt-16 md:mt-0">
          <img
            src="/assets/programming.svg"
            alt="Illustration of a programmer"
          />
        </div>
      </section>
      <BackToTop />
    </section>
  );
};

export default AboutMePage;
