import React, { useState } from "react";
import { SimpleGrid, Box, Flex, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { Spinner } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Collapse } from "@chakra-ui/transition";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Checkbox,
  Input,
  SliderFilledTrack,
  Slider,
  SliderTrack,
  SliderThumb,
  Textarea,
  FormControl,
  FormLabel,
  Button,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";

const RSVP_ID_KEY = "rsvp-id";

// RSVP deadline

export default function RSVP() {
  const { t } = useTranslation("rsvp");
  const toast = useToast();
  const [hasResponded, setHasResponded] = useState(
    Boolean(
      typeof window !== "undefined" && window.localStorage.getItem(RSVP_ID_KEY)
    )
  );
  const [isLoadingFormData, setIsLoadingFormData] = useState(false);
  const [hideForm, setHideForm] = useState(hasResponded);
  const [willAttend, setWillAttend] = useState("TRUE");
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [hasKids, setHasKids] = useState(false);
  const [wantsPhotos, setWantsPhotos] = useState(false);
  const [wantsHotelArrangements, setWantsHotelArrangements] = useState(false);
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const onSubmit = async (e) => {
    setIsLoadingFormData(true);
    e.preventDefault();
    const submitId = window.localStorage.getItem(RSVP_ID_KEY) || nanoid();
    const response = await fetch("/api/rsvp", {
      method: "POST",
      body: JSON.stringify({
        id: submitId,
        name,
        guests,
        email,
        status: willAttend,
        children: hasKids,
        photos: wantsPhotos,
        hotel_arrangement: wantsHotelArrangements,
        message: comments,
      }),
    });

    if (response.ok) {
      window.localStorage.setItem(RSVP_ID_KEY, submitId);
      setHasResponded(true);
      setHideForm(true);
    }
    setIsLoadingFormData(false);
    toast({
      title: t("toastTitle"),
      description: willAttend
        ? t("positiveToastDescription")
        : t("negativeToastDescription"),
      status: "success",
      position: "top",
      variant: "subtle",
      duration: 4000,
      isClosable: true,
    });
  };

  const onGetRowData = async () => {
    setIsLoadingFormData(true);

    const response = await fetch(
      `/api/rsvp/${window.localStorage.getItem(RSVP_ID_KEY)}`
    );

    const data = await response.json();

    setWillAttend(data.status);
    setHasKids(data.children === "TRUE");
    setEmail(data.email);
    setGuests(Number.parseInt(data.guests));
    setWantsHotelArrangements(data.hotel_arrangement === "TRUE");
    setComments(data.message);
    setName(data.name);
    setWantsPhotos(data.photos === "TRUE");
    setHideForm(false);
    setIsLoadingFormData(false);
  };

  return (
    <Box
      backgroundColor="white"
      borderRadius={20}
      boxShadow="5px 20px 40px -15px #00000026"
      pt={10}
      pb={14}
      px={[6, 10]}
    >
      {hideForm ? (
        <Flex justifyContent="center" alignItems="center" flexDir="column">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            h="60px"
            w="60px"
            borderRadius="50%"
            backgroundColor="green.300"
            mb={5}
          >
            {isLoadingFormData ? (
              <Spinner color="white" />
            ) : (
              <CheckIcon color="white" fontSize="xl" />
            )}
          </Box>
          <Text mb={5}>{t("thankYouForResponding")}</Text>
          <Button disabled={isLoadingFormData} onClick={onGetRowData}>
            {isLoadingFormData ? "Loading..." : t("updateResponse")}
          </Button>
        </Flex>
      ) : (
        <form onSubmit={onSubmit}>
          <SimpleGrid spacing="6" w="100%">
            <RadioGroup
              size="lg"
              value={willAttend}
              onChange={setWillAttend}
              marginBottom="1rem"
            >
              <Radio marginRight={10} value="TRUE">
                {t("positiveAttendanceLabel")}
              </Radio>
              <Radio value="FALSE">{t("negativeAttendanceLabel")}</Radio>
            </RadioGroup>
            <FormControl id="name">
              <FormLabel fontWeight="bold" fontSize="sm">
                {t("nameLabel")}
              </FormLabel>
              <Input
                isRequired
                size="lg"
                autoComplete="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <Collapse in={willAttend} animateOpacity>
              <FormControl id="guests">
                <FormLabel fontSize="sm" fontWeight="bold">
                  {t("guestsLabel")}
                </FormLabel>
                <Box display="flex" w="100%">
                  <NumberInput
                    size="lg"
                    display={["none", "block"]}
                    w={["100%", "initial"]}
                    mr={[0, "2rem"]}
                    value={guests}
                    min={0}
                    max={10}
                    onChange={(value) => setGuests(value)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    size="lg"
                    min={0}
                    max={10}
                    focusThumbOnChange={false}
                    value={guests}
                    onChange={(value) => setGuests(value)}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb fontSize="sm" boxSize="32px">
                      {guests}
                    </SliderThumb>
                  </Slider>
                </Box>
              </FormControl>
              <Checkbox
                marginTop="1rem"
                marginRight="1rem"
                flex={1}
                isChecked={hasKids}
                size="lg"
                onChange={() => setHasKids((curr) => !curr)}
              >
                {t("childrenLabel")}
              </Checkbox>
              <Checkbox
                marginTop="1rem"
                flex={1}
                size="lg"
                isChecked={wantsHotelArrangements}
                onChange={() => setWantsHotelArrangements((curr) => !curr)}
              >
                {t("hotelArrangementLabel")}
              </Checkbox>
              <Box>
                <Checkbox
                  marginTop="1rem"
                  flex={1}
                  size="lg"
                  isChecked={wantsPhotos}
                  onChange={() => setWantsPhotos((curr) => !curr)}
                >
                  {t("photosLabel")}
                </Checkbox>
                <Collapse in={wantsPhotos} animateOpacity>
                  <FormControl id="email">
                    <FormLabel fontWeight="bold" fontSize="sm">
                      {t("emailLabel")}
                    </FormLabel>
                    <Input
                      isRequired={wantsPhotos}
                      size="lg"
                      autoComplete="email"
                      placeholder="email@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                </Collapse>
              </Box>
            </Collapse>
            <FormControl id="message">
              <FormLabel fontSize="sm" fontWeight="bold">
                {t("messageLabel")}
              </FormLabel>
              <Textarea
                size="lg"
                colorScheme="red"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </FormControl>
            <Flex justifyContent="flex-end">
              <Button
                disabled={isLoadingFormData}
                type="submit"
                colorScheme="red"
              >
                {isLoadingFormData ? (
                  <>
                    <Spinner color="white" mr={2} />
                    Loading...
                  </>
                ) : (
                  t("submitResponse")
                )}
              </Button>
            </Flex>
          </SimpleGrid>
        </form>
      )}
    </Box>
  );
}
