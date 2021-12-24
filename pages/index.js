import { useMemo } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Box } from "@chakra-ui/layout";
import Sections from "../components/Sections";
import { createSections } from "../lib/sections";
import { useTranslation } from "react-i18next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export default function Home() {
  const { t } = useTranslation("common");
  const sections = useMemo(() => createSections(t), [t]);
  return (
    <>
      <Head>
        <title>Dunja & Gustaf | Wedding Site</title>
        <meta name="description" content="Our Wedding Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Header />
        <Sections sections={sections} />
        <Footer />
      </Box>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "rsvp",
        "schedule",
        "travel",
      ])),
      // Will be passed to the page component as props
    },
  };
}
