import React from "react";
import Timeline from "../Timeline/Timeline";

const items = [
  {
    symbol: "🏠",
    title: "Lorem ipsum",
    time: "12:00 - 14:00",
    locationLink:
      "https://www.google.com/maps/place/43%C2%B023'12.7%22N+17%C2%B035'28.4%22E/@43.3868739,17.5906666,19z/data=!3m1!4b1!4m2!3m1!1s0x0:0x53f8461e8b3bd597",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export function BeforeWeddingContent() {
  return <Timeline color="red.500" items={items} />;
}
