import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/outline";
import React from "react";
import Tech from "./Img/Technology.png";

function Beranda() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between ">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-2">
            <p className="text-2xl">Unique Sequencing & Production</p>
            <h1 className="py-3 text-5xl md:text-7xl font-bold">
              Cloud Management
            </h1>
            <p className="text-2xl">This is our tech brand</p>
            <button className="py-3 px-6 sm:w-[60%] my-4 ">Get Startted</button>
          </div>
          <div>
            <img src={Tech} alt="tech" className="w-full" />
          </div>
          <div
            className="absolute flex flex-col py-4 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform 
          md:-translate-x-1/2 bg-zink-200 border border-slate-300 rounded-xl text-center shadow-xl bg-white "
          >
            <p className="py-4 font-bold">Data services</p>
            <div className="flex justify-between flex-wrap px-4">
              <p className="flex px-4 py-2">
                <CloudUploadIcon className="h-6 text-indigo-500" />. App
                Security
              </p>
              <p className="flex px-4 py-2">
                <DatabaseIcon className="h-6  text-indigo-500" /> Dasboard
              </p>
              <p className="flex px-4 py-2">
                <ServerIcon className="h-6  text-indigo-500" />
                Cloud Data
              </p>
              <p className="flex px-4 py-2">
                <PaperAirplaneIcon className="h-6  text-indigo-500" /> API
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Beranda;
