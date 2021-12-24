import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Divider, Flex, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { Button } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useTranslation } from "react-i18next";
import RSVPForm from "./RSVPForm";
import { useForm } from "react-hook-form";
import Indicator from "../Indicator";

const RSVP_ID_KEY = "rsvp_id";

export default function RSVP() {
  const { locale } = useRouter();
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
    mode: "onChange",
  });
  const toast = useToast();
  const [rsvpId, setRsvpId] = useState("");
  const [name, willAttend, hasKids] = watch(["name", "willAttend", "hasKids"]);
  const [isLoadingFormData, setIsLoadingFormData] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setRsvpId(
      new URLSearchParams(window.location.search.slice(1)).get(RSVP_ID_KEY) ||
        window.localStorage.getItem(RSVP_ID_KEY)
    );
  }, []);

  const onSubmit = handleSubmit(async (data, e) => {
    setIsLoadingFormData(true);
    e.preventDefault();
    const id = rsvpId || nanoid();
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        body: JSON.stringify({
          id,
          locale,
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
        setRsvpId(id);
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
  };

  const onGetRowData = async () => {
    try {
      setIsLoadingFormData(true);
      const res = await fetch(`/api/rsvp/${rsvpId}`);
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
        setShowForm(true);
      } else {
        toast({
          title: t("missingResponseIdTitle", { ns: "common" }),
          description: t("missingResponseIdDescription", { ns: "common" }),
          status: "warning",
          position: "top",
          variant: "subtle",
          duration: 4000,
          isClosable: true,
        });
        setRsvpId("");
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
          <Flex
            flexDir="column"
            hidden={!Boolean(rsvpId)}
            justifyContent="center"
            alignItems="center"
          >
            <Indicator />
            <Text mb={5}>{t("thankYouForResponding")}</Text>
            <Button
              isLoading={isLoadingFormData}
              loadingText={t("loading", { ns: "common" })}
              disabled={isLoadingFormData}
              onClick={onGetRowData}
            >
              {t("updateResponse")}
            </Button>
          </Flex>
          <Flex hidden={Boolean(rsvpId)} flexDir="column">
            <Flex alignItems="center" justifyContent="center">
              <Button
                variant="solid"
                colorScheme="red"
                disabled={isLoadingFormData}
                onClick={onNewRsvp}
              >
                {t("rsvpCTA")}
              </Button>
              <Text ml={4}>{t("letUsKnow")}</Text>
            </Flex>
            <Flex alignItems="center" my={6}>
              <Divider mr={4} />
              {t("or", { ns: "common" })}
              <Divider ml={4} />
            </Flex>
            <Box>
              <Text fontSize="sm">{t("differentDeviceMessage")}</Text>
            </Box>
          </Flex>
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
