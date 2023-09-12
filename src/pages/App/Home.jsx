const Home = () => {
  return (
    <div className="h-screen w-100 bg-slate-50">
      <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center max-w-md mx-auto  border-0 p-3">
          <p className="text-2xl text-grey-500">Pick your goals for today!</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <div className="">
            <img
              src="https://images.pexels.com/photos/18238200/pexels-photo-18238200/free-photo-of-man-people-woman-coffee.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt="top image1"
            />
          </div>
          <div className="">
            <img
              src="https://images.pexels.com/photos/18238200/pexels-photo-18238200/free-photo-of-man-people-woman-coffee.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt="top image1"
            />
          </div>
          <div className="">
            <img
              src="https://images.pexels.com/photos/18238200/pexels-photo-18238200/free-photo-of-man-people-woman-coffee.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt="top image1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home