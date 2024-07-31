import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabSection = () => {
  return (
    <div className="font-popins w-max">
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;
