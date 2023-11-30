import React from 'react';
import CaretLeft from "../../assets/Caret left.svg"
import CaretRight from "../../assets/Caret right.svg"
import House4 from "../../assets/House4.svg"
import House3 from "../../assets/House3.svg"
import House2 from "../../assets/House2.svg"
import InformHouse from './componets/informHouse';


function Residence () {
    return (
        <div className="flex flex-col w-full py-16 px-24">
        <div className="flex flex-row w-full">
          <div>
            <p className="text-base font-medium text-[#f6762e]">Pilihan Auditor</p>
            <p className="text-4xl font-semibold text-[#203239] mt-2">
              Residen Berbagai Kota
            </p>
          </div>
          <div className="my-auto mr-0 ml-auto flex flex-row">
            <img src={CaretLeft}
              className="border-solid border-[#d6d5c7] border-[1px] w-7 h-7 bg-[#d6d5c7] opacity-50 rounded"
            />
            <img
              src={CaretRight}
              className="w-7 h-7 rounded border-solid border-[#d6d5c7] border-[1px] ml-6"
            />
          </div>
        </div>
        <div className="w-full mt-16 flex flex-row justify-between">
          <InformHouse iconSrc={House4} title={"Magnolia Surabaya"} text={"styJl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136"}/>
          <InformHouse className="mx-12" iconSrc={House2} title={"Pinang Residences"} text={"Jl. Deplu Raya No.16 RT.5, RW.003 Bintaro, Pesanggrahan, Jakarta Selatan 12330"}/>
          <InformHouse iconSrc={House3} title={"South Grove"} text={" 1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440"}/>
        </div>
      </div> 
    )
}


export default Residence;