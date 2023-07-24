import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
function Home() {
  const mainContent = () => {
    return (
      <div className=" flex flex-col items-center justify-center gap-2">
        <img src="/logoFilled.png" className=" aspect-auto h-52" />
        <div className="flex flex-col items-center justify-center  gap-2 text-center">
          <h1 dir="auto" className="text-4xl font-semibold">
            היי. אנחנו החצר.
          </h1>
          <h2 dir="auto" className=" text-2xl font-normal">
            המקום המושלם לשתות, להיפגש ולהנות
          </h2>
        </div>
      </div>
    );
  };

  const scrollDown = () => {
    return (
      <a
        href="#about"
        className=" absolute bottom-5 flex w-full animate-bounce cursor-pointer justify-center p-4"
      >
        <FaChevronDown className="text-5xl" />
      </a>
    );
  };
  return (
    <div className="relative flex h-full flex-col items-center justify-center bg-red-400 bg-[url(mainImage.jpg)] bg-cover bg-center bg-no-repeat py-4 text-white">
      {mainContent()}
      {scrollDown()}
    </div>
  );
}

export default Home;
