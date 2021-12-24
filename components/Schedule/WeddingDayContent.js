import Timeline from "../Timeline/Timeline";

const items = [
  {
    symbol: "⛪",
    title: "Church Ceremony",
    time: "12:00 - 14:00",
    locationLink:
      "https://www.google.com/maps/place/Franciscan+Monastery/@43.3742976,17.5891542,15z/data=!4m5!3m4!1s0x0:0xc31ae18cdb904a08!8m2!3d43.3742976!4d17.5891542",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    symbol: "🪗",
    title: "Lunch reception & mingle",
    time: "12:00 - 14:00",
    locationLink:
      "https://www.google.com/maps/place/Mari%C4%87a+Gaj/@43.3394715,17.4322487,15z/data=!4m2!3m1!1s0x0:0xeff230c777cb16e3?sa=X&ved=2ahUKEwirofe5s_z0AhUP-aQKHYQ2CDwQ_BJ6BAgzEAU",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    symbol: "🍽️",
    title: "Dinner",
    time: "12:00 - 14:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    symbol: "🎉",
    title: "Party",
    time: "12:00 - 14:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    symbol: "🚌",
    title: "Ride home",
    time: "12:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const WeddingDayContent = () => (
  <Timeline color="red.500" items={items} />
);
