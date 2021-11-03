import React from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "./Pin";
import styles from "./styles";

const defaultProps = {
  center: {
    lat: 43.3526625,
    lng: 17.5108039,
  },
  zoom: 12,
};

const options = {
  panControl: false,
  mapTypeControl: false,
  scrollwheel: false,
};

const locations = [
  {
    lat: 43.34374435687136,
    lng: 17.4321523533025,
    title: "The Party",
    content: <p>Hello</p>,
  },
  {
    lat: 43.382555357836196,
    lng: 17.592567158037884,
    title: "The Parents",
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
