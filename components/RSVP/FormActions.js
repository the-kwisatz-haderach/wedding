import React from "react";
import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { useFormState } from "react-hook-form";

export default function FormActions({ onCancel, isLoading, control }) {
  const { t } = useTranslation(["rsvp", "common"]);
  const { isValid } = useFormState({ control });
  return (
    <Flex justifyContent="space-between">
      <Button onClick={onCancel}>
        <ChevronLeftIcon fontSize="2xl" />
        {t("cancel")}
      </Button>
      <Button
        disabled={isLoading || !isValid}
        loadingText={t("loading", { ns: "common" })}
        isLoading={isLoading}
        type="submit"
        colorScheme="red"
      >
        {t("submitResponse")}
      </Button>
    </Flex>
  );
}
