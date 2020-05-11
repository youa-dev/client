const dateHelper = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "September",
  ],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

export default function generateDate(timestamp) {
  const d = new Date(timestamp);
  const month = dateHelper.months[d.getUTCMonth()];
  const day = dateHelper.days[d.getUTCDay()];
  const year = d.getUTCFullYear();
  const date = d.getUTCDate().toString();
  return `${day}, ${month} ${date}, ${year}`;
}
