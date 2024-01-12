import Button from "../../ui/Button";
import propTypes from "prop-types";
import { useCheckout } from "./useChekout";
function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckingOut } = useCheckout();
  //Delete the console log (unused vars)
  console.log(bookingId);

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkOut(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

CheckoutButton.propTypes = {
  bookingId: propTypes.number,
};
export default CheckoutButton;
