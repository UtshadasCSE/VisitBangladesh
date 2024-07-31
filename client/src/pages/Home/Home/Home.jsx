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
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit possimus debitis quia animi earum veniam quis, numquam iusto in consequuntur expedita, nesciunt molestias, assumenda obcaecati alias culpa cumque maxime illum!"
        }
      />
      <HomeBlogs />
    </div>
  );
};

export default Home;
