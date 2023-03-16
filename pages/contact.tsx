import React from "react";

export default function contact() {
  return (
    <>
      <div>
        <div className="section about-section flex flex-wrap">
          <div className="basis-1/3 bg-gray-800 flex-1 contact-panel"></div>
          <div id="contact" className="basis-2/3 flex-1 p-3">
            <h1 className="text-6xl font-bold underline decoration-[#f86c04]">
              Contact Us
            </h1>
            <br></br>
            <p className="text-xl">
              Email:{" "}
              <a
                href="mailto:maxleysuites@gmail.com"
                className="hover:underline"
              >
                maxleysuites@gmail.com
              </a>
            </p>
            <p className="text-xl">
              BSD:{" "}
              <a
                href="https://wa.me/+6288225924227"
                className="hover:underline"
              >
                +6288225924227
              </a>
            </p>
            <p className="text-xl">
              Lippo:{" "}
              <a
                href="https://wa.me/+6285852293500"
                className="hover:underline"
              >
                +6285852293500
              </a>
            </p>
            <p className="text-xl">
              Customer Service and Feedback:{" "}
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
            <br></br>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.7040026826317!2d106.6365915!3d-6.302568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb52573b01af%3A0x2c7f226871efd55c!2sMaxley%20Suites!5e0!3m2!1sen!2sid!4v1678791900340!5m2!1sen!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
            <br></br>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
