import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Import Image component from Next.js



const Page = () => {
  return (
    <div>
      <h1 className='head-text'>Upload-Hubb</h1>
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="mb-16"> 
          <Image src="/assets/Uploadd.png" alt="Image" width={600} height={400} /> {/* Adjust width and height as needed */}
        </div>
        
        {/* Centered text */}
        <div className="text-center mb-8">
          <h1 className="head-text mb-2">Upload the work and earn your reward</h1>
          <p className="custom-radio-label">World's finest companies trust Relevel to Share Files securely!</p>
        </div>

        {/* Button with Link */}
        <div className='flex flex-col md:flex-row gap-2'>
        <Button className='bg-primary-500 '>
        <Link href="https://flexagram-filehubb.vercel.app">       
            <span className="flex items-center">
              Explore Hubb
            </span>
          </Link>
        </Button>

        <Button className='bg-primary-500'>
        <Link href={`/payment`} >     
            <span className="flex items-center">
              Payment Hubb 
            </span> 
            </Link>
        </Button>
        </div>
       


      </div>
    </div>
  );
};

export default Page;
