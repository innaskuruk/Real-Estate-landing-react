import React from 'react';
import img1 from "../../assets/1.svg"
import Icon from "../../assets/Icon.svg"
import MainHouse from "../../assets/MainHouse.png"
import Statistics from './componets/statistics';


function Header () {
    return (
        <div>
        <div className="flex flex-row bg-[#eeedde] w-full px-24 pt-12">
          <div className="flex flex-row mx-0 my-auto mr-24">
            <p className="mr-[1px] text-4xl font-bold text-[#203239]">0</p>
            <p className="mr-auto text-2xl mx-0 my-auto font-semibold text-[#203239]">
              mah
            </p>
          </div>
          <div className="flex flex-col mt-auto mr-0 mb-1 ml-auto">
            <p className="text-base text-[#203239] font-semibold">Home</p>
            <div className="mx-auto mt-1 w-[80%] bg-[#f6762e] rounded-lg h-1"></div>
          </div>
          <div className=" flex flex-row mx-0 my-auto">
            <p className="ml-24 text-base text-[#203239]">About</p>
            <div className="flex flex-row">
              <p className="ml-24 text-base text-[#203239]">Properties</p>
            <img src={img1} className="w-3 h-2 my-auto mr-auto ml-3" />
            </div>
            <p className="ml-24 text-base text-[#203239]">Contact</p>
          </div>
        </div>
        <div className="flex flex-row w-full bg-[#eeedde] px-24 pt-24 pb-14">
          <div className="flex flex-col">
            <p className="text-6xl font-semibold text-[#203239]">
              Temukan Hunian Keluarga Sesuai Keinginanmu
            </p>
            <p className="text-base mt-6 font-light text-[#203239] text-opacity-50">
              Menyediakan hunian bagi keluarga anda dengan varian pilihan dan
              lokasi yang strategis di kota anda dengan cara yang lebih mudah.{" "}
            </p>
            <div className=" flex w-full mt-14 bg-[#ffffff] rounded-2xl h-[70px] py-[10px] px-5 ">
              <img src={Icon} className="mr-3" />
              <input
                placeholder="Search location, properties, residental group"
                className="w-full border-none text-base font-light text-[#203239] text-opacity-50 outline-none"
              />
              <button className="h-12 w-36 rounded-lg border-none bg-[#203239] text-[#ffffff] text-base font-light">
                Search
              </button>
            </div>
            <div className="flex flex-row mt-20">
              <Statistics titleClassName="text-6xl" number={"200"} title={"+"} text={"Residental grup telah bergabung"}/>
              <Statistics titleClassName="text-2xl" className="mx-20" number={"10"} title={"Tahun"} text={"Residental grup telah bergabung"}/>
              <Statistics titleClassName="text-6xl" number={"999"} title={"+"} text={"Residental grup telah bergabung"}/>
            </div>
          </div>
          <img src={MainHouse} className="ml-8 w-[400px]" />
        </div>
      </div> 
    )
}



export default Header;