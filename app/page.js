"use client";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TentangKami from "../components/TentangKami";
import LayananKami from "../components/LayananKami";
import MengapaKami from "../components/MengapaKami";
import KontakKami from "../components/KontakKami";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box as="main" display="flex" flexDir="column" flex={1} w="100%">
        <Hero />
        <TentangKami />
        <LayananKami />
        <MengapaKami />
        <KontakKami />
      </Box>
      <Footer />
    </>
  );
}
