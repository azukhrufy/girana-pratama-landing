"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', 'Roboto', sans-serif`,
    body: `'Inter', 'Roboto', sans-serif`,
  },
  colors: {
    brand: {
      orange: "#F05117",
      navy: "#10108A",
    },
    orange: {
      500: "#F05117",
    },
    navy: {
      900: "#10108A",
    },
  },
});

export default function ChakraProviders({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
