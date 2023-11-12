import Forms from "./Layouts/Forms";

import {EventData} from "./EventData"
import {ContestData} from "./ContestData"
import {FormData} from "./FormData"


const Explore = () => {

console.log(EventData)

    return (
      <div className="container p-4 my-10">
        <h1 className="text-4xl font-bold my-5 text-center">Explore More</h1>
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
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {EventData.map(
                ({
                  id,
                  img,
                  title,
                  location,
                  description1,
                  description2,
                  button,
                  price,
                }) => (
                  <div
                    key={id}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <a href="#">
                      <img className="rounded-t-lg" src={img} alt="" />
                    </a>
                    <div className="p-5">
                      <div className="grid grid-cols-2">
                        <div className="p-3">
                          <h3>{title}</h3>
                          <p>{location}</p>
                          <button
                            type="button"
                            className="text-gray-900 my-3 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                          >
                            {button}
                          </button>
                        </div>
                        <div className="p-3">
                          <h3></h3>
                          <p>{description1}</p>
                          <p>{description2}</p>
                          <h3 className="text-2xl">{price}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {ContestData.map(
                ({
                  id,
                  img,
                  title,
                  location,
                  description1,
                  description2,
                  button,
                  price,
                }) => (
                  <div
                    key={id}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <a href="#">
                      <img className="rounded-t-lg" src={img} alt="" />
                    </a>
                    <div className="p-5">
                      <div className="grid grid-cols-2">
                        <div className="p-3">
                          <h3>{title}</h3>
                          <p>{location}</p>
                          <button
                            type="button"
                            className="text-gray-900 my-3 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                          >
                            {button}
                          </button>
                        </div>
                        <div className="p-3">
                          <h3></h3>
                          <p>{description1}</p>
                          <p>{description2}</p>
                          <h3 className="text-2xl">{price}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {FormData.map(
                ({
                  id,
                  img,
                  title,
                  location,
                  description1,
                  description2,
                  button,
                  price,
                }) => (
                  <div
                    key={id}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <a href="#">
                      <img className="rounded-t-lg" src={img} alt="" />
                    </a>
                    <div className="p-5">
                      <div className="grid grid-cols-2">
                        <div className="p-3">
                          <h3>{title}</h3>
                          <p>{location}</p>
                          <button
                            type="button"
                            className="text-gray-900 my-3 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                          >
                            {button}
                          </button>
                        </div>
                        <div className="p-3">
                          <h3></h3>
                          <p>{description1}</p>
                          <p>{description2}</p>
                          <h3 className="text-2xl">{price}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Explore
