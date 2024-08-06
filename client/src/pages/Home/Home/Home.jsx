import Title from "../../../components/Tiitle/Title";
import Hero from "../Hero/Hero";
import HomeBlogs from "../HomeBlogs/HomeBlogs";
import Story from "../Story/Story";
import TabSection from "../TabSection/TabSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Title
        heading={"Take a look"}
        subHeading={
          "Nestled in South Asia, this country is a hidden gem waiting to be explored."
        }
      />
      <Story />

      <Title
        heading={"Things You Must Do"}
        subHeading={
          "Every village whispers history, and every smile is an invitation. So, pack your curiosity and let VisitBD be your guide to an unforgettable journey."
        }
      />
      <div className="container max-sm:w-4/5 mx-auto py-8">
        <TabSection />
      </div>
      <Title
        heading={"What's Happening"}
        subHeading={
          "News refers to newly received or noteworthy information, especially about recent events. It is a vital part of our daily lives, keeping us informed about what’s happening around the world. News can cover a wide range of topics, including politics, economics, sports, entertainment, science, and more."
        }
      />
      <HomeBlogs />
    </div>
  );
};

export default Home;
