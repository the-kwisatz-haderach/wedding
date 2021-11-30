import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { Spinner } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";
import RSVPForm from "./RSVPForm";
import { useForm } from "react-hook-form";

const RSVP_ID_KEY = "rsvp-id";

// RSVP deadline

export default function RSVP() {
  const { t } = useTranslation("rsvp");
  const { register, handleSubmit, watch, reset, setValue, control } = useForm({
    defaultValues: {
      willAttend: true,
      name: "",
      partnerName: "",
      numberOfChildren: 1,
      hasKids: false,
      allergies: "",
      wantsPhotos: false,
      wantsHotelArrangements: false,
      email: "",
      comments: "",
    },
  });
  const toast = useToast();
  const [hasResponded, setHasResponded] = useState(
    Boolean(
      typeof window !== "undefined" && window.localStorage.getItem(RSVP_ID_KEY)
    )
  );
  const [name, willAttend, hasKids, numberOfChildren] = watch([
    "name",
    "willAttend",
    "hasKids",
    "numberOfChildren",
  ]);

  const [isLoadingFormData, setIsLoadingFormData] = useState(false);
  const [hideForm, setHideForm] = useState(true);

  const onSubmit = handleSubmit(async (data, e) => {
    setIsLoadingFormData(true);
    e.preventDefault();
    const submitId = window.localStorage.getItem(RSVP_ID_KEY) || nanoid();
    const response = await fetch("/api/rsvp", {
      method: "POST",
      body: JSON.stringify({
        id: submitId,
        name: data.name,
        email: data.email,
        allergies: data.allergies,
        number_of_children: data.hasKids ? data.numberOfChildren : 0,
        partner_name: data.partnerName,
        status: data.willAttend,
        children: data.hasKids,
        photos: data.photos,
        hotel_arrangement: data.wantsHotelArrangements,
        message: data.comments,
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
  });

  const onGetRowData = async () => {
    setIsLoadingFormData(true);

    const response = await fetch(
      `/api/rsvp/${window.localStorage.getItem(RSVP_ID_KEY)}`
    );

    const data = await response.json();

    reset({
      willAttend: data.status === "TRUE",
      hasKids: data.children === "TRUE",
      email: data.email,
      partnerName: data.partner_name,
      allergies: data.allergies,
      numberOfChildren: Number.parseInt(data.number_of_children),
      wantsHotelArrangements: data.hotel_arrangement === "TRUE",
      comments: data.message,
      name: data.name,
      photos: data.photos === "TRUE",
    });

    setHideForm(false);
    setIsLoadingFormData(false);
  };

  /*
  Hide form
  - if has responded --> show update button and message
  - if has not responded --> allow update via code input / or new RSVP
  */

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
        <RSVPForm
          onSubmit={onSubmit}
          register={register}
          isLoading={isLoadingFormData}
          willAttend={willAttend}
          hasKids={hasKids}
          numberOfChildren={numberOfChildren}
          setWillAttend={(value) => setValue("willAttend", value)}
          name={name}
          control={control}
        />
      )}
    </Box>
  );
}
