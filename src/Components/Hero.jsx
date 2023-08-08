import React from "react";
import bannerDesktop from "../assets/images/image-web-3-desktop.jpg";
import bannerMobile from "../assets/images/image-web-3-mobile.jpg";

function Hero() {
  return (
    // grid container
    <div className="grid grid-cols-3">
      {/* banner */}
      <div className="col-span-2">
        <img
          src={bannerDesktop}
          alt="Puzzle image"
          className="hidden md:block"
        />
        <img src={bannerMobile} alt="Puzzle image" className="md:hidden" />
      </div>
      {/* news section */}
      <aside className="row-span-2 bg-very-dark-blue px-5 py-6">
        <h2 className="text-soft-orange text-3xl font-bold">New</h2>
        <h3 className="text-off-white t">Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        <hr />
        <h3>The Downsides of AI Artistry</h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <hr />
        <h3>Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
        <hr />
      </aside>
      {/* main header */}
      <div>
        <h1>The Bright Future of Web 3.0?</h1>
      </div>
      {/* main header description */}
      <div>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>READ MORE</button>
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
