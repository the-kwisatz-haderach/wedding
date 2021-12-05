import React from "react";
import { SimpleGrid, Box, Flex, Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import { CheckIcon, ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import { Spinner } from "@chakra-ui/react";
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
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Controller } from "react-hook-form";

export default function RSVPForm({
  onSubmit,
  onCancel,
  register,
  isLoading,
  willAttend,
  setWillAttend,
  hasKids,
  name,
  control,
}) {
  const { t } = useTranslation("rsvp");
  return (
    <form onSubmit={onSubmit}>
      <input
        {...register("hp-name")}
        style={{
          opacity: "0",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <SimpleGrid spacing="6" w="100%">
        <Flex flexDir="column">
          <FormLabel fontWeight="bold" fontSize="sm">
            Vi närvarar
          </FormLabel>
          <Flex flexDir={["column", "row"]}>
            <Button
              mb={[1, 0]}
              mr={[0, 1]}
              colorScheme="green"
              leftIcon={willAttend && <CheckIcon />}
              variant={willAttend ? "solid" : "outline"}
              w="100%"
              onClick={() => setWillAttend(true)}
            >
              {t("positiveAttendanceLabel")}
            </Button>
            <Button
              colorScheme="gray"
              leftIcon={!willAttend && <CheckIcon />}
              variant={!willAttend ? "solid" : "outline"}
              w="100%"
              onClick={() => setWillAttend(false)}
            >
              {t("negativeAttendanceLabel")}
            </Button>
          </Flex>
        </Flex>
        <FormControl id="email">
          <FormLabel fontWeight="bold" fontSize="sm">
            {t("emailLabel")}
          </FormLabel>
          <Input
            {...register("email")}
            isRequired
            size="lg"
            required
            autoComplete="email"
            placeholder="email@gmail.com"
          />
        </FormControl>
        <Flex>
          <FormControl id="name">
            <FormLabel fontWeight="bold" fontSize="sm">
              {t("nameLabel")}
            </FormLabel>
            <Input
              {...register("name")}
              isRequired
              size="lg"
              autoComplete="name"
              placeholder="Name"
            />
          </FormControl>
          <Flex my={2} mx={3} alignItems="flex-end">
            <Text fontSize="2xl">&</Text>
          </Flex>
          <FormControl id="partner_name">
            <FormLabel fontWeight="bold" fontSize="sm">
              {t("partnerNameLabel")}
            </FormLabel>
            <Input
              {...register("partner_name")}
              size="lg"
              autoComplete="name"
              placeholder="Plus 1"
              disabled={name === ""}
            />
          </FormControl>
        </Flex>
        <Collapse in={willAttend} animateOpacity>
          <Flex justifyContent="space-between" mt={1} mb={5}>
            <Checkbox {...register("wantsHotelArrangements")} size="lg">
              {t("hotelArrangementLabel")} 🏨
            </Checkbox>
            <Checkbox {...register("photos")} size="lg">
              {t("photosLabel")} 📷
            </Checkbox>
            <Checkbox {...register("hasKids")} size="lg">
              {t("childrenLabel")} 🧒
            </Checkbox>
          </Flex>
          <Collapse in={hasKids} animateOpacity>
            <Controller
              name="numberOfChildren"
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormControl id="numberOfChildren">
                  <FormLabel fontSize="sm" fontWeight="bold">
                    {t("numberOfChildrenLabel")}
                  </FormLabel>
                  <Box display="flex" w="100%">
                    <NumberInput
                      value={value}
                      onChange={(_, value) => onChange(value)}
                      size="lg"
                      display={["none", "block"]}
                      w={["100%", "initial"]}
                      mr={[0, "2rem"]}
                      min={0}
                      max={10}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <Slider
                      value={value}
                      onChange={onChange}
                      flex="1"
                      size="lg"
                      min={0}
                      max={10}
                      focusThumbOnChange={false}
                    >
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                      <SliderThumb fontSize="sm" boxSize="32px">
                        {value}
                      </SliderThumb>
                    </Slider>
                  </Box>
                </FormControl>
              )}
            />
          </Collapse>
          <FormControl my={5} id="allergies">
            <FormLabel fontSize="sm" fontWeight="bold">
              {t("allergiesLabel")}
            </FormLabel>
            <Input {...register("allergies")} size="lg" />
          </FormControl>
          <FormControl id="message">
            <FormLabel fontSize="sm" fontWeight="bold">
              {t("messageLabel")}
            </FormLabel>
            <Textarea {...register("comments")} size="lg" />
          </FormControl>
        </Collapse>
        <Flex justifyContent="space-between">
          <Button onClick={onCancel}>
            <ChevronLeftIcon fontSize="2xl" />
            Bakåt
          </Button>
          <Button
            disabled={isLoading}
            loadingText="Loading..."
            isLoading={isLoading}
            type="submit"
            colorScheme="red"
          >
            {t("submitResponse")}
          </Button>
        </Flex>
      </SimpleGrid>
    </form>
  );
}
