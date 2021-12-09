import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "./Pin";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";

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
    description: "lorem ipsum",
  },
  {
    lat: 43.387034744817086,
    lng: 17.59122205063004,
    title: "The Parents",
    description: "lorem ipsum",
  },
  {
    lat: 43.37495449452526,
    lng: 17.588585935105154,
    title: "The Church",
    description: "lorem ipsum",
  },
];

const LocationCard = ({ title, description, isSelected, onSelect }) => {
  return (
    <Box
      onClick={onSelect}
      p={8}
      flex={1}
      boxShadow={isSelected ? "0px 12px 30px -5px #00000026" : undefined}
      borderColor="gray.200"
      transition="box-shadow 0.3s ease-in-out"
      borderRadius={10}
      borderWidth={1}
      borderStyle="solid"
      cursor="pointer"
      sx={{
        "&:not(:last-child)": {
          marginRight: "1rem",
        },
      }}
    >
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </Box>
  );
};

export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [mapCenter, setMapCenter] = useState(defaultProps.center);
  const onSelectLocation = (locationIndex) => {
    setSelectedLocation(locationIndex);
    setMapCenter([locations[locationIndex].lat, locations[locationIndex].lng]);
  };
  return (
    <Box>
      <Container
        maxW="container.lg"
        overflowX="auto"
        pt={4}
        pb={10}
        className="hide-scrollbar"
      >
        <Flex justifyContent="space-between">
          {locations.map(({ title, description }, locationIndex) => (
            <LocationCard
              key={title}
              title={title}
              description={description}
              onSelect={() => onSelectLocation(locationIndex)}
              isSelected={selectedLocation === locationIndex}
            />
          ))}
        </Flex>
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
                onSelectLocation(locationIndex);
              }}
            />
          ))}
        </GoogleMapReact>
      </div>
    </Box>
  );
}
