import Timeline from "../Timeline/Timeline";

const items = [
  {
    symbol: "🍲",
    title: "Lunch",
    time: "12:00 - 14:00",
    locationLink: "http://google.se",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const DayAfterWeddingContent = () => (
  <Timeline color="red.500" items={items} />
);
