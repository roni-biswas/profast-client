import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useParams } from "react-router";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { parcelId } = useParams();
  console.log(parcelId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (!card) {
      // CardElement has not been initialized.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("Payment Method ", paymentMethod);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 rounded-xl shadow-md bg-white w-full max-w-md mx-auto"
    >
      <CardElement className="p-2 border rounded" />
      <button
        type="submit"
        disabled={!stripe}
        className="btn btn-primary mt-3 text-black w-full"
      >
        Pay for parcel pickup
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default PaymentForm;
