import React from 'react';
import House from "../assets/House.svg"
import House1 from "../assets/House1.svg"
import Phone from "../assets/Phone.svg"


function Order () {
    return (
        <div className="flex flex-col w-full px-24 pt-16 pb-24 bg-[#eeedde]">
        <div className="w-full flex flex-col">
          <p className="text-base text-[#f6762e] font-medium">Pilihan konsumen</p>
          <p className="text-4xl font-semibold text-[#203239] mt-2">
            Residen Favorit
          </p>
        </div>
        <div className="flex flex-row w-full mt-16">
          <div className="flex relative mt-0 mr-12 mb-12 ml-0">
            <img src={House}/>
            <img src={House1} className="absolute top-12 left-12" />
          </div>
          <div className="w-full flex flex-col ml-16">
            <p className="text-4xl font-semibold text-[#203239]">
              Bangunan yang dirancang oleh Aristektur Handal
            </p>
            <p className="text-base font-light text-[#203239] mt-6">
              Tanpa diragukan, properti yang disediakan dalam webiste kami
              merupakan hasil kerjasama secara profesional dengan para
              Arsitektur ternama dan Developer yang terpercaya.
            </p>
            <div className="flex flex-row mt-12">
              <div className="flex flex-row w-60 h-12 rounded-lg border-solid border-[#203239] border-[1px]">
                <img src={Phone} className="w-6 my-auto mr-3 ml-10" />
                <p className="text-base font-semibold text-[#203239] my-auto mr-10 ml-0">
                  Hubungi Kami
                </p>
              </div>
              <div className="ml-12 w-60 h-12 border-solid border-[#203239] rounded-lg border-[1px] bg-[#203239]">
                <p className="text-base font-semibold text-[#ffffff] my-3 mx-10">
                  Explore lebih banyak
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
}

export default Order;