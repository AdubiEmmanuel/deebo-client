const Hero = () => {
  return (
    <div className=" bg-slate-50 ">
      <div className=" ">
        <div className="flex items-center justify-center align-middle mx-auto border-0 p-10">
          <div className="flex flex-col gap-2 lg:flex-row md:flex-row border-purple-200 rounded md:gap-4 lg:gap-4 " >
            <input
              type="text"
              className="block md:w-[30em] w-screen lg:w-[30em] px-2 py-2 text-black bg-white border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search for polls, forms & candidates"
            />
            <button className="px-4 lg:w-32 md:w-32 h-12 text-white bg-black border-l rounded w-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
