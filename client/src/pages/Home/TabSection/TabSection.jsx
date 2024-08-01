import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";

const TabSection = () => {
  const { isLoading, data: mustdo = [] } = useQuery({
    queryKey: ["mustdo"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/mustdo");
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <>
        <div className="flex justify-center py-4">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </>
    );
  }
  return (
    <div className="font-popins w-max max-sm:w-4/5 max-sm:mx-auto container">
      <Tabs>
        <TabList>
          {mustdo?.map((place) => (
            <Tab key={place}>{place.category}</Tab>
          ))}
        </TabList>
        <TabPanel>
          {mustdo
            .filter((match) => match.category === "Architecture")
            .map((info) => (
              <div
                key={info}
                className="grid grid-cols-4 max-sm:grid-cols-1 gap-10 py-5 "
              >
                {info.items.map((item) => (
                  <>
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure>
                        <img
                          src={item.imagePath}
                          alt={`${item.name} photo`}
                          className="h-60 w-full"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end pt-4">
                          <div className="flex justify-between w-full">
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <FaBuilding />
                              <p> {info.type}</p>
                            </div>
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <IoLocationSharp />
                              <p> {item.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ))}
        </TabPanel>
        <TabPanel>
          {mustdo
            .filter((match) => match.category === "Museums")
            .map((info) => (
              <div
                key={info}
                className="grid grid-cols-4 max-sm:grid-cols-1 gap-10 py-5"
              >
                {info.items.map((item) => (
                  <>
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure>
                        <img
                          src={item.imagePath}
                          alt={`${item.name} photo`}
                          className="h-60 w-full"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end pt-4">
                          <div className="flex justify-between w-full">
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <FaBuilding />
                              <p> {info.type}</p>
                            </div>
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <IoLocationSharp />
                              <p> {item.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ))}
        </TabPanel>
        <TabPanel>
          {mustdo
            .filter((match) => match.category === "Sea Beaches")
            .map((info) => (
              <div
                key={info}
                className="grid grid-cols-4 max-sm:grid-cols-1 gap-10 py-5"
              >
                {info.items.map((item) => (
                  <>
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure>
                        <img
                          src={item.imagePath}
                          alt={`${item.name} photo`}
                          className="h-60 w-full"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end pt-4">
                          <div className="flex justify-between w-full">
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <FaBuilding />
                              <p> {info.type}</p>
                            </div>
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <IoLocationSharp />
                              <p> {item.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ))}
        </TabPanel>
        <TabPanel>
          {mustdo
            .filter((match) => match.category === "Occasions")
            .map((info) => (
              <div
                key={info}
                className="grid grid-cols-4 max-sm:grid-cols-1 gap-10 py-5"
              >
                {info.items.map((item) => (
                  <>
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure>
                        <img
                          src={item.imagePath}
                          alt={`${item.name} photo`}
                          className="h-60 w-full"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end pt-4">
                          <div className="flex justify-between w-full">
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <FaBuilding />
                              <p> {info.type}</p>
                            </div>
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <IoLocationSharp />
                              <p> {item.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ))}
        </TabPanel>
        <TabPanel>
          {mustdo
            .filter((match) => match.category === "Nature & Wildlife")
            .map((info) => (
              <div
                key={info}
                className="grid grid-cols-4 max-sm:grid-cols-1 gap-10 py-5"
              >
                {info.items.map((item) => (
                  <>
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure>
                        <img
                          src={item.imagePath}
                          alt={`${item.name} photo`}
                          className="h-60 w-full"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end pt-4">
                          <div className="flex justify-between w-full">
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <FaBuilding />
                              <p> {info.type}</p>
                            </div>
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <IoLocationSharp />
                              <p> {item.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ))}
        </TabPanel>
        <TabPanel>
          {mustdo
            .filter((match) => match.category === "Traditional Sports")
            .map((info) => (
              <div
                key={info}
                className="grid grid-cols-4 max-sm:grid-cols-1 gap-10 py-5"
              >
                {info.items.map((item) => (
                  <>
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure>
                        <img
                          src={item.imagePath}
                          alt={`${item.name} photo`}
                          className="h-60 w-full"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end pt-4">
                          <div className="flex justify-between w-full">
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <FaBuilding />
                              <p> {info.type}</p>
                            </div>
                            <div className="flex items-center text-lg text-[#d74a49] font-semibold">
                              <IoLocationSharp />
                              <p> {item.location}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;
