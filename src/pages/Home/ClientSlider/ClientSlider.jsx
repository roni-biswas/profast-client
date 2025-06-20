import Marquee from "react-fast-marquee";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import start_people from "../../../assets/brands/start-people 1.png";
import start from "../../../assets/brands/start.png";

const logos = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  start_people,
  start,
];

const ClientSlider = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10 rounded-2xl mb-24">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        We've helped thousands of sales teams
      </h2>
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-8 flex items-center justify-center w-32 h-16"
          >
            <img
              src={logo}
              alt={`Client ${index + 1}`}
              className="max-h-full object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ClientSlider;
