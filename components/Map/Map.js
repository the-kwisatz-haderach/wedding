import React, { useEffect, useMemo, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Pin } from "./Pin";
import { Box, Container } from "@chakra-ui/layout";
import Carousel from "../Carousel/Carousel";
import maricaGaj from "../../images/marica-gaj.jpeg";
import church from "../../images/church.jpeg";
import sirokiBrijeg from "../../images/siroki-brijeg.jpeg";
import { useTranslation } from "next-i18next";

const defaultProps = {
  center: [43.387034744817086, 17.59122205063004],
  zoom: 12,
};

const options = {
  panControl: true,
  mapTypeControl: false,
  scrollwheel: false,
  // draggable: false,
  fullscreenControl: false,
};

const createLocations = (t) => [
  {
    lat: 43.387034744817086,
    lng: 17.59122205063004,
    title: t("parentsTitle"),
    description: t("parentsDescription"),
    image: sirokiBrijeg,
  },
  {
    lat: 43.387034744817086,
    lng: 17.59122205063004,
    title: t("churchTitle"),
    description: t("churchDescription"),
    image: church,
  },
  {
    lat: 43.3394754,
    lng: 17.43006,
    title: t("partyTitle"),
    description: t("partyDescription"),
    image: maricaGaj,
  },
];

export default function Map() {
  const { t } = useTranslation("destination");
  const locations = useMemo(() => createLocations(t), [t]);
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [mapCenter, setMapCenter] = useState(defaultProps.center);

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
          onChangeIndex={setSelectedLocation}
          items={locations}
          activeIndex={selectedLocation}
        />
      </Container>
      <div
        style={{
          height: "40vh",
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
