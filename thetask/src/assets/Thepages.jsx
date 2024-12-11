import React from 'react'
import company11 from "../imagesserts/Frame (11).png";
import company12 from "../imagesserts/Frame (12).png";
import company13 from "../imagesserts/Frame (13).png";
import company14 from "../imagesserts/Frame (14).png";
const Thepages = () => {
  return (
   <>
   <div>
    <div className='bg-orange-600 pb-6 text-white text-center'>
        <div className='flex pt-24 gap-8 flex-col text-center'>
           <h2>Best Time Here</h2>
           <div className="font-semibold  w-[547px] m-auto h-[126px]  font-bold text-5xl">
          <h1>Better feedback at the right time.</h1>
        </div>
        </div>
        <div>
            <div className="p-4 ml-14">
                <img src={company11} alt="" />
                <div className='flex gap-3'>
                <img src={company12} alt="" />
                <img src={company13} alt="" />
                <img src={company14} alt="" />
                </div>
               
               
            </div>

        </div>

    </div>
   </div>
   </>
  )
}

export default Thepages