import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import "@fontsource/alex-brush/400.css";
import "@fontsource/open-sans/400.css";
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
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
