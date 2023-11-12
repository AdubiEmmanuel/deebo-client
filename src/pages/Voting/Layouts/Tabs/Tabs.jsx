import { Tab, initTE } from "tw-elements";

import { AllCategoriesData } from "./AllCategoriesData";

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
                id="all-tab"
                data-tabs-target="#all"
                type="button"
                role="tab"
                aria-controls="all"
                aria-selected="false"
              >
                ALL CATEGORIES
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="polls-tab"
                data-tabs-target="#polls"
                type="button"
                role="tab"
                aria-controls="polls"
                aria-selected="false"
              >
                POLLS
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="pag-tab"
                data-tabs-target="#pag"
                type="button"
                role="tab"
                aria-controls="pag"
                aria-selected="false"
              >
                PAGEANTRY
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="politics-tab"
                data-tabs-target="#politics"
                type="button"
                role="tab"
                aria-controls="politics"
                aria-selected="false"
              >
                POLITICS
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="game-tab"
                data-tabs-target="#game"
                type="button"
                role="tab"
                aria-controls="game"
                aria-selected="false"
              >
                GAMESHOW
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="music-tab"
                data-tabs-target="#music"
                type="button"
                role="tab"
                aria-controls="music"
                aria-selected="false"
              >
                MUSIC
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {AllCategoriesData.map(
                ({
                  id,
                  img,
                  title,
                  location,
                  description1,
                  description2,
                  button,
                  price,
                  category,
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
            id="polls"
            role="tabpanel"
            aria-labelledby="polls-tab"
          >
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {AllCategoriesData.category === "polls"
                ? AllCategoriesData.category.map(
                    ({
                      id,
                      img,
                      title,
                      location,
                      description1,
                      description2,
                      button,
                      price,
                      category,
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
                  )
                : "Not polls"}
            </div>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="pag"
            role="tabpanel"
            aria-labelledby="pag-tab"
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
            id="politics"
            role="tabpanel"
            aria-labelledby="politics-tab"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              POLITICS
            </div>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="game"
            role="tabpanel"
            aria-labelledby="game-tab"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              GAMESHOW
            </div>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="music"
            role="tabpanel"
            aria-labelledby="music-tab"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              MUSIC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
