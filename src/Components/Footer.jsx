import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-800 text-white p-[10%] lg:h-auto h-screen lg:-mt-[5%] -mt-[700px]">
        <div className="lg:flex">
          <div className="flex ">
            <div className="lg:px-[95px] px-8">
              <p className="font-bold">Solutions</p>
              <ol className="">
                <li className="-mt-4 -ml-4 ">Marketing</li>
                <li className="-mt-8 -ml-4">Analytics</li>
                <li className="-mt-8 -ml-4">Commerce</li>
                <li className="-mt-8 -ml-4">Data</li>
                <li className="-mt-8 -ml-4">Cloud</li>
              </ol>
            </div>
            <div className="lg:px-[95px] px-8">
              <p className="font-bold">Solutions</p>
              <ol className="">
                <li className="-mt-4 -ml-4">Marketing</li>
                <li className="-mt-8 -ml-4">Analytics</li>
                <li className="-mt-8 -ml-4">Commerce</li>
                <li className="-mt-8 -ml-4">Data</li>
                <li className="-mt-8 -ml-4">Cloud</li>
              </ol>
            </div>
          </div>
          <div className="flex ">
            <div className="lg:px-[95px] px-8">
              <p className="font-bold">Solutions</p>
              <ol className="">
                <li className="-mt-4 -ml-4">Marketing</li>
                <li className="-mt-8 -ml-4">Analytics</li>
                <li className="-mt-8 -ml-4">Commerce</li>
                <li className="-mt-8 -ml-4">Data</li>
                <li className="-mt-8 -ml-4">Cloud</li>
              </ol>
            </div>
            <div className="lg:px-[95px] px-8">
              <p className="font-bold">Solutions</p>
              <ol className="">
                <li className="-mt-4 -ml-4">Marketing</li>
                <li className="-mt-8 -ml-4">Analytics</li>
                <li className="-mt-8 -ml-4">Commerce</li>
                <li className="-mt-8 -ml-4">Data</li>
                <li className="-mt-8 -ml-4">Cloud</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex">
          <div className="px-[10%] pt-3 lg:w-[60%]">
            <h1 className="font-bold py-3 ">Subcribe for our newsletter</h1>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-lg lg:w-full lg:h-10 w-[250px] lg:h-10 h-10"
            />
            <div className=" py-3">
              <input
                type="button"
                value="Send"
                className="bg-indigo-500 text-white shadow-lg lg:w-[50%] w-[50%] lg:h-10 h-10
                lg:p-1 rounded-lg font-bold "
              />
            </div>
          </div>
          <div>
            <div className="lg:pt-6 lg:pl-0 pl-8">
              <h1 className="font-bold">Our Map</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63751.682060218925!2d99.02581270207062!3d2.964193715195183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031845c5ac9d49d%3A0xec50414d3469acee!2sPematang%20Siantar%2C%20Kota%20Pematang%20Siantar%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1658049133564!5m2!1sid!2sid"
                className="w-full h-full pt-3"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
