import { Flex, Text } from "@chakra-ui/layout";
import Map from "../components/Map/Map";
import RSVP from "../components/RSVP";
import rsvp from "../images/wedding-invitation.png";
import location from "../images/wedding-location.png";
import phrases from "../images/wedding-card.png";
import photos from "../images/camera.png";
import plan from "../images/wedding-day.png";
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
