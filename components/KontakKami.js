"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { MapPin, Mail, Phone } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function KontakKami() {
  return (
    <Box as="section" id="kontak" py={16} bg="white" aria-label="Kontak Kami">
      <Container maxW="7xl">
        <AnimateOnScroll direction="up">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="#10108A"
            mb={4}
            textAlign="center"
          >
            Kontak Kami
          </Heading>
          <Text
            fontSize="lg"
            color="gray.600"
            textAlign="center"
            mb={12}
            maxW="2xl"
            mx="auto"
          >
            Hubungi kami untuk konsultasi gratis atau informasi lebih lanjut
            mengenai layanan outsourcing kami.
          </Text>
        </AnimateOnScroll>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={10}
          align="flex-start"
        >
          {/* Contact Info */}
          <AnimateOnScroll direction="left" flex={1} w="100%">
            <VStack
              spacing={6}
              align="flex-start"
              bg="gray.50"
              p={8}
              borderRadius="xl"
              w="100%"
            >
            <Heading as="h3" fontSize="xl" color="#10108A" mb={2}>
              Informasi Kontak
            </Heading>

            <HStack spacing={4} align="flex-start">
              <Box color="#F05117" mt={1}>
                <MapPin size={22} />
              </Box>
              <VStack align="flex-start" spacing={0}>
                <Text fontWeight="semibold" color="#10108A">
                  Alamat
                </Text>
                <Text color="gray.600" fontSize="sm">
                  Jl. Terusan Srimahi I No.32a, Kota Bandung, Jawa Barat,
                  Indonesia
                </Text>
              </VStack>
            </HStack>

            <HStack spacing={4} align="flex-start">
              <Box color="#F05117" mt={1}>
                <Mail size={22} />
              </Box>
              <VStack align="flex-start" spacing={0}>
                <Text fontWeight="semibold" color="#10108A">
                  Email
                </Text>
                <Text color="gray.600" fontSize="sm">
                  hr.girana@gmail.com
                </Text>
              </VStack>
            </HStack>

            <HStack spacing={4} align="flex-start">
              <Box color="#F05117" mt={1}>
                <Phone size={22} />
              </Box>
              <VStack align="flex-start" spacing={0}>
                <Text fontWeight="semibold" color="#10108A">
                  Telepon
                </Text>
                <Text color="gray.600" fontSize="sm">
                  085860400838
                </Text>
              </VStack>
            </HStack>
          </VStack>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll direction="right" delay={0.15} flex={1.5} w="100%">
            <Box
              bg="gray.50"
              p={8}
              borderRadius="xl"
              w="100%"
            >
            <Heading as="h3" fontSize="xl" color="#10108A" mb={6}>
              Kirim Pesan
            </Heading>
            <VStack as="form" spacing={5} align="stretch">
              <HStack spacing={4} flexDir={{ base: "column", sm: "row" }}>
                <FormControl>
                  <FormLabel fontSize="sm" color="gray.700">
                    Nama Lengkap
                  </FormLabel>
                  <Input
                    placeholder="Nama Anda"
                    bg="white"
                    borderColor="gray.300"
                    _hover={{ borderColor: "gray.400" }}
                    _focus={{
                      borderColor: "#F05117",
                      boxShadow: "0 0 0 1px #F05117",
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm" color="gray.700">
                    Email
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="email@perusahaan.com"
                    bg="white"
                    borderColor="gray.300"
                    _hover={{ borderColor: "gray.400" }}
                    _focus={{
                      borderColor: "#F05117",
                      boxShadow: "0 0 0 1px #F05117",
                    }}
                  />
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel fontSize="sm" color="gray.700">
                  Subjek
                </FormLabel>
                <Input
                  placeholder="Perihal pesan Anda"
                  bg="white"
                  borderColor="gray.300"
                  _hover={{ borderColor: "gray.400" }}
                  _focus={{
                    borderColor: "#F05117",
                    boxShadow: "0 0 0 1px #F05117",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel fontSize="sm" color="gray.700">
                  Pesan
                </FormLabel>
                <Textarea
                  placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                  rows={5}
                  bg="white"
                  borderColor="gray.300"
                  _hover={{ borderColor: "gray.400" }}
                  _focus={{
                    borderColor: "#F05117",
                    boxShadow: "0 0 0 1px #F05117",
                  }}
                />
              </FormControl>

              <Button
                bg="#F05117"
                color="white"
                size="lg"
                borderRadius="md"
                _hover={{ bg: "#d9430f" }}
                alignSelf={{ base: "stretch", sm: "flex-start" }}
                px={10}
              >
                Kirim Pesan
              </Button>
            </VStack>
          </Box>
          </AnimateOnScroll>
        </Flex>
      </Container>
    </Box>
  );
}
