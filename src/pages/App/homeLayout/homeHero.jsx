const homeHero = () => {
    return (
      <div>
        <div className="h-screen w-100 bg-slate-50">
          <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
            <div className="flex items-center max-w-md mx-auto  border-0 p-3">
              <p className="text-2xl text-grey-500">
                Pick your goals for today!
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/18238200/pexels-photo-18238200/free-photo-of-man-people-woman-coffee.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt="top image1"
                />
                <h3 className="text-center font-bold flex justify-center align- text-2xl mt-[5%]">
                  Create Polls
                </h3>
                <button className="bg-black text-white w-[100%] mx-auto h-[7%] my-10">
                  Get Started
                </button>
              </div>
              <div className="">
                <img
                  src="https://images.pexels.com/photos/18238200/pexels-photo-18238200/free-photo-of-man-people-woman-coffee.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt="top image1"
                />
                <h3 className="text-center font-bold flex justify-center align- text-2xl mt-[5%]">
                  Vote
                </h3>
                <button className="bg-black text-white w-[100%] mx-auto h-[7%] my-10">
                  Get Started
                </button>
              </div>
              <div className="">
                <img
                  src="https://images.pexels.com/photos/18238200/pexels-photo-18238200/free-photo-of-man-people-woman-coffee.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt="top image1"
                />
                <h3 className="text-center font-bold flex justify-center align- text-2xl mt-[5%]">
                  Get Forms/Tickets
                </h3>
                <button className="bg-black text-white w-[100%] mx-auto h-[7%] my-10">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default homeHero
