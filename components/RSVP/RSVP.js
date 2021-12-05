import React, { useState } from "react";
import { Box, Divider, Flex, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { Button, Input } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";
import RSVPForm from "./RSVPForm";
import { useForm } from "react-hook-form";
import Indicator from "../Indicator/Indicator";

const RSVP_ID_KEY = "rsvp-id";

// RSVP deadline

export default function RSVP() {
  const { t } = useTranslation(["rsvp", "common"]);
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
  const [responseId, setResponseId] = useState("");
  const [hasResponded, setHasResponded] = useState(
    Boolean(
      typeof window !== "undefined" && window.localStorage.getItem(RSVP_ID_KEY)
    )
  );
  const [name, willAttend, hasKids] = watch(["name", "willAttend", "hasKids"]);

  const [isLoadingFormData, setIsLoadingFormData] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const onSubmit = handleSubmit(async (data, e) => {
    setIsLoadingFormData(true);
    e.preventDefault();
    const id = window.localStorage.getItem(RSVP_ID_KEY) || nanoid();
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        body: JSON.stringify({
          id,
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
        window.localStorage.setItem(RSVP_ID_KEY, id);
        setHasResponded(true);
        setShowForm(false);
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
      }
    } finally {
      setIsLoadingFormData(false);
    }
  });

  const onNewRsvp = () => {
    setShowForm(true);
    setResponseId("");
  };

  const onGetRowData = async (responseId) => {
    try {
      const id = responseId || window.localStorage.getItem(RSVP_ID_KEY);
      setIsLoadingFormData(true);
      const res = await fetch(`/api/rsvp/${id}`);
      if (res.ok) {
        const data = await res.json();
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
        setResponseId("");
        setShowForm(true);
      } else {
        toast({
          title: t("missingResponseIdTitle"),
          description: t("missingResponseIdDescription"),
          status: "warning",
          position: "top",
          variant: "subtle",
          duration: 4000,
          isClosable: true,
        });
      }
    } finally {
      setIsLoadingFormData(false);
    }
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
      {!showForm ? (
        <Flex justifyContent="center" alignItems="center" flexDir="column">
          {hasResponded ? (
            <>
              <Indicator isLoading={isLoadingFormData} />
              <Text mb={5}>{t("thankYouForResponding")}</Text>
              <Button disabled={isLoadingFormData} onClick={onGetRowData}>
                {isLoadingFormData ? "Loading..." : t("updateResponse")}
              </Button>
            </>
          ) : (
            <Flex flexDir="column">
              <Flex alignItems="center" justifyContent="center">
                <Button
                  variant="solid"
                  colorScheme="red"
                  disabled={isLoadingFormData}
                  onClick={onNewRsvp}
                >
                  {t("rsvpCTA")}
                </Button>
                <Text ml={2}>{t("letUsKnow")}</Text>
              </Flex>
              <Flex alignItems="center" my={6}>
                <Divider mr={4} />
                or
                <Divider ml={4} />
              </Flex>
              <Box>
                <Text fontSize="sm">{t("differentDeviceMessage")}</Text>
              </Box>
            </Flex>
          )}
        </Flex>
      ) : (
        <RSVPForm
          onSubmit={onSubmit}
          onCancel={() => setShowForm(false)}
          register={register}
          isLoading={isLoadingFormData}
          willAttend={willAttend}
          hasKids={hasKids}
          setWillAttend={(value) => setValue("willAttend", value)}
          name={name}
          control={control}
        />
      )}
    </Box>
  );
}
