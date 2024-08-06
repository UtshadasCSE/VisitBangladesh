import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Parallax } from "react-parallax";
import Title from "./../../components/Tiitle/Title";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const DivisionDetails = () => {
  const { name } = useParams();
  const { isLoading, data: division = [] } = useQuery({
    queryKey: ["division"],
    queryFn: async () => {
      const res = await axios.get(
        `https://visitbangladesh.onrender.com/divisions/${name}`,
        {
          // withCredentials: true,
        }
      );
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </>
    );
  }
  return (
    <div className="py-28 container max-sm:w-4/5 mx-auto ">
      <Parallax
        blur={7}
        bgImage={division.imageURL}
        bgImageAlt="the cat"
        strength={200}
        className="flex justify-center items-center container max-sm:w-4/5 mx-auto py-14 rounded-lg max-sm:px-4"
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-2xl text-white font-semibold border-b-4 ">
            {division.name}
          </h2>
          <p className="text-white text-lg max-sm:text-base max-sm:text-center lg:w-3/5 text-justify  ">
            {division.description}
          </p>
        </div>
      </Parallax>
      <div className="py-9 text-lg">
        <Title
          data-aos="fade-up"
          heading={`Explore ${division.name}`}
          subHeading={`When you visit Bangladesh, make sure to explore these incredible spots
          that capture the essence of the country's rich history, vibrant
          culture, and stunning natural beauty.`}
        />
        <h2>
          <ul className="font-playwrite text-xl">
            {division.minorSpot?.map((place) => (
              <li className="list-disc py-1" key={place}>
                {place}
              </li>
            ))}
          </ul>
        </h2>
        <div data-aos="flip-up">
          <ImageSlider places={division} />
        </div>
        <div className="py-6">
          <h2
            data-aos="zoom-in-left"
            className="text-2xl text-[#d74a49] font-playwrite font-bold border-b-4 border-b-[#007f4e] w-max"
          >
            Why Visit Bangladesh?
          </h2>
          <div data-aos="zoom-out-up" className="py-4 font-popins text-white">
            <p className="p-6 shadow-xl rounded-xl bg-[#007f4e] ">
              Bangladesh, often overlooked by travelers, is a hidden gem in
              South Asia, offering an array of experiences that blend rich
              history, vibrant culture, stunning natural beauty, and warm
              hospitality. Here are compelling reasons why you should consider
              visiting Bangladesh. First, the rich cultural heritage of
              Bangladesh is evident in its impressive array of historical
              landmarks. The ancient city of Mahasthangarh, the majestic Lalbagh
              Fort, and the grand Ahsan Manzil tell the story of a nation with a
              rich and diverse history. Additionally, the country's religious
              diversity is showcased through its magnificent religious sites,
              including the Sixty Dome Mosque in Bagerhat, Buddhist monasteries
              in Paharpur, and Hindu temples in Puthia. In terms of natural
              beauty, Bangladesh does not disappoint. The Sundarbans Mangrove
              Forest, a UNESCO World Heritage site, is the largest mangrove
              forest in the world and a sanctuary for the elusive Royal Bengal
              Tiger. The country also boasts the world’s longest natural sea
              beach at Cox's Bazar and the pristine shores of Saint Martin's
              Island, a coral island known for its clear blue waters and serene
              beauty. The lush green landscapes of the countryside are dotted
              with tea gardens in Sylhet, picturesque hill tracts in Bandarban
              and Rangamati, and tranquil river landscapes. Bangladesh is also
              home to vibrant festivals that offer a deep dive into the local
              culture. Pohela Boishakh, the Bengali New Year, is celebrated with
              colorful processions, traditional music, dance, and food. Durga
              Puja is a major Hindu festival with elaborate rituals and cultural
              performances. Eid celebrations, including Eid-ul-Fitr and
              Eid-ul-Adha, are marked by prayers, feasts, and charitable acts,
              showcasing the joy and communal spirit of the country. The warm
              hospitality of Bangladeshis is another reason to visit. Known for
              their friendliness, locals warmly welcome visitors, treating them
              as honored guests. Unlike more tourist-heavy destinations,
              Bangladesh offers authentic travel experiences, allowing you to
              truly immerse yourself in the local way of life. The delicious
              cuisine of Bangladesh is a delightful mix of flavors, featuring
              dishes like biryani, hilsa fish, pithas (rice cakes), and a
              variety of spicy curries and sweets. The bustling street food
              scenes in cities like Dhaka and Chittagong offer local snacks and
              delicacies that are a must-try for food enthusiasts. For those
              seeking adventure and exploration, the hill tracts of Bandarban
              and Rangamati provide excellent trekking and hiking opportunities,
              with trails leading to waterfalls, tribal villages, and panoramic
              viewpoints. River cruises offer a serene experience of
              Bangladesh’s river systems, providing a unique perspective on the
              country’s landscape and way of life. Lastly, traveling in
              Bangladesh is relatively inexpensive compared to many other
              destinations, making it an ideal choice for budget-conscious
              travelers looking for rich experiences without breaking the bank.
              In conclusion, Bangladesh offers a unique blend of history,
              culture, natural beauty, and warm hospitality. Whether you are
              exploring its historical sites, enjoying its natural landscapes,
              participating in vibrant festivals, or simply savoring the local
              cuisine, Bangladesh promises a memorable and enriching travel
              experience. Come and discover the beauty and charm of Bangladesh,
              a country that truly has something for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionDetails;
