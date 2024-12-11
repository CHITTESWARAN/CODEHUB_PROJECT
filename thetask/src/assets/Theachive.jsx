import React from 'react'
import company15 from "../imagesserts/Frame (16).png"
import company16 from "../imagesserts/Frame (17).png"

const Theachive = () => {
  return (
    <div className='flex flex-col my-14'>
        <div className="font-semibold  w-full text-center m-auto h-[126px]  font-bold text-5xl">
          <h1>Your Archive of Progress</h1>
        </div>
        <div className='flex gap-4 m-auto'>
            <div>
                <img src={company15} alt="" />

            </div>
            <div>
              <img src={company16} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Theachive