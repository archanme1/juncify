import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { IJunction } from "@/lib/database/models/junction.model";
import { Button } from "../ui/button";
import { checkoutOrder } from "@/lib/actions/order.actions";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout = ({
  junction,
  userId,
}: {
  junction: IJunction;
  userId: string;
}) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const onCheckout = async () => {
    const order = {
      junctionTitle: junction.title,
      junctionId: junction._id,
      price: junction.price,
      isFree: junction.isFree,
      buyerId: userId,
    };

    await checkoutOrder(order);
  };

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {junction.isFree || junction.price === "" ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
};

export default Checkout;
