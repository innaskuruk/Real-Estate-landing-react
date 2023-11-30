import React from "react";

function InformHouse({iconSrc, title, text, className}) {
    return (
        <div className={`flex flex-col w-1/3 my-0} ${className}`}>
            <img src={iconSrc} className="w-full" />
            <p className="mt-4 mb-2 text-2xl font-medium text-[#203239] w-full">{title}</p>
            <p className="text-base font-light text-[#203239] w-full">{text}</p>
        </div>
    )
}

export default InformHouse;