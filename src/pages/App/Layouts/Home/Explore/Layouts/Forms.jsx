const Forms = () => {
    return (
      <div className="grid grid-cols-3">
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://images.pexels.com/photos/12897542/pexels-photo-12897542.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </a>
            <div className="p-5">
              <div className="grid grid-cols-2">
                <div className="p-3">
                  <h3>Laff Matters 10.0</h3>
                  <p>Location: Portharcut</p>
                  <button
                    type="button"
                    className="text-gray-900 my-3 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    Get Ticket
                  </button>
                </div>
                <div className="p-3">
                  <h3></h3>
                  <p>February 25, 2023</p>
                  <p>from</p>
                  <h3 className="text-2xl">5,000.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Forms
