import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const DivisionDetails = () => {
  const { name } = useParams();
  const { isLoading, data: division = [] } = useQuery({
    queryKey: ["division"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/divisions/${name}`);
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
    <div className="">
      <div className="container max-sm:w-11/12 mx-auto h-screen flex justify-center items-center">
        <h2>{division.name}</h2>
      </div>
    </div>
  );
};

export default DivisionDetails;
