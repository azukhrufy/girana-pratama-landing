import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box as="footer" bg="#0B0B5E" color="white" pt={14} pb={6} mt={0}>
      {/* Top decorative gradient bar */}
      <Box
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: "-4px",
          left: 0,
          right: 0,
          h: "4px",
          bgGradient: "linear(to-r, #F05117, #10108A, #F05117)",
        }}
      />
      <Container maxW="7xl">
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "center", lg: "flex-start" }}
          gap={10}
        >
          {/* Left: Company Info */}
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            spacing={4}
            flex={1}
          >
            <Heading as="h3" fontSize="2xl" fontWeight="bold">
              <Text as="span" color="#F05117">Girana</Text>
              <Text as="span" color="white"> Pratama</Text>
            </Heading>
            <Text
              fontSize="sm"
              color="whiteAlpha.800"
              maxW="sm"
              textAlign={{ base: "center", lg: "left" }}
            >
              Mitra outsourcing terpercaya untuk kebutuhan SDM dan operasional
              bisnis Anda di seluruh Indonesia.
            </Text>

            <VStack
              align={{ base: "center", lg: "flex-start" }}
              spacing={3}
              mt={2}
            >
              <HStack spacing={3}>
                <Box color="#F05117">
                  <MapPin size={16} />
                </Box>
                <Text fontSize="sm" color="whiteAlpha.800">
                  Jl. Terusan Srimahi I No.32a, Bandung, Indonesia
                </Text>
              </HStack>
              <HStack spacing={3}>
                <Box color="#F05117">
                  <Mail size={16} />
                </Box>
                <Link
                  href="mailto:hr.girana@gmail.com"
                  fontSize="sm"
                  color="whiteAlpha.800"
                  _hover={{ color: "#F05117", textDecoration: "none" }}
                  transition="color 0.2s"
                >
                  hr.girana@gmail.com
                </Link>
              </HStack>
              <HStack spacing={3}>
                <Box color="#F05117">
                  <Phone size={16} />
                </Box>
                <Link
                  href="tel:+6285860400838"
                  fontSize="sm"
                  color="whiteAlpha.800"
                  _hover={{ color: "#F05117", textDecoration: "none" }}
                  transition="color 0.2s"
                >
                  085860400838
                </Link>
              </HStack>
            </VStack>
          </VStack>

          {/* Right: Google Maps */}
          <Box
            borderRadius="xl"
            overflow="hidden"
            flexShrink={0}
            w={{ base: "100%", md: "420px" }}
            h={{ base: "250px", md: "280px" }}
            boxShadow="dark-lg"
            border="2px solid"
            borderColor="whiteAlpha.200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.040638790015!2d107.59818355541991!3d-6.948987999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8860c42b5af%3A0xc614d0b0e9bb81f4!2sPT.Girana%20Pratama%20Mandiri!5e0!3m2!1sid!2sid!4v1775744119959!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi PT Girana Pratama Mandiri"
            />
          </Box>
        </Flex>

        {/* Copyright */}
        <Text
          fontSize="xs"
          textAlign="center"
          mt={10}
          pt={5}
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
          color="whiteAlpha.600"
        >
          &copy; {year} PT Girana Pratama Mandiri. Seluruh hak cipta
          dilindungi.
        </Text>
      </Container>
    </Box>
  );
}
