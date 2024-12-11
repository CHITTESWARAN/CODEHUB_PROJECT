import React from 'react';
import curves from "../imagesserts/Frame (1).png";
import products from "../imagesserts/Frame.png";
import company1 from "../imagesserts/Frame (2).png";
import company2 from "../imagesserts/Frame (3).png";
import company3 from "../imagesserts/Frame (4).png";
import company4 from "../imagesserts/Frame (5).png";
import company5 from "../imagesserts/Frame (6).png";
import company6 from "../imagesserts/Frame (7).png";
import company7 from "../imagesserts/Frame (8).png";
import layout from "../imagesserts/Auto Layout Horizontal (1).png";
import layout2 from "../imagesserts/Auto Layout Horizontal.png";
import company9 from "../imagesserts/Frame (9).png"
import company10 from "../imagesserts/Frame (10).png"
import Thepages from './Thepages';
import Theachive from './Theachive';
import Design from './Design';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div  className='flex flex-col gap-8'>
    <div className="relative w-full h-[800px]"> {/* Increased height for better visibility */}

      
      <div className="layer1 absolute top-0 left-0 w-full h-full z-10">
        <img src={curves} alt="Curves" className="w-full h-auto object-cover" />
      </div>

     
      <div className="layer2 absolute top-0 left-0 w-full h-full z-20">
        <img src={products} alt="Products" className="w-full h-auto object-cover" />
      </div>
      <div className="absolute top-[15px] left-[50%] transform -translate-x-[50%] w-full md:w-[1192px] h-[365px] gap-6 flex flex-col justify-center items-center z-50 px-4">
 
  <div>
    <div className="text-center">
      <h1 className="font-Inter font-semibold text-[36px] sm:text-[48px] md:text-[84px] leading-[40px] sm:leading-[60px] md:leading-[89px] tracking-[-2px] sm:tracking-[-3px] md:tracking-[-3.5px] text-[#171717]">
        Create, inspect, and apply synthetic surveillance broadly.
      </h1>
    </div>

  
    <div className="text-center mt-6">
      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[35px]">
        Start with a stunning homepage. Stay motivated without hurting your pocket.
      </h3>
    </div>
  </div>

  <div className='flex flex-col m-4 text-center'>
    <div className='flex mt-2 text-center justify-center gap-2'>
      <Link to="/register">  <button className='bg-orange-500 justify-center items-center text-white py-2 px-8 rounded-full text-center hover:bg-orange-600 transition-all'>
        Start for free 
      </button>  </Link> 
    </div>

    <div className="mt-6">
      <h3 className="text-left text-[12px] sm:text-[14px] md:text-[14px] font-normal text-[#A3A3A3] leading-[18px] sm:leading-[20px] md:leading-[20px] tracking-[-0.01em] opacity-100">
        Want to talk or get a live demo? 
        <span className="text-[#525252] font-semibold"> Get in touch →</span>
      </h3>
    </div>
  </div>
</div>


    </div>


    <div className="flex flex-wrap mt-12 gap-4">
  {[company1, company2, company3, company4, company5, company6, company7].map((src, index) => (
    <img key={index} src={src} alt={`Company ${index + 1}`} className="h-full w-[10%] object-cover m-4" />
  ))}
</div>
<div>
    
</div>


  <div className="flex items-center justify-center text-center w-[1280px] h-[477px] gap-[77px]">
    <div className="w-[547px] h-[418px] flex flex-col justify-between gap-[40px]">
      <div className="flex flex-col gap-4 p-2">
        <button className="bg-orange-600 m-2 text-sm w-14 h-[28px] text-white rounded-full ">Share</button>
        <div className="font-semibold w-[547px] h-[126px]  font-bold text-5xl">
          <h1>Share anything you’re working on.</h1>
        </div>
      </div>
      <div className="h-[547px] w-full text-center">
        <h2 className="font-normal text-[#5F6980]">
          Campsite has been instrumental in keeping designers aware of each others' work-in-progress in a way that was previously slowing us down. It's also one of the only channels where.
        </h2>
      </div>
      <div className="flex flex-col gap-4">
      <img src={layout2} alt="Layout 2" />
        <img src={layout} alt="Layout 1" />
       
      </div>
    </div>
    <div className="w-[656px] h-[477px] p-[70px_63px_70px_62px] gap-0 rounded-tl-[24px]">
      <div className='bg-[#FFFFFF] rounded-lg hover:transition-shadow'>
        <div>
            <img src={company9} alt="" />
        </div>
        </div>  
    </div>

</div>
<div className='flex gap-4 m-4 '>
<div className="w-[656px] h-[477px] p-[70px_63px_70px_62px] gap-0 rounded-tl-[24px]">
      <div className='bg-[#FFFFFF] rounded-lg hover:transition-shadow'>
        <div>
            <img src={company10} alt="" />
        </div>
        </div>  
    </div>
        <div>
        <div className="w-[547px] h-[418px] flex flex-col justify-between gap-[40px]">
      <div className="flex flex-col gap-4 p-2">
        <button className="bg-orange-600 m-2 text-sm w-24 h-[28px] text-white rounded-full ">Feedback</button>
        <div className="font-semibold w-[547px] h-[126px]  font-bold text-5xl">
          <h1>Better feedback at the right time.</h1>
        </div>
      </div>
      <div className="h-[547px] w-full text-center">
        <h2 className="font-normal text-[#5F6980]">
        Campsite has been instrumental in keeping designers aware ofeach others' work-in-progress in a way that was previouslyslowing us down. It's also one of the only channels where.
        </h2>
      </div>
      <div className="flex flex-col gap-4">
      
        <img src={layout} alt="Layout 1" />
       
      </div>
    </div>
            
        </div>
    </div>
    <Thepages/>
    <Theachive/>
    <Design/>
    <Footer/>



    </div>
  );
};

export default Products;
