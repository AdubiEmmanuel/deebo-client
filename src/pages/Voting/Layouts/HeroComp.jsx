import { Link } from "react-router-dom";

const HeroComp = () => {
    return (
      <div>
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              MBGN 2023
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus alias consequatur vitae doloremque, cupiditate quidem porro quos fugiat nemo sapiente, consequuntur voluptas numquam temporibus fuga unde iusto. Accusantium, quis.
              Dolorum, veniam ullam. Quae laudantium modi provident nihil est praesentium, eveniet neque ut accusamus totam, officia maiores autem facere odit porro sunt eos ratione sapiente suscipit dolorum minus error ducimus.
              
            </p>
            <div className="flex flex-col mt-24 space-y-10 sm:flex-row sm:justify-center ">
              <Link
                to="/vote"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Vote Now
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
             
            </div>
          </div>
        </section>
      </div>
    );
}

export default HeroComp
