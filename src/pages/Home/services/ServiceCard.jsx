const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 text-center transition duration-300 hover:bg-lime-700 dark:hover:bg-lime-700 shadow-md hover:shadow-lg">
      <div className="mb-4 flex justify-center text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
