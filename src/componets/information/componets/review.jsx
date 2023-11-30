import React from "react";
import img2 from "../../../assets/2.svg"

function Review({ title, text, number, className }) {
    return (
        <div className={`rounded-lg hover:border-[#EEEDDE] border border-transparent flex flex-col my-0 w-full ${className}`}>
            <div className="flex flex-row mt-4">
                <div className="w-2 h-8 bg-[#f6762e] rounded-md my-auto mx-0"></div>
                <div className="flex flex-row space-x-32 my-auto mr-5 ml-6">
                    <p className="text-[#203239] text-base font-medium">{title}</p>
                </div>
                <div className="my-auto mr-5 ml-auto">
                    <p className="text-[#f6762e] text-base font-medium">{number}</p>
                </div>
            </div>
            <div className="mt-2 mr-9 mb-[67px] ml-8">
                <p className="text-[#203239] text-opacity-50 text-base font-light">
                    {text}
                </p>
            </div>
            <div className=" ml-10 mb-5 flex flex-row mt-auto">
                <p className="text-[#203239] text-base font-medium">Baca lebih Lanjut</p>
                <img src={img2} className="ml-[14px] mr-[90px]" />
            </div>
        </div>
    );
}

export default Review;
