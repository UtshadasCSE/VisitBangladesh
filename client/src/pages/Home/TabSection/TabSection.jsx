import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabSection = () => {
  const { data: mustdo = [] } = useQuery({
    queryKey: ["mustdo"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/mustdo");
      return res.data;
    },
  });

  return (
    <div className="font-popins w-max">
      <Tabs>
        <TabList>
          {mustdo?.map((place) => (
            <Tab key={place}>{place.category}</Tab>
          ))}
        </TabList>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;
