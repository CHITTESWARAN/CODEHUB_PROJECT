import React from 'react'
import layer1 from "../imagesserts/Layers.png";
import layer2 from "../imagesserts/Acme Group.png";
import logo from "../imagesserts/Row (1).png";
import logo1 from "../imagesserts/Row.png";
import company1 from "../imagesserts/company19.png";
import company2 from "../imagesserts/company20.png";
import company3 from "../imagesserts/company21.png";
import company4 from "../imagesserts/company22.png";
import company5 from "../imagesserts/company23.png";
import company6 from "../imagesserts/company24.png";
import company7 from "../imagesserts/company25.png";
import company8 from "../imagesserts/company26.png";


const Design = () => {
  return (
    <div>
    <div className='flex my-14 text-center gap-9'>
      <div className='flex flex-col gap-4'>
        <img className='h-8 w-8' src={layer1} alt="" />
       <div className='h-auto w-full text-center'>
          <h4 className="font-normal text-left">Cloudhub has emerged as an essential asset for the team at Patreon design. Amidst an accelerated expanding organization in which the product undergoes rapid changes, Campsite enables us to maintain visibility on what's transpiring across various teams — impeccably aligning with our pre-existing procedures.</h4>
       </div>
       <img  className='w-[50%] pt-5 h-auto object-cover' src={logo1} alt="" />
      </div>

      <div className='flex flex-col gap-4'>
        <img className='h-8 w-8' src={layer2} alt="" />
        <div className="h-auto w-full flex items-center justify-center">
        <h4 className="font-normal text-left items-center  text-gray-700 px-4">
          Cloudhub has demonstrated exceptional worth in preserving open communication among designers regarding their current endeavors, a challenge that previously impeded our progress. It continually stands as a distinctive platform guiding our dialogue towards imagination and consistent review, an element I highly value. Moreover, it has accelerated our propensity for early-stage feedback beyond my expectations.
        </h4>
      </div>

       <img className='w-[70%] h-auto object-cover' src={logo} alt="" />
      </div>

    </div>

    <div >
       <div className="font-semibold w-full text-center m-auto h-[126px]  font-bold text-5xl">
          <h1>Loved By Designers At</h1>
        </div>
      <div className="grid grid-cols-4 gap-4">
  {[company1,company2,company3,company4,company5,company6,company7,company8].map((item, index) => (
    <img
      key={index}
      className="w-[296px] h-[144px] p-4 object-contain"
      src={item} 
      alt={`Company logo ${index + 1}`}
    />
  ))}
</div>

    </div>
    </div>
  
  )
}

export default Design