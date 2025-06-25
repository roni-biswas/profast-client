import React from "react";
// date → “24 Jun 2025”
const formatDate = (isoString) =>
  new Date(isoString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const ParcelTable = ({ parcels, onView, onPay, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr className="text-base">
            <th>#</th>
            <th>Type</th>
            <th>Created&nbsp;At</th>
            <th>Cost&nbsp;(৳)</th>
            <th>Payment</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {parcels.map((p, i) => (
            <tr key={p._id}>
              <th>{i + 1}</th>

              {/* Document / Non-document */}
              <td>{p.type === "document" ? "Document" : "Non-Document"}</td>

              {/* Created date */}
              <td>{formatDate(p.creation_date)}</td>

              {/* Cost */}
              <td>{p.cost}</td>

              {/* Payment badge */}
              <td>
                <span
                  className={`badge badge-sm ${
                    p.payment_status === "paid"
                      ? "badge-success"
                      : "badge-error"
                  }`}
                >
                  {p.payment_status === "paid" ? "Paid" : "Unpaid"}
                </span>
              </td>

              {/* Action buttons */}
              <td className="flex gap-2 justify-center">
                <button
                  className="btn btn-info btn-xs"
                  onClick={() => onView?.(p)}
                >
                  View&nbsp;Details
                </button>
                {p.payment_status !== "paid" && (
                  <button
                    className="btn btn-success btn-xs"
                    onClick={() => onPay?.(p)}
                  >
                    Pay
                  </button>
                )}
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => onDelete?.(p)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParcelTable;
