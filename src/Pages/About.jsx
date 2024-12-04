import React from 'react';
import AboutImage from '../assets/about_img.png';
import NewsLetterBox from './NewsLetterBox';

const About = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='text-4xl text-center pt-9 border-t'>
        <div className='inline-flex gap-2 items-center mb-2'>
          <p className="text-gray-600">
            ABOUT <span className='text-gray-700 font-medium'>US</span>
          </p>
          <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-start my-10 px-20 gap-8'>
          <img
            src={AboutImage}
            alt=''
            className='w-full md:w-[500px] object-cover' />
          <div className='text-left md:w-1/2 text-gray-700 md:pl-8'>
            <p className='text-lg mt-10'>
              Forever Collection is your destination for timeless, high-quality products that combine style, comfort, and affordability. We’re dedicated to offering exceptional value and ensuring a seamless shopping experience for everyone.
            </p>
            <p className='text-lg mt-4'>
              Explore our curated selection of products that blend elegance with functionality. At Forever Collection, we prioritize quality and customer satisfaction, striving to bring you items you'll cherish for years to come.
            </p>
            <p className='font-bold text-xl mt-7'>Our Mission</p>
            <p className='text-lg mt-4'>Our mission is to deliver timeless, high-quality products that combine elegance and functionality, ensuring every customer enjoys exceptional value and satisfaction. We strive to create a seamless shopping experience that inspires trust and loyalty.</p>
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className='text-4xl text-left py-8 px-20'>
          <div className='inline-flex gap-2 items-center mb-3'>
            <p className="text-gray-600">
              WHY <span className='text-gray-700 font-medium'>CHOOSE US</span>
            </p>
            <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
          </div>
        </div>
        <div className='px-20 text-left flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5'>
            <b className='text-lg'>Quality Assurance</b>
            <p className='text-gray-700'>At Forever Collection, quality is our top priority. Every product undergoes rigorous checks to ensure it meets the highest standards of durability, style, and functionality, providing you with excellence you can trust.</p>
          </div>
          <div className='border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5'>
            <b className='text-lg'>Convenience</b>
            <p className='text-gray-700'>We prioritize your convenience by offering a seamless shopping experience, user-friendly navigation, and fast, reliable delivery, ensuring your journey with us is hassle-free and enjoyable.</p>
          </div>
          <div className='border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5'>
            <b className='text-lg'>Exceptional Customer Service</b>
            <p className='text-gray-700'>We are dedicated to providing outstanding customer service. Our team is always ready to assist you, ensuring your questions are answered, concerns are addressed, and your experience exceeds expectations.</p>
          </div>
        </div>
      </div>
      <NewsLetterBox />
    </>
  );
};

export default About;
