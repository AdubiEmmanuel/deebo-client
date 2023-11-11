const Goal = () => {
    return (
      <div>
        <div className="w-100 bg-slate-50  top-0">
          <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
            <div className="flex items-center max-w-md mx-auto  border-0 p-3">
              <p className="text-2xl text-center text-grey-500">
                Pick your goals for today!
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-6">
                  <img
                    src="https://images.pexels.com/photos/18238200/pexels-photo-18238200/free-photo-of-man-people-woman-coffee.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt="top image1"
                  />
                  <h4 className="text-center font-bold">Creat Polls</h4>
                  <button
                    type="submit"
                    className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-6">
                  <img
                    src="https://images.pexels.com/photos/18238200/pexels-photo-18238200/free-photo-of-man-people-woman-coffee.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt="top image1"
                  />
                  <h4 className="text-center font-bold">Vote</h4>
                  <button
                    type="submit"
                    className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-6" action="#">
                  <img
                    src="https://images.pexels.com/photos/18238200/pexels-photo-18238200/free-photo-of-man-people-woman-coffee.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt="top image1"
                  />
                  <h4 className="text-center font-bold">Get Forms/Tickets</h4>
                  <button
                    type="submit"
                    className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Goal
