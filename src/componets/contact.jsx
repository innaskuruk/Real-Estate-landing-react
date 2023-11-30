import React from 'react';
import Phone from "../assets/Phone.svg"
import GMail from "../assets/Gmail.svg"
import Logo1 from "../assets/Logo1.svg"
import Logo2 from "../assets/Logo2.svg"


function Contact () {
    return (
        <div className="flex flex-row bg-[#eeedde] w-full py-12 px-24">
        <div className="flex flex-col">
          <p className="text-[#203239] text-4xl font-semibold mb-[68px]">
            Hubungi Kami
          </p>
          <div className="flex flex-row w-full">
            <div className="w-full flex flex-col border-[1px] border-solid border-[#ff752780] rounded-lg">
              <div className="flex flex-row my-6 mx-6">
                <img src={Phone} className="w-12" />
                <div className="flex flex-col w-full ml-4">
                  <p className="mb-2 text-[#203239] text-base font-medium">Call</p>
                  <p className="text-[#203239] text-base font-normal">
                    +6281232936733
                  </p>
                </div>
              </div>
              <div className="bg-[#ff752733] rounded-lg w-48 h-12 mx-auto mt-0 mb-6">
                <p className="my-3 text-center text-base font-semibold text-[#f6762e]">
                  Call Now
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col border-[1px] border-solid border-[#ff752780] ml-12">
              <div className="flex flex-row my-6 mx-6">
                <img src={GMail} className="w-12" />
                <div className="flex flex-col w-full ml-4 mr-6">
                  <p className="text-base font-normal text-[#203239] mb-2">email</p>
                  <p className="text-base font-normal text-[#203239]">
                    omahindev@gmail.com
                  </p>
                </div>
              </div>
              <div className="mt-0 mx-auto mb-6 bg-[#ff7527cc] rounded-lg w-48 h-12">
                <p className="text-base font-semibold text-[#eeedde] mx-14 my-3">
                  Email Now
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-auto">
          <p className="text-[#203239] text-4xl font-semibold ml-5">Penghargaan</p>
          <div className="w-full flex flex-row">
            <div className="mt-16 mr-8 mb-6 ml-0">
              <img src={Logo1} className="w-40" />
            </div>
            <div className="mt-10">
              <img src={Logo2} className="w-56" />
            </div>
          </div>
        </div>
      </div>
    )
}


export default Contact;