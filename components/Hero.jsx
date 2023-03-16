import React from 'react';
import Link from 'next/link';
import { Anchor } from 'react-bootstrap';

function Hero() {
  return (
    <>
      <div className="flex flex-col">
        <div className="home-carousel carousel w-full">
          <div id="home" className="carousel-item relative w-full">
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#promotion2" className="btn btn-circle btn-ghost">
                ❮
              </a>

              <div className="flex flex-col absolute items-center w-full h-full justify-center -z-50">
                <h1
                  className="text-4xl text-center md:text-6xl font-bold"
                  style={{ color: 'white' }}
                >
                  #livingwithmaxley
                </h1>
                <h1 className="text-3xl text-center" style={{ color: 'white' }}>
                  Hotel & Lodging
                </h1>
                <div className="flex flex-row mt-4 flex-wrap">
                  <Link href="/about">
                    <button
                      type="button"
                      className="btn btn-outline"
                      style={{ color: 'black' }}
                    >
                      About Us
                    </button>
                  </Link>
                  <Anchor>
                    <Link href="#contact">
                      <button
                        type="button"
                        className="btn btn-ghost"
                        style={{ color: 'black' }}
                      >
                        Contact Us
                      </button>
                    </Link>
                  </Anchor>
                </div>
              </div>

              <a href="#promotion1" className="btn btn-circle btn-ghost">
                ❯
              </a>
            </div>
          </div>
          <div id="promotion1" className="carousel-item relative w-full">
            <h1
              className="text-4xl text-center font-bold w-3/4 md:text-6xl"
              style={{ color: 'white' }}
            >
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              Group Package Promo!!! Invite your friends to live at Maxley!
            </h1>
            <iframe
              title="iframetwo"
              src="https://streamable.com/e/5ttmo8"
              style={{
                borderRadius: '5%',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingRight: '10px',
                paddingLeft: '10px',
              }}
              width="100%"
              height="100%"
              allowfullscreen
              autoPlay
            />
          </div>
          <div id="promotion2" className="carousel-item relative w-full">
            <h1
              className="text-4xl text-center font-bold w-3/4 md:text-6xl"
              style={{ color: "white" }}
            >
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              Get FREE Merchandise SUGA BTS & Doorprize Lightstick BTS for
              ARMY!!!
            </h1>
            <iframe
              title="iframethree"
              src="https://streamable.com/e/20kb55"
              style={{
                borderRadius: '5%',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingRight: '10px',
                paddingLeft: '10px',
              }}
              width="100%"
              height="100%"
              allowfullscreen
              autoPlay
            />
          </div>
        </div>
        <div>
          <div className="section about-section grid md:grid-cols-1 md:h-screen lg:grid-cols-2 w-full">
            <div className='relative text-center justify-center items-center flex flex-col flex-1 bg-cover bg-[url("https://i.ibb.co/yYZ6rj5/Gym.jpg")] '>
              <div className="min-w-full h-full bg-[#f86c04] opacity-30 absolute"></div>
              <Link href="/services">
                <a className="text-6xl text-white z-[3] underline decoration-[#f86c04] cursor-pointer">
                  Services
                </a>
              </Link>
              <br/>
            </div>
            <div className='relative text-center flex-1 flex flex-col justify-center items-center p-6  bg-cover bg-[url("https://i.ibb.co/xmpsYpR/Billiard.jpg")]'>
              <div className="min-w-full h-full bg-[#f86c04] opacity-30 absolute"></div>
              <Link href="/about">
                <a href="#" className="text-6xl text-white z-[3] underline decoration-[#f86c04] cursor-pointer">
                  About
                </a>
              </Link>
              <br/>
            </div>
          </div>
        </div>
        <div>
          <div className="section news-section text-center flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold text-white">
              You can find the latest information or events about Maxley here!
            </h1>
            <br/>
            <Link href="/category/news">
              <button href="#" className="btn bg-transparent border-white w-32 text-white hover:text-white hover:bg-[#f86c0477]">
                Go to News
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="section about-section flex flex-wrap">
            <div className="basis-1/3 bg-gray-800 flex-1 contact-panel"></div>
            <div id="contact" className="basis-2/3 flex-1 p-3">
              <h1 className="text-6xl font-bold underline decoration-[#f86c04]">
                Contact Us
              </h1>
              <br></br>
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
              <br/>
              <iframe
                title="iframefour"
                src="shorturl.at/oxAJQ"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <br/>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default Hero;
