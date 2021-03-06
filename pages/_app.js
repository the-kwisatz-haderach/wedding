import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import "@fontsource/alex-brush";
import "@fontsource/open-sans";
import "../styles/globals.scss";

const theme = extendTheme({
  fonts: {
    heading: "Alex Brush",
    body: "Open Sans",
  },
  colors: {
    red: {
      100: "#FF5F5F",
    },
  },
  components: {
    Table: {
      parts: ["th", "caption"],
      baseStyle: {
        th: {
          fontFamily: "body",
          fontWeight: "bold",
        },
        caption: {
          fontFamily: "body",
          fontWeight: "bold",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
