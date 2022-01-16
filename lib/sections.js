import { Flex, Text } from "@chakra-ui/layout";
import Map from "../components/Map/Map";
import RSVP from "../components/RSVP";
import rsvp from "../images/wedding-invite.png";
import location from "../images/wedding-location-2.png";
import phrases from "../images/book.png";
import photos from "../images/camera.png";
import plan from "../images/calendar_day.png";
import travel from "../images/travelling.png";
import dressCode from "../images/wedding-suit.png";
import Phrases from "../components/Phrases/Phrases";
import Travel from "../components/Travel/Travel";
import Schedule from "../components/Schedule/Schedule";
import DressCode from "../components/DressCode/DressCode";

export const createSections = (t) => [
  {
    id: "rsvp",
    label: t("rsvp"),
    imgSrc: rsvp,
    contained: true,
    Content: RSVP,
    preamble: t("rsvpIntro"),
  },
  {
    id: "dressCode",
    label: t("dressCode"),
    imgSrc: dressCode,
    contained: true,
    Content: DressCode,
    preamble: t("dressCodeIntro"),
  },
  {
    id: "venue",
    label: t("venue"),
    imgSrc: location,
    contained: false,
    Content: Map,
    preamble: t("venueIntro"),
  },
  {
    id: "plan",
    label: t("weddingDay"),
    imgSrc: plan,
    contained: true,
    Content: Schedule,
    preamble: t("weddingDayIntro"),
  },
  {
    id: "phrases",
    label: t("phrases"),
    imgSrc: phrases,
    contained: true,
    Content: Phrases,
    preamble: t("phrasesIntro"),
  },
  {
    id: "photos",
    label: t("photos"),
    imgSrc: photos,
    contained: false,
    Content: () => (
      <Flex h="100px" justifyContent="center" alignItems="center">
        <Text fontSize="lg">Coming soon...</Text>
      </Flex>
    ),
    preamble: t("photosIntro"),
  },
  {
    id: "travel",
    label: t("travel"),
    imgSrc: travel,
    contained: true,
    Content: Travel,
    preamble: t("travelIntro"),
  },
];
