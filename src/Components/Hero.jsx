import React from "react";
import bannerDesktop from "../assets/images/image-web-3-desktop.jpg";
import bannerMobile from "../assets/images/image-web-3-mobile.jpg";

function Hero() {
  return (
    // grid container
    <div className="grid grid-cols-3 gap-x-6 gap-y-8">
      {/* banner */}
      <div className="col-span-2">
        <img
          src={bannerDesktop}
          alt="Puzzle image"
          className="hidden md:block h-full"
        />
        <img
          src={bannerMobile}
          alt="Puzzle image"
          className="md:hidden h-full"
        />
      </div>
      {/* news section */}
      <aside className="row-span-2 bg-very-dark-blue px-5 py-6">
        <h2 className="text-soft-orange text-3xl font-bold mb-4">New</h2>
        <h3 className="text-off-white font-bold text-[15px] mb-1">
          Hydrogen VS Electric Cars
        </h3>
        <p className="text-grayish-blue text-[12px]/[21px] mb-6">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
        <hr className="visual-divider" />
        <h3 className="text-off-white font-bold text-[15px] mb-1">
          The Downsides of AI Artistry
        </h3>
        <p className="text-grayish-blue text-[12px]/[21px] mb-6">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <hr className="visual-divider" />
        <h3 className="text-off-white font-bold text-[15px] mb-1">
          Is VC Funding Drying Up?
        </h3>
        <p className="text-grayish-blue text-[12px]/[21px] mb-1">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </aside>
      {/* main header */}
      <div>
        <h1 className="text-[55px]/[55px] font-bold max-w-[8ch]">
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
        <button className="py-3 px-7 bg-soft-red font-semibold text-xs tracking-[.25rem] text-off-white">
          READ MORE
        </button>
      </div>
      {/* small boxes */}
      <div>
        <span>01</span>
        <h4>Reviving Retro PCs</h4>
        <p>What happens when old PCs are given modern upgrades?</p>
      </div>
      <div>
        <span>02</span>
        <h4>Top 10 Laptops of 2022</h4>
        <p>Our best picks for various needs and budgets.</p>
      </div>
      <div>
        <span>03</span>
        <h4>The Growth of Gaming</h4>
        <p>How the pandemic has sparked fresh opportunities.</p>
      </div>
    </div>
  );
}

export default Hero;
