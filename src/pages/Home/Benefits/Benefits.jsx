import benefit1 from "../../../assets/live-tracking.png";
import benefit2 from "../../../assets/safe-delivery.png";
import benefit3 from "../../../assets/safe-delivery.png";

const benefits = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: benefit1,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: benefit2,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: benefit3,
  },
];

const Benefits = () => {
  return (
    <div className="mb-24 border-y-2 border-dashed border-gray-300 dark:border-gray-600 py-12">
      <div className="space-y-8">
        {benefits.map((item) => (
          <div
            key={item.id}
            className="card card-side bg-base-100 dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700"
          >
            {/* Left image */}
            <figure className="w-32 md:w-48 flex-shrink-0 p-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-contain"
              />
            </figure>

            {/* Vertical Dashed Divider */}
            <div
              className="w-px bg-dashed bg-gray-300 dark:bg-gray-600 mx-2 hidden md:block"
              style={{ borderLeft: "2px dashed gray" }}
            ></div>

            {/* Right content */}
            <div className="card-body">
              <h3 className="card-title text-xl md:text-2xl text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
