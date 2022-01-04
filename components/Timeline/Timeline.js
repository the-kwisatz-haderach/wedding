import React, { memo } from "react";
import * as Timeline from "./components";

function TimelineComponent({
  items = [
    {
      title: "",
      description: "",
      symbol: "",
      time: "",
      locationLink: "",
    },
  ],
  startItem = "",
  endItem = "",
  color = "",
}) {
  return (
    <Timeline.Container>
      <Timeline.Edge color={color}>{startItem}</Timeline.Edge>
      {items.map((item, index) => (
        <Timeline.Regular key={index} {...item} />
      ))}
      <Timeline.Edge color={color} isLast>
        {endItem}
      </Timeline.Edge>
    </Timeline.Container>
  );
}

export default memo(TimelineComponent);
