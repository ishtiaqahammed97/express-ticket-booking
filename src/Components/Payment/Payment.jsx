import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("PUBLISH_KEY");

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
