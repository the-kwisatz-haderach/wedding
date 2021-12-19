import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "./Pin";
import { Box, Container } from "@chakra-ui/layout";
import Carousel from "../Carousel/Carousel";
import maricaGaj from "../../images/marica-gaj.jpeg";
import church from "../../images/church.jpeg";
import sirokiBrijeg from "../../images/siroki-brijeg.jpeg";

const defaultProps = {
  center: [43.3662828, 17.51],
  zoom: 11,
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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: maricaGaj,
    link: "https://goo.gl/maps/ZvaiiD4hyDD78sfq6",
  },
  {
    lat: 43.387034744817086,
    lng: 17.59122205063004,
    title: "The Parents",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: sirokiBrijeg,
    link: "https://goo.gl/maps/ZvaiiD4hyDD78sfq6",
  },
  {
    lat: 43.37495449452526,
    lng: 17.588585935105154,
    title: "The Church",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: church,
    link: "https://google.se",
  },
];

export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [mapCenter, setMapCenter] = useState(defaultProps.center);

  const goToPrev = () => {
    setSelectedLocation((current) =>
      current === 0 ? locations.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setSelectedLocation((current) => (current + 1) % locations.length);
  };

  useEffect(() => {
    setMapCenter([
      locations[selectedLocation].lat,
      locations[selectedLocation].lng,
    ]);
  }, [selectedLocation]);

  return (
    <Box mb="-6rem">
      <Container maxWidth="container.xl">
        <Carousel
          onNext={goToNext}
          onPrevious={goToPrev}
          items={locations}
          activeIndex={selectedLocation}
        />
      </Container>
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
          center={mapCenter}
          defaultZoom={defaultProps.zoom}
          options={options}
        >
          {locations.map((location, locationIndex) => (
            <Pin
              key={location.title}
              lat={location.lat}
              lng={location.lng}
              isSelected={selectedLocation === locationIndex}
              onSelect={() => {
                setSelectedLocation(locationIndex);
              }}
            />
          ))}
        </GoogleMapReact>
      </div>
    </Box>
  );
}
