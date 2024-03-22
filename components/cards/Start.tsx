"use client"
import React from 'react';
import { Button } from '../ui/button'; // Import Button from your UI library
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Start = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/relevel/test");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="mt-16 mb-8"> 
          <Image src="/assets/Relevel.png" alt="Image" width={600} height={400} /> {/* Adjust width and height as needed */}
        </div>
        
        {/* Centered text */}
        <div className="text-center mb-8">
          <h1 className="head-text mb-2">Get your dream job in 10 days</h1>
          <p className="custom-radio-label">World's finest companies trust Relevel to hire. Crack the test, get hired!</p>
        </div>

        {/* Button - Centered */}
        <Button type='submit' onClick={handleClick} className='bg-primary-500'>Get Hired</Button>
   
        {/* Right aligned content */}
        <div className="text-center w-full mb-10 mt-8">
  <p className="custom-radio-label">Trusted by over 100+ companies</p>
  <div className="bg-gray-800 p-4 rounded-lg relative overflow-hidden mt-4">
    <div className="grid grid-cols-7 gap-8 md:flex md:flex-wrap md:justify-center animate-scroll">
      <img src="/assets/meta.svg" alt="Image 1" className="w-full h-auto mb-6 md:w-auto md:h-auto md:mx-2" />
      <img src="/assets/microsoft.svg" alt="Image 2" className="w-full h-auto mb-6 md:w-auto md:h-auto md:mx-2" />
      <img src="/assets/netflix.svg" alt="Image 3" className="w-full h-auto mb-6 md:w-auto md:h-auto md:mx-2" />
      <img src="/assets/python.svg" alt="Image 4" className="w-full h-auto mb-6 md:w-auto md:h-auto md:mx-2" />
      <img src="/assets/amazon.svg" alt="Image 5" className="w-full h-auto mb-6 md:w-auto md:h-auto md:mx-2" />
      <img src="/assets/windows.svg" alt="Image 6" className="w-full h-auto mb-6 md:w-auto md:h-auto md:mx-2" />
      <img src="/assets/excel.svg" alt="Image 7" className="w-full h-auto mb-6 md:w-auto md:h-auto md:mx-2" />
    </div>
  </div>
</div>


  {/* Left aligned content */}
  <div className="text-left w-full mb-8 mt-4">
          <h2 className="head-text mb-4">RELEVEL PROCESS</h2>
        </div>
      </div>

      <div className="mb-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Grid Item 1 */}
        <div className=" p-4 rounded-lg">
          <img src="/assets/Unlock.webp" alt="Image 1" className="w-full h-auto mb-4" />
          <h1 className="head-text mb-2">Take Relevel test</h1>
          <p className="text-gray-600">Explore career opportunities and take the test at your convenience</p>
        </div>

        {/* Grid Item 2 */}
        <div className=" p-4 rounded-lg">
          <img src="/assets/Pro.webp" alt="Image 2" className="w-full h-auto mb-4" />
          <h1 className="head-text mb-2">Unlock job interviews</h1>
          <p className="text-gray-600">Get shortlisted for job interviews based on your Relevel score</p>
        </div>

        {/* Grid Item 3 */}
        <div className=" p-4 rounded-lg">
          <img src="/assets/Best.webp" alt="Image 3" className="w-full h-auto mb-4" />
          <h1 className="head-text mb-2">Choose the best job</h1>
          <p className="text-gray-600">Choose the best job that suits you based on the interviews</p>
        </div>
      </div>

      {/* Right Side - Answers */}
      <div className="flex justify-center">
  <h2 className="head-text mb-4">Frequently Asked Questions</h2>
</div>
<div className="flex justify-between flex-wrap">
  {/* Left side */}
  <div className="w-full md:w-1/2 mb-4 md:mb-0">
    <div className="w-full pl-4">
      {/* Question 1 */}
      <div className="border border-white bg-black rounded-lg p-4 mb-4">
        <h3 className="custom-radio-label mb-2">Who can take the Relevel placement test?</h3>
        <p className="text-gray-500">Anyone above the age of 18 and who has enrolled for test can take the placement test.</p>
      </div>

      {/* Question 2 */}
      <div className="border border-white bg-black rounded-lg p-4 mb-4">
        <h3 className="custom-radio-label mb-2">How do i get jobs thorugh Relevel?</h3>
        <p className="text-gray-500">Once you apply for relevel entrance your points will decide ranks and will lead to give you job.</p>
      </div>

      {/* Question 3 */}
      <div className="border border-white bg-black rounded-lg p-4 mb-4">
        <h3 className="custom-radio-label mb-2">Am i eligible to apply for top bussiness companies</h3>
        <p className="text-gray-500">Yes , anyone above 18 age or above it can apply and find the job</p>
      </div>
    </div>
  </div>

  {/* Right side */}
  <div className="w-full md:w-1/2">
    <div className="w-full pl-4">
      {/* Question 4 */}
      <div className="border border-white bg-black rounded-lg p-4 mb-4">
        <h3 className="custom-radio-label mb-2">Whom should i contact if any queries arises?</h3>
        <p className="text-gray-500">You can reach onto us on chat or support base at Relevelsflexa@gmail.com</p>
      </div>

      {/* Question 5 */}
      <div className="border border-white bg-black rounded-lg p-4 mb-4">
        <h3 className="custom-radio-label mb-2">How many test i can apply for?</h3>
        <p className="text-gray-500">Yes , you can apply for multiple exams throughout the relevels.</p>
      </div>

      {/* Question 6 */}
      <div className="border border-white bg-black rounded-lg p-4 mb-4">
        <h3 className="custom-radio-label mb-2">Is it free?</h3>
        <p className="text-gray-500">Yes , it is totally free and anyone can apply on it.</p>
      </div>
    </div>
  </div>
</div>

<div className=" text-white text-center py-2  mt-6">
  <h1 className="custom-radio-label">Relevel</h1>
  <p className="text-gray-500">© by Flexagram</p>
</div>


</div>
  );
}
export default Start;
