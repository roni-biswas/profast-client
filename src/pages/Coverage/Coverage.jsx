import BangladeshMap from "./BangladeshMap";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        We are available in 64 districts
      </h1>

      <BangladeshMap serviceCenters={serviceCenters} />
    </div>
  );
};

export default Coverage;
