import React from 'react';
import Instagram from "../assets/Instagram.svg"
import Facebook from "../assets/Facebook.svg"
import Tumblr from "../assets/Tumblr.svg"
import Linkedin from "../assets/Linkedin.svg"


function Footer() {
    return(
        <div className="w-full px-24 py-7 bg-[#203239] flex flex-row">
        <div className="flex flex-row">
          <p className="text-4xl font-semibold text-[#eeedde]">0</p>
          <p className="text-[#eeedde] text-2xl font-semibold mt-auto mb-auto">
            mah
          </p>
        </div>
        <div className="ml-auto flex flex-row">
          <img src={Instagram} className="w-6 ml-auto" />
          <img src={Facebook} className="w-6 ml-6" />
          <img src={Tumblr} className="w-6 ml-6" />
          <img src={Linkedin} className="w-6 ml-6" />
        </div>
      </div>
    )
} 

export default Footer;

