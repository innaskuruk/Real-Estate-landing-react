import React from "react";

function Statistics({number, title, text, className, titleClassName}) {
    return (
        <div className={`flex flex-col my-0 ${className}`}>
        <div className="flex flex-row">
          <p className="text-6xl font-semibold text-[#203239]">{number}</p>
          <p className={`font-bold text-[#f6762e] mt-auto ${titleClassName}`}>{title}</p>
        </div>
        <p className="text-[#203239] text-opacity-50">{text}
        </p>
      </div>
    )
}

export default Statistics;