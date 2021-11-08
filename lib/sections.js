import { Flex, Text } from "@chakra-ui/layout";
import Map from "../components/Map/Map";
import RSVP from "../components/RSVP";
import rsvp from "../images/wedding-invite.png";
import location from "../images/wedding-location-2.png";
import phrases from "../images/book.png";
import photos from "../images/camera.png";
import plan from "../images/calendar_day.png";
import travel from "../images/travelling.png";
import Phrases from "../components/Phrases/Phrases";

export const createSections = (t) => [
  {
    id: "rsvp",
    label: t("rsvp"),
    imgSrc: rsvp,
    contained: true,
    content: <RSVP />,
  },
  {
    id: "venue",
    label: t("venue"),
    imgSrc: location,
    contained: false,
    content: <Map />,
  },
  {
    id: "phrases",
    label: t("phrases"),
    imgSrc: phrases,
    contained: true,
    content: <Phrases />,
  },
  {
    id: "travel",
    label: t("travel"),
    imgSrc: travel,
    contained: true,
    content: (
      <Flex h="100px" justifyContent="center" alignItems="center">
        <Text fontSize="lg">Coming soon...</Text>
      </Flex>
    ),
  },
  {
    id: "plan",
    label: t("weddingDay"),
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
    label: t("photos"),
    imgSrc: photos,
    contained: false,
    content: (
      <Flex h="100px" justifyContent="center" alignItems="center">
        <Text fontSize="lg">Coming soon...</Text>
      </Flex>
    ),
  },
];
