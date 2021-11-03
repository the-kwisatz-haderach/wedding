import { Flex, Text } from "@chakra-ui/layout";
import Map from "../components/Map/Map";
import RSVP from "../components/RSVP";
import rsvp from "../images/wedding-invitation.png";
import location from "../images/wedding-location.png";
import photos from "../images/camera.png";
import plan from "../images/wedding-day.png";

export const sections = [
  {
    id: "rsvp",
    label: "RSVP",
    imgSrc: rsvp,
    contained: true,
    content: <RSVP />,
  },
  {
    id: "venue",
    label: "Venue",
    imgSrc: location,
    contained: false,
    content: <Map />,
  },
  {
    id: "plan",
    label: "Wedding Day Plan",
    imgSrc: plan,
    contained: false,
    content: (
      <Flex h="100px" justifyContent="center" alignItems="center">
        <Text fontSize="lg">Coming soon...</Text>
      </Flex>
    ),
  },
  {
    id: "photos",
    label: "Photos",
    imgSrc: photos,
    contained: false,
    content: (
      <Flex h="100px" justifyContent="center" alignItems="center">
        <Text fontSize="lg">Coming soon...</Text>
      </Flex>
    ),
  },
];
