import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const serviceCenters = useLoaderData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Extract unique regions
  const uniqueRegions = [...new Set(serviceCenters.map((w) => w.region))];
  // Get districts by region
  const getDistrictsByRegion = (region) =>
    serviceCenters.filter((w) => w.region === region).map((w) => w.district);

  const parcelType = watch("type");
  const senderRegion = watch("sender_region");
  const receiverRegion = watch("receiver_region");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">Send a Parcel</h2>
          <p className="text-gray-500">Fill in the details below</p>
        </div>

        {/* Parcel Info */}
        <div className="border p-4 rounded-xl shadow-md space-y-4">
          <h3 className="font-semibold text-xl">Parcel Info</h3>
          <div className="space-y-4">
            {/* Parcel Name */}
            <div>
              <label className="label">Parcel Name</label>
              <input
                {...register("title", { required: true })}
                className="input input-bordered w-full"
                placeholder="Describe your parcel"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">Parcel name is required</p>
              )}
            </div>

            {/* Type */}
            <div>
              <label className="label">Type</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="document"
                    {...register("type", { required: true })}
                    className="radio"
                  />
                  Document
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="non-document"
                    {...register("type", { required: true })}
                    className="radio"
                  />
                  Non-Document
                </label>
              </div>
              {errors.type && (
                <p className="text-red-500 text-sm">Type is required</p>
              )}
            </div>

            {/* Weight */}
            <div>
              <label className="label">Weight (kg)</label>
              <input
                type="number"
                step="0.1"
                {...register("weight")}
                disabled={parcelType !== "non-document"}
                className={`input input-bordered w-full ${
                  parcelType !== "non-document"
                    ? "bg-gray-100 cursor-not-allowed"
                    : ""
                }`}
                placeholder="Enter weight"
              />
            </div>
          </div>
        </div>

        {/* Sender & Receiver Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sender Info */}
          <div className="border p-4 rounded-xl shadow-md space-y-4">
            <h3 className="font-semibold text-xl">Sender Info</h3>
            <div className="grid grid-cols-1 gap-4">
              <input
                {...register("sender_name", { required: true })}
                className="input input-bordered w-full"
                placeholder="Name"
              />
              <input
                {...register("sender_contact", { required: true })}
                className="input input-bordered w-full"
                placeholder="Contact"
              />
              <select
                {...register("sender_region", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Region</option>
                {uniqueRegions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              <select
                {...register("sender_center", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Service Center</option>
                {getDistrictsByRegion(senderRegion).map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              <input
                {...register("sender_address", { required: true })}
                className="input input-bordered w-full"
                placeholder="Address"
              />
              <textarea
                {...register("pickup_instruction", { required: true })}
                className="textarea textarea-bordered w-full"
                placeholder="Pickup Instruction"
              />
            </div>
          </div>

          {/* Receiver Info */}
          <div className="border p-4 rounded-xl shadow-md space-y-4">
            <h3 className="font-semibold text-xl">Receiver Info</h3>
            <div className="grid grid-cols-1 gap-4">
              <input
                {...register("receiver_name", { required: true })}
                className="input input-bordered w-full"
                placeholder="Name"
              />
              <input
                {...register("receiver_contact", { required: true })}
                className="input input-bordered w-full"
                placeholder="Contact"
              />
              <select
                {...register("receiver_region", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Region</option>
                {uniqueRegions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              <select
                {...register("receiver_center", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Service Center</option>
                {getDistrictsByRegion(receiverRegion).map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              <input
                {...register("receiver_address", { required: true })}
                className="input input-bordered w-full"
                placeholder="Address"
              />
              <textarea
                {...register("delivery_instruction", { required: true })}
                className="textarea textarea-bordered w-full"
                placeholder="Delivery Instruction"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="btn btn-primary text-black">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
