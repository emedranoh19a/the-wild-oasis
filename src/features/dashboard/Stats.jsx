/* eslint-disable no-unused-vars */
//TODO remove the ESLINT ignore for the entire file
import propTypes from "prop-types";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((accum, item) => accum + item.totalPrice, 0);
  const checkins = confirmedStays.length;
  const occupationRatio =
    confirmedStays.reduce((accum, item) => accum + item.numNights, 0) /
    (cabinCount * numDays);
  //occupancy rate = number of checked in nights / all available cabins
  const occupation = occupationRatio * 100;
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation) + "%"}
      />
    </>
  );
}

Stats.propTypes = {
  bookings: propTypes.array,
  confirmedStays: propTypes.array,
  numDays: propTypes.number,
  cabinCount: propTypes.number,
};
