import React from "react";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { useFormState } from "react-hook-form";

export default function FormActions({ onCancel, isLoading, control }) {
  const { t } = useTranslation("rsvp");
  const { isDirty } = useFormState({ control });
  console.log(isDirty);
  return (
    <Flex justifyContent="space-between">
      <Button onClick={onCancel}>
        <ChevronLeftIcon fontSize="2xl" />
        Bakåt
      </Button>
      <Button
        disabled={isLoading || isDirty}
        loadingText="Loading..."
        isLoading={isLoading}
        type="submit"
        colorScheme="red"
      >
        {t("submitResponse")}
      </Button>
    </Flex>
  );
}
