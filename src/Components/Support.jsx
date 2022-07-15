import { PhoneIcon } from "@heroicons/react/outline";
import React from "react";
import Team from "./Img/team.jpg";
const Support = () => {
  return (
    <>
      <div className=" bg-gray-900/90  md:bg-red">
        <img src={Team} className="mix-blend-overlay object-cover " />
      </div>
      <div className="my-[-60%] text-white absolute md:px-[10%] px-[2%]">
        <div className="  text-center mix-blend-normal ">
          <h1 className="md:text-xs lg:text-4xl ">Support</h1>
          <h1 className="lg:text-6xl lg:py-12  py-5 text-2xl font-bold ">
            Finding the right team
          </h1>
          <p className="lg:text-2xl text-sm lg:px-0  px-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            soluta temporibus. Non fuga officia nam vero? Nemo ex labore aperiam
            totam dignissimos numquam voluptatum eaque provident tempora iusto,
            omnis est?
          </p>

          <div className="lg:py-[100px] md:py-0 lg:flex">
            <div>
              <div className="-mb-10 absolute text-white px-10">
                <PhoneIcon className="h-10 w-10 bg-indigo-500 p-1 rounded-lg shadow-2xl " />
              </div>
              <div className="p-3">
                <div className=" text-black rounded-lg shadow-2xl ">
                  <div className="py-4 px-4 bg-white rounded-lg">
                    <p className="font-bold text-2xl ">Sales</p>
                    <p className="pt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi similique nam facilis, fuga sapiente quo ab? Ea
                      cumque eius, iure, inventore quasi tempora reprehenderit
                      nisi molestiae unde, voluptate amet voluptatem.
                    </p>
                    <p className="text-left font-bold text-indigo-500">
                      Contact Us
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="-mb-10 absolute text-white px-10">
                <PhoneIcon className="h-10 w-10 bg-indigo-500 p-1 rounded-lg shadow-2xl " />
              </div>
              <div className="p-3">
                <div className=" text-black rounded-lg shadow-2xl ">
                  <div className="py-4 px-4 bg-white rounded-lg">
                    <p className="font-bold text-2xl ">Sales</p>
                    <p className="pt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi similique nam facilis, fuga sapiente quo ab? Ea
                      cumque eius, iure, inventore quasi tempora reprehenderit
                      nisi molestiae unde, voluptate amet voluptatem.
                    </p>
                    <p className="text-left font-bold text-indigo-500">
                      Contact Us
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="-mb-10 absolute text-white px-10">
                <PhoneIcon className="h-10 w-10 bg-indigo-500 p-1 rounded-lg shadow-2xl " />
              </div>
              <div className="p-3">
                <div className=" text-black rounded-lg shadow-2xl ">
                  <div className="py-4 px-4 bg-white rounded-lg">
                    <p className="font-bold text-2xl ">Sales</p>
                    <p className="pt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi similique nam facilis, fuga sapiente quo ab? Ea
                      cumque eius, iure, inventore quasi tempora reprehenderit
                      nisi molestiae unde, voluptate amet voluptatem.
                    </p>
                    <p className="text-left font-bold text-indigo-500">
                      Contact Us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
