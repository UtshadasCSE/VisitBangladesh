import Lottie from "lottie-react";
import animationData from "../../../public/historyAnim.json";
const Bangladesh = () => {
  return (
    <div>
      <div className="container max-sm:w-4/5 mx-auto font-popins">
        <div className=" py-28 flex flex-col gap-5">
          <div className="lg:p-14 max-sm:p-4 max-sm:text-center flex flex-col justify-center items-center gap-2 rounded-md bg-[#d74a49]">
            <h2 className="font-playwrite font-bold text-2xl text-[#007f4e] border-b-8">
              Bangladesh
            </h2>
            <p className="text-white">
              One of the most remarkable aspects of Bangladesh is the warmth and
              hospitality of its people. Visitors are often greeted with open
              arms and a friendly smile, making their experience in the country
              truly memorable. Whether you’re exploring its historical
              landmarks, enjoying its natural beauty, or immersing yourself in
              its vibrant culture, Bangladesh offers a unique and enriching
              experience that is sure to leave a lasting impression.If you need
              more specific information or have any other requests, feel free to
              let me know! 🌟
            </p>
          </div>
          <div className="py-7 flex items-center gap-5">
            <div className="w-1/2">
              <Lottie animationData={animationData} loop={true} />
            </div>
            <div className="w-1/2">
              <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                  <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                    See why
                  </p>
                  <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                    Why Visit Bangladesh?
                  </h2>
                  <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                    <details>
                      <summary className="py-2 outline-none cursor-pointer focus:underline">
                        Why should I visit Bangladesh?
                      </summary>
                      <div className="px-4 pb-4">
                        <p>
                          Bangladesh offers a unique blend of rich history,
                          vibrant culture, and stunning natural beauty. From
                          ancient ruins and UNESCO World Heritage sites to the
                          world’s longest natural sea beach and the largest
                          mangrove forest, there’s something for every traveler.
                        </p>
                      </div>
                    </details>
                    <details>
                      <summary className="py-2 outline-none cursor-pointer focus:underline">
                        What are the top tourist attractions in Bangladesh?
                      </summary>
                      <div className="px-4 pb-4">
                        <p>
                          Some must-visit attractions include Cox’s Bazar, the
                          Sundarbans, the Sixty Dome Mosque, Srimangal’s tea
                          gardens, and the ancient city of Mahasthangarh.
                        </p>
                      </div>
                    </details>
                    <details>
                      <summary className="py-2 outline-none cursor-pointer focus:underline">
                        Is Bangladesh safe for tourists?
                      </summary>
                      <div className="px-4 pb-4 space-y-2">
                        <p>
                          Yes, Bangladesh is generally safe for tourists. Like
                          any travel destination, it’s important to stay
                          informed about local conditions and follow common
                          safety practices.
                        </p>
                      </div>
                    </details>
                    <details>
                      <summary className="py-2 outline-none cursor-pointer focus:underline">
                        What is the best time to visit Bangladesh?
                      </summary>
                      <div className="px-4 pb-4 space-y-2">
                        <p>
                          The best time to visit is during the cooler months
                          from November to February. This period offers pleasant
                          weather, ideal for exploring both urban and natural
                          attractions.
                        </p>
                      </div>
                    </details>
                    <details>
                      <summary className="py-2 outline-none cursor-pointer focus:underline">
                        What cultural experiences can I expect in Bangladesh?
                      </summary>
                      <div className="px-4 pb-4 space-y-2">
                        <p>
                          You can experience vibrant festivals like Pohela
                          Boishakh (Bengali New Year) and Durga Puja, visit
                          historical sites, and enjoy traditional music and
                          dance performances.
                        </p>
                      </div>
                    </details>
                    <details>
                      <summary className="py-2 outline-none cursor-pointer focus:underline">
                        Are there any unique natural landscapes in Bangladesh?
                      </summary>
                      <div className="px-4 pb-4 space-y-2">
                        <p>
                          Absolutely! Bangladesh is home to diverse landscapes,
                          including the Sundarbans mangrove forest, the serene
                          Ratargul Swamp Forest, and the picturesque hills of
                          the Chittagong Hill Tracts.
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bangladesh;
