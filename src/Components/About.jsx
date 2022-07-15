import React from "react";

const About = () => {
  return (
    <>
      <div className="text-center py-[10%] px-[20%]">
        <h2 className="font-bold lg:text-6xl text-2xl">
          Trusted by developers across the world
        </h2>
        <p className="lg:text-4xl py-[3%]  text-slate-400 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          commodi repellat error fuga quis sed obcaecati modi, rerum ex dicta
          incidunt excepturi et eveniet deleniti inventore ipsa iste nisi aut?
        </p>
        <div className="md:flex lg:flex-auto justify-center">
          <div className="p-4">
            <div className=" bg-white p-8 shadow-lg rounded-lg text-indigo-500 lg:w-auto md:w-[400px]">
              <h1 className="text-6xl font-bold">100%</h1>
              <p className="text-slate-400">Completion</p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white p-8  shadow-lg rounded-lg w-30 text-indigo-500 lg:w-auto md:w-[400px]">
              <h1 className="text-6xl font-bold">23/7</h1>
              <p className="text-slate-400">Actived</p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white p-8 shadow-lg rounded-lg w-30 text-indigo-500 lg:w-auto md:w-[400px]">
              <h1 className="text-6xl font-bold">10K</h1>
              <p className="text-slate-400">Transaction</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
