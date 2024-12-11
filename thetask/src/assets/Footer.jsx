import React from 'react'
import company18 from "../imagesserts/Frame (18).png";
import company19 from "../imagesserts/Frame (19).png";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div >
        <div className='bg-orange-600  flex flex-col gap-4  text-white text-center'>
            <div className='flex flex-col justify-center gap-4 items-center py-14'>
        <div className="font-semibold  w-full text-center m-auto text-5xl">
        <Link to="/register"><h1>Keep Everyone in the loop</h1> </Link>
        </div>
        <div className='w-[70%] text-sm text-white'>
            <h4>All good things starts with a homepage. Get inspired without breaking your wallet.</h4>
        </div>
        <button className="bg-white m-2 py-2  px-3 text-center text-sm w-auto font-semibold  text-black rounded-full ">Start for free</button>
        </div>
        <div className="m-auto ">
            <img src={company18} alt="" />
        </div>
        </div>
       
    </div>
    <div className='flex my-14 flex-col gap-4 mb-28 justify-center items-center'>
        <img src={company19} alt="" />
        <h2 className='font-semibold text-xl '>Increase your team's visibility and alignment</h2>
        <h2 className='font-normal text-md'>Start for free, flexible for all teams.</h2>
        <div className='flex gap-1 items-center'>
            <h4>Request a Demo</h4>
            <button className="bg-orange-600 m-2 py-2  px-3 text-center text-sm w-auto font-semibold  text-white rounded-full hover:bg-orange-400 ">Start for free</button>
        </div>

    </div>
    <div className="flex   gap-14 p-6 bg-gray-100">
  <div className="w-auto items-center">
    <img className="h-14 w-14" src={company19} alt="Company Logo" />
  </div>
  <div className="w-full max-w-4xl">
    <table className="w-full text-center table-auto border-collapse">
      <thead className='text-md font-semibold text-center '>
        <tr className="border-b">
          <th className="p-2">Product</th>
          <th className="p-2">Legal</th>
          <th className="p-2">Company</th>
          <th className="p-2">Social</th>
        </tr>
      </thead>
      <tbody className='text-sm text-gray-600'>
        <tr>
          <td className="p-2">Features</td>
          <td className="p-2">Terms of Privacy</td>
          <td className="p-2">Blog</td>
          <td className="p-2">Dribbble</td>
        </tr>
        <tr>
          <td className="p-2">Pricing</td>
          <td className="p-2">Privacy Policy</td>
          <td className="p-2">Contact</td>
          <td className="p-2">Behance</td>
        </tr>
        <tr>
          <td className="p-2">Changelog</td>
          <td className="p-2">Security</td>
          <td className="p-2"></td>
          <td className="p-2">Discord</td>
        </tr>
        <tr>
          <td className="p-2">Support</td>
          <td className="p-2"></td>
          <td className="p-2"></td>
          <td className="p-2"></td>
        </tr>
        <tr>
          <td colSpan="4" className="pt-4 text-sm text-gray-600">
            All rights reserved. &copy; 2024 Think Metal
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </>
  )
}

export default Footer