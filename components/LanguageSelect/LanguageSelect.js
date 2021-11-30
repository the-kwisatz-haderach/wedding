import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/layout";
import swedishFlag from "../../images/sweden.png";
import croatianFlag from "../../images/croatia.png";

export default function LanguageSelect() {
  const { locale } = useRouter();
  return (
    <Flex
      py={4}
      justifyContent="center"
      position="relative"
      color="white"
      backgroundColor="rgba(245, 115, 115, 0.85)"
      letterSpacing="wider"
      textTransform="uppercase"
    >
      <Link replace href="/" locale="sv">
        <a className={`lang-link${locale === "sv" ? " selected" : ""}`}>
          <Image src={swedishFlag} width={25} height={25} alt="Swedish flag" />
          <span style={{ marginLeft: 8 }}>Svenska</span>
        </a>
      </Link>
      <Link replace href="/" locale="hr">
        <a className={`lang-link${locale === "hr" ? " selected" : ""}`}>
          <Image
            src={croatianFlag}
            width={25}
            height={25}
            alt="Croatian flag"
          />
          <span style={{ marginLeft: 8 }}>Hrvatski</span>
        </a>
      </Link>
    </Flex>
  );
}
