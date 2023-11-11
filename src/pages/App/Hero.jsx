const Hero = () => {
  return (
    <div className="conatiner bg-slate-50 ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="items-center max-w-md mx-auto border-0 p-3">
          <div className="flex flex-col gap-4 lg:flex-row md:flex-row border-purple-200 rounded md:gap-4 lg:gap-4">
            <input
              type="text"
              className="block md:w-96 w-full lg:w-96 px-4 py-2 text-black bg-white border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
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
