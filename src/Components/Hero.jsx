import React from "react";
import bannerDesktop from "../assets/images/image-web-3-desktop.jpg";
import bannerMobile from "../assets/images/image-web-3-mobile.jpg";
import oldPc from "../assets/images/image-retro-pcs.jpg";
import keyboard from "../assets/images/image-top-laptops.jpg";
import consoleController from "../assets/images/image-gaming-growth.jpg";

function Hero() {
  return (
    // grid container
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-3  ">
      {/* banner */}

      <div className="col-span-2">
        <img
          src={bannerDesktop}
          alt="Puzzle image"
          className="hidden md:block h-full w-full"
        />
        <img
          src={bannerMobile}
          alt="Puzzle image"
          className="md:hidden h-full  w-full"
        />
      </div>

      {/* news section */}
      <aside className="row-span-2 bg-very-dark-blue px-6 py-7">
        <h2 className="text-soft-orange text-3xl font-bold mb-5">New</h2>
        <h3 className="text-off-white font-bold text-md mb-2 hover:text-soft-orange">
          <a href="/">Hydrogen VS Electric Cars</a>
        </h3>
        <p className="text-grayish-blue text-sm mb-7 leading-6">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
        <hr className="visual-divider" />
        <h3 className="text-off-white font-bold text-md mb-2 hover:text-soft-orange">
          <a href="/">The Downsides of AI Artistry</a>
        </h3>
        <p className="text-grayish-blue text-sm mb-6 leading-6">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <hr className="visual-divider" />
        <h3 className="text-off-white font-bold text-md mb-2 hover:text-soft-orange">
          <a href="/">Is VC Funding Drying Up?</a>
        </h3>
        <p className="text-grayish-blue text-sm leading-6">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </aside>
      {/* main header */}
      <div>
        <h1 className="text-[50px]/[50px] font-bold max-w-[8ch]">
          The Bright Future of Web 3.0?
        </h1>
      </div>

      {/* main header description */}
      <div>
        <p className="text-sm/[22px] text-dark-grayish mb-7">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="py-3 px-7 bg-soft-red font-semibold text-xs tracking-[.25rem] text-off-white hover:bg-very-dark-blue">
          READ MORE
        </button>
      </div>

      {/* small boxes */}
      <div className=" flex items-center mt-9">
        <img src={oldPc} alt="Computer image" className="max-w-[6rem]" />
        <div className="ms-6 flex flex-col justify-center">
          <span className="text-3xl font-bold text-grayish-blue">01</span>
          <h4 className="text-md font-bold text-very-dark-blue mt-3 mb-2  hover:text-soft-red">
            <a href="/">Reviving Retro PCs</a>
          </h4>
          <p className="text-sm text-dark-grayish leading-6">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>

      <div className=" flex items-center mt-9">
        <img src={keyboard} alt="Keyboard image" className="max-w-[6rem]" />
        <div className="ms-6 flex flex-col justify-center">
          <span className="text-3xl font-bold text-grayish-blue">02</span>
          <h4 className="text-md font-bold text-very-dark-blue mt-3 mb-2  hover:text-soft-red">
            <a href="/">Top 10 Laptops of 2022</a>
          </h4>
          <p className="text-sm text-dark-grayish leading-6">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>

      <div className=" flex items-center mt-9">
        <img
          src={consoleController}
          alt="Controller image"
          className="max-w-[6rem]"
        />
        <div className="ms-6 flex flex-col justify-center">
          <span className="text-3xl font-bold text-grayish-blue">03</span>
          <h4 className="text-md font-bold text-very-dark-blue mt-3 mb-2  hover:text-soft-red">
            <a href="/">The Growth of Gaming</a>
          </h4>
          <p className="text-sm text-dark-grayish leading-6">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
