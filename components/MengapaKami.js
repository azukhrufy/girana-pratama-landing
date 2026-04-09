"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  HStack,
  VStack,
  Divider,
  Image,
} from "@chakra-ui/react";
import {
  BadgeCheck,
  CheckCircle,
  Clock,
  Headphones,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Proses Seleksi Ketat",
    desc: "Setiap tenaga kerja melalui proses seleksi dan pelatihan yang ketat untuk memastikan kualitas terbaik.",
  },
  {
    icon: CheckCircle,
    title: "Sesuai Regulasi Ketenagakerjaan",
    desc: "Kami selalu mematuhi peraturan dan regulasi ketenagakerjaan yang berlaku di Indonesia.",
  },
  {
    icon: Clock,
    title: "Manajemen Efisien",
    desc: "Pengelolaan SDM dan operasional yang efisien untuk mendukung kelancaran bisnis Anda.",
  },
  {
    icon: Headphones,
    title: "Dukungan 24/7",
    desc: "Tim support kami siap membantu Anda kapan saja, 24 jam sehari, 7 hari seminggu.",
  },
];

export default function MengapaKami() {
  return (
    <Box as="section" py={16} bg="gray.50" aria-label="Mengapa Memilih Kami">
      <Container maxW="7xl">
        <AnimateOnScroll direction="up">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="#10108A"
            mb={12}
            textAlign="center"
          >
            Mengapa Memilih Kami
          </Heading>
        </AnimateOnScroll>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 10, lg: 16 }}
          align="center"
        >
          {/* Left: Image */}
          <AnimateOnScroll direction="left" flex={1} w="100%">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Tim profesional bekerja sama"
              borderRadius="xl"
              boxShadow="lg"
              w="100%"
              h={{ base: "300px", lg: "100%" }}
              minH={{ lg: "460px" }}
              objectFit="cover"
            />
          </AnimateOnScroll>

          {/* Right: Benefits list */}
          <AnimateOnScroll direction="right" delay={0.15} flex={1} w="100%">
            <VStack spacing={0} align="stretch" w="100%">
            {benefits.map((item, idx) => {
              const LucideIcon = item.icon;
              return (
                <Box key={item.title}>
                  <HStack
                    spacing={5}
                    align="flex-start"
                    py={6}
                  >
                    {/* Big Number */}
                    <Text
                      fontSize="5xl"
                      fontWeight="extrabold"
                      color="#F05117"
                      lineHeight="1"
                      minW="60px"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </Text>

                    {/* Content */}
                    <VStack align="flex-start" spacing={1} flex={1}>
                      <HStack spacing={2}>
                        <Box color="#F05117">
                          <LucideIcon size={20} />
                        </Box>
                        <Text
                          fontWeight="bold"
                          fontSize="lg"
                          color="#10108A"
                        >
                          {item.title}
                        </Text>
                      </HStack>
                      <Text color="gray.600" fontSize="md">
                        {item.desc}
                      </Text>
                    </VStack>
                  </HStack>

                  {idx < benefits.length - 1 && (
                    <Divider borderColor="gray.300" />
                  )}
                </Box>
              );
            })}
            </VStack>
          </AnimateOnScroll>
        </Flex>
      </Container>
    </Box>
  );
}
