import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/M1C2TsP/main-Hero-Poster-Maxley-3.png"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-ghost btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-ghost btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <iframe
            title="iframe1"
            src="https://streamable.com/e/bo5i5t"
            width="100%"
            height="100%"
            allowfullscreen
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-ghost btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-ghost btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <iframe
            title="iframetwo"
            src="https://streamable.com/e/mzr200"
            width="100%"
            height="100%"
            allowfullscreen
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-ghost btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-ghost btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/RjqLvsq/DSC-5809-HDR.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <center>
            <div>
              <h1 className="text-5xl font-bold">Welcome to Maxley Suites!</h1>
              <p className="py-6">
                The best and biggest dormitory in BSD Serpong & Lippo Karawaci
              </p>
              <Link href="/about">
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{ marginRight: "10px" }}
                >
                  About
                </button>
              </Link>
              <Link href="/contact">
                <button type="button" className="btn btn-warning">
                  Contact
                </button>
              </Link>
            </div>
          </center>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <div className="section about-section grid md:grid-cols-1 md:h-screen lg:grid-cols-2 w-full">
            <div className='relative text-center justify-center items-center flex flex-col flex-1 bg-cover bg-[url("https://i.ibb.co/yYZ6rj5/Gym.jpg")] '>
              <div className="min-w-full h-full bg-[#f86c04] opacity-30 absolute" />
              <Link href="/services">
                <a
                  href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer"
                  className="text-6xl text-white z-[3] underline decoration-[#f86c04] cursor-pointer"
                >
                  Services
                </a>
              </Link>
              <br />
            </div>
            <div className='relative text-center flex-1 flex flex-col justify-center items-center p-6  bg-cover bg-[url("https://i.ibb.co/xmpsYpR/Billiard.jpg")]'>
              <div className="min-w-full h-full bg-[#f86c04] opacity-30 absolute" />
              <Link href="/about">
                <a
                  className="text-6xl text-white z-[3] underline decoration-[#f86c04] cursor-pointer"
                  href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer"
                >
                  About
                </a>
              </Link>
              <br />
            </div>
          </div>
        </div>
        <div>
          <div className="section news-section text-center flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold text-white">
              You can find the latest information or events about Maxley here!
            </h1>
            <br />
            <Link href="/category/news">
              <button
                type="button"
                className="btn bg-transparent border-white w-32 text-white hover:text-white hover:bg-[#f86c0477]"
                href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer"
              >
                Go to News
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="section grid lg:grid-cols-3 md:grid-cols-1">
            <div className="col-span-1 bg-gray-800 contact-panel" />
            <div id="contact" className="col-span-2 flex-1 p-3">
              <h1 className="text-6xl font-bold underline decoration-[#f86c04]">
                Contact Us
              </h1>
              <br />
              <p className="text-xl">
                Email:{' '}
                <a
                  href="mailto:maxleysuites@gmail.com"
                  className="hover:underline"
                >
                  maxleysuites@gmail.com
                </a>
              </p>
              <p className="text-xl">
                BSD:{' '}
                <a
                  href="https://wa.me/+6288225924227"
                  className="hover:underline"
                >
                  +6288225924227
                </a>
              </p>
              <p className="text-xl">
                Lippo:{' '}
                <a
                  href="https://wa.me/+6285852293500"
                  className="hover:underline"
                >
                  +6285852293500
                </a>
              </p>
              <p className="text-xl">
                Customer Service and Feedback:{' '}
                <a
                  href="https://wa.me/+6281227762299"
                  className="hover:underline"
                >
                  +6281227762299
                </a>
              </p>
              <p className="text-xl font-bold">
                Operational Hours: 09.00 - 17.00 WIB
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Hero;
