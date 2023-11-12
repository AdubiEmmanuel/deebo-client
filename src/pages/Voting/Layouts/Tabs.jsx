import { Tab, initTE } from "tw-elements";

initTE({ Tab });

const Tabs = () => {
  return (
    <div>
      <div className="container p-4 my-10">
        <h1 className="text-3xl text-center">Explore more</h1>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center align-middle"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                EVENTS
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                CONTESTS
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                FORMS
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
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
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="https://images.pexels.com/photos/16947682/pexels-photo-16947682/free-photo-of-couple-embracing-and-intending-to-kissing.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
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
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="https://images.pexels.com/photos/2817853/pexels-photo-2817853.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
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
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
