import { Box, Container, Heading, Text } from "@chakra-ui/react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function TentangKami() {
  return (
    <Box as="section" id="tentang" py={16} bg="gray.50" aria-label="Tentang Kami">
      <Container maxW="4xl" textAlign="center">
        <AnimateOnScroll direction="up">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="#10108A"
            mb={4}
          >
            Tentang Kami
          </Heading>
          <Text fontSize="lg" color="gray.600">
            PT Girana Pratama Mandiri adalah perusahaan outsourcing terkemuka di
            Indonesia yang berkomitmen pada kepatuhan, kualitas, dan efisiensi.
            Kami menyediakan solusi SDM dan operasional yang andal untuk mendukung
            pertumbuhan bisnis Anda.
          </Text>
        </AnimateOnScroll>
      </Container>
    </Box>
  );
}
