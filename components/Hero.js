"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
} from "@chakra-ui/react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <Box as="section" id="beranda" pt={24} pb={16} bg="white" aria-label="Beranda">
      <Container maxW="7xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={10}
        >
          {/* Left: Text */}
          <AnimateOnScroll direction="left" flex={1}>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              color="#10108A"
              mb={4}
              lineHeight="tight"
            >
              Solusi Tenaga Kerja Profesional & Terpercaya untuk Bisnis Anda
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" mb={8}>
              Fokus pada inti bisnis Anda, biarkan PT Girana Pratama Mandiri yang
              mengelola kebutuhan SDM dan operasional harian Anda dengan standar
              kualitas tinggi.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Button
                bg="#F05117"
                color="white"
                size="lg"
                borderRadius="md"
                _hover={{ bg: "#d9430f" }}
              >
                Konsultasi Gratis
              </Button>
              <Button
                variant="outline"
                color="#10108A"
                borderColor="#10108A"
                size="lg"
                borderRadius="md"
                _hover={{ bg: "gray.50" }}
              >
                Pelajari Lebih Lanjut
              </Button>
            </Stack>
          </AnimateOnScroll>

          {/* Right: Image */}
          <AnimateOnScroll direction="right" delay={0.15} flex={1} display="flex" justifyContent="center">
            <Image
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80"
              alt="Professional office workers"
              borderRadius="xl"
              boxShadow="lg"
              w="100%"
              maxW="md"
              objectFit="cover"
            />
          </AnimateOnScroll>
        </Flex>
      </Container>
    </Box>
  );
}
