import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ParcelTable from "./ParcelTable";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleView = (p) => console.log("view →", p);
  const handlePay = (id) => {
    navigate(`/dashboard/payment/${id}`);
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete this parcel?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it",
    });
    if (confirm.isConfirmed) {
      try {
        await axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.result.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Parcel removed successfully.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            refetch(); // refetch parcels after deletion
          }
        });
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Could not delete parcel.", "error");
      }
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Parcels</h1>
      <ParcelTable
        parcels={parcels}
        onView={handleView}
        onPay={handlePay}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MyParcels;
