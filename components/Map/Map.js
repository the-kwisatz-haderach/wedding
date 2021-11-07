import React from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "./Pin";
import styles from "./styles";

const defaultProps = {
  center: {
    lat: 43.3662828,
    lng: 17.5254679,
  },
  zoom: 12,
};

const options = {
  panControl: false,
  mapTypeControl: false,
  scrollwheel: false,
  // draggable: false,
  fullscreenControl: false,
};

const locations = [
  {
    lat: 43.3394754,
    lng: 17.43006,
    title: "The Party",
    content: <p>Hello</p>,
  },
  {
    lat: 43.387034744817086,
    lng: 17.59122205063004,
    title: "The Parents",
    content: <p>Hello</p>,
  },
  {
    lat: 43.37495449452526,
    lng: 17.588585935105154,
    title: "The Church",
    content: <p>Hello</p>,
  },
];

export default function Map() {
  return (
    // Important! Always set the container height explicitly
    <div
      style={{
        height: "60vh",
        width: "100%",
        borderTop: "1px solid rgba(0,0,0,0.2)",
        borderBottom: "1px solid rgba(0,0,0,0.2)",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={options}
      >
        {locations.map((location) => (
          <Pin
            key={location.title}
            lat={location.lat}
            lng={location.lng}
            text={location.content}
            title={location.title}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
