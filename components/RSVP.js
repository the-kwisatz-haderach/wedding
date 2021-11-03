import React, { useEffect, useState } from "react";
import { SimpleGrid, Box, Flex, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import { CheckIcon, UnlockIcon } from "@chakra-ui/icons";
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
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";

const RSVP_ID_KEY = "rsvp-id";

// RSVP deadline

export default function RSVP() {
  const [hasResponded, setHasResponded] = useState(
    Boolean(
      typeof window !== "undefined" && window.localStorage.getItem(RSVP_ID_KEY)
    )
  );
  const [isLoadingFormData, setIsLoadingFormData] = useState(false);
  const [hideForm, setHideForm] = useState(hasResponded);
  const [willAttend, setWillAttend] = useState(true);
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
  };

  const onGetRowData = async () => {
    setIsLoadingFormData(true);

    const response = await fetch(
      `/api/rsvp/${window.localStorage.getItem(RSVP_ID_KEY)}`
    );

    const data = await response.json();

    setWillAttend(data.status === "TRUE");
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

  if (hideForm) {
    return (
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
        <Text mb={5}>Thank you for responding!</Text>
        <Button disabled={isLoadingFormData} onClick={onGetRowData}>
          {isLoadingFormData ? "Loading..." : "Update response"}
        </Button>
      </Flex>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <SimpleGrid spacing="4" w="100%">
        <Checkbox
          flex={1}
          isChecked={willAttend}
          onChange={() => setWillAttend((curr) => !curr)}
          size="lg"
          marginBottom="1rem"
        >
          Yes, we will attend.
        </Checkbox>
        <FormControl id="name">
          <FormLabel fontWeight="bold" fontSize="sm">
            Name(s)
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
              Total Guests
            </FormLabel>
            <Box display="flex" w="100%">
              <NumberInput
                size="lg"
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
                display={["none", "block"]}
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
            flex={1}
            isChecked={hasKids}
            size="lg"
            onChange={() => setHasKids((curr) => !curr)}
          >
            We&apos;re bringing the kids.
          </Checkbox>
          <Box>
            <Checkbox
              marginTop="1rem"
              flex={1}
              size="lg"
              isChecked={wantsPhotos}
              onChange={() => setWantsPhotos((curr) => !curr)}
            >
              We&apos;d like copies of the wedding photos
            </Checkbox>
            <Collapse in={wantsPhotos} animateOpacity>
              <FormControl id="email">
                <FormLabel fontWeight="bold" fontSize="sm">
                  Email
                </FormLabel>
                <Input
                  isRequired={wantsPhotos}
                  size="lg"
                  autoComplete="email"
                  placeholder="your.email@here.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Collapse>
          </Box>
          <Checkbox
            marginTop="1rem"
            flex={1}
            size="lg"
            isChecked={wantsHotelArrangements}
            onChange={() => setWantsHotelArrangements((curr) => !curr)}
          >
            We&apos;d like help with hotel arrangements
          </Checkbox>
        </Collapse>
        <FormControl id="message">
          <FormLabel fontSize="sm" fontWeight="bold">
            Message
          </FormLabel>
          <Textarea
            size="lg"
            colorScheme="red"
            value={comments}
            placeholder="Here is a sample placeholder"
            onChange={(e) => setComments(e.target.value)}
          />
        </FormControl>
        <Flex justifyContent="flex-end">
          <Button disabled={isLoadingFormData} type="submit" colorScheme="red">
            {isLoadingFormData ? (
              <>
                <Spinner color="white" mr={2} />
                Loading...
              </>
            ) : (
              "Send response"
            )}
          </Button>
        </Flex>
      </SimpleGrid>
    </form>
  );
}
