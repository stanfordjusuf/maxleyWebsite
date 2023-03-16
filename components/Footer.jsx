import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer
    className="footer bg-base-200 text-base-content"
    style={{ color: 'white' }}
  >
    <div className="justify-self-center">
      <Link href="/">
        {/* <span className="logo cursor-pointer font-bold text-4xl text-orange">Prodat ⭐️</span> */}
        <img
          className="btn btn-warning hover:cursor-pointer"
          width="200px"
          height="auto"
          src="https://i.ibb.co/3Rvrrkn/Screenshot-2023-03-11-at-13-14-22-removebg-preview-1.png"
          alt="logo-1"
          border="0"
        />
      </Link>
//       <Link href="/about">
//         <a href="#" className="link link-hover">About</a>
//       </Link>
    </div>
    <div className="justify-self-center">
//       <a href="#" style={{ color: 'black' }}>CONTACT</a>
      <div className="grid grid-flow-col gap-4">
        <a href="https://www.instagram.com/maxleysuites/">
          Instagram
        </a>
        <a href="https://www.tiktok.com/@maxleysuites?_t=8aRWNgJ7DDm&_r=1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            color="black"
            fill="currentColor"
            className="bi bi-tiktok"
            viewBox="0 0 16 16"
            id="IconChangeColor"
          >
            {' '}
            <path
              d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"
              id="mainIconPathAttribute"
            />{' '}
          </svg>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=6285852293500&text&type=phone_number&app_absent=0">
//           {svg here}
          <p>Lippo</p>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=6288225924227&text&type=phone_number&app_absent=0">
//           {svg here}
          <p>BSD</p>
        </a>
        <a href="https://goo.gl/maps/SAxM51p66Yasbj2L9">
          BSD
        </a>
        <a href="mailto:maxleysuites@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
          </svg>
        </a>
      </div>
    </div>
    <div className="justify-self-center">
      <Link href="/contact">
        <a href="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
          Feedback
        </a>
      </Link>
      <a href="#" className="link link-hover">Customer service: 081227762299</a>
    </div>
  </footer>
);

export default Footer;
