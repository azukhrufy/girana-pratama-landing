"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { Shield, ShoppingBag, FileText, Headphones, Truck } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const layanan = [
  {
    title: "Marketing & Sales",
    desc: "Penyediaan tenaga pemasar lapangan, telesales, hingga supervisor area untuk penetrasi pasar produk retail dan jasa.",
    icon: ShoppingBag,
  },
  {
    title: "Administrasi & Office Support",
    desc: "Dukungan staf administrasi, sekretaris, dan pengolah data profesional untuk efisiensi operasional kantor.",
    icon: FileText,
  },
  {
    title: "Customer Service & Frontliner",
    desc: "Layanan garda depan termasuk resepsionis dan staf layanan pelanggan untuk menjaga citra positif perusahaan.",
    icon: Headphones,
  },
  {
    title: "Tenaga Operasional & Logistik",
    desc: "Penyediaan operator produksi, kurir, hingga staf gudang untuk mendukung rantai pasok industri.",
    icon: Truck,
  },
  {
    title: "Kebersihan & Keamanan",
    desc: "Layanan cleaning service dan personel keamanan terlatih untuk menjaga aset serta kenyamanan lingkungan kerja.",
    icon: Shield,
  },
];

export default function LayananKami() {
  return (
    <Box as="section" id="layanan" py={16} bg="white" aria-label="Layanan Kami">
      <Container maxW="7xl">
        <AnimateOnScroll direction="up">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="#10108A"
            mb={10}
            textAlign="center"
          >
            Layanan Kami
          </Heading>
        </AnimateOnScroll>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          {layanan.map((item, idx) => {
            const LucideIcon = item.icon;
            return (
              <AnimateOnScroll key={item.title} direction="up" delay={idx * 0.1}>
                <Card
                  shadow="md"
                  borderRadius="lg"
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{ transform: "translateY(-8px)", shadow: "xl" }}
                  h="100%"
                >
                  <CardHeader pb={0}>
                    <VStack spacing={2}>
                      <Box color="#10108A">
                        <LucideIcon size={36} />
                      </Box>
                      <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        color="#10108A"
                        textAlign="center"
                      >
                        {item.title}
                      </Text>
                    </VStack>
                  </CardHeader>
                  <CardBody>
                    <Text color="gray.600" textAlign="center">
                      {item.desc}
                    </Text>
                  </CardBody>
                </Card>
              </AnimateOnScroll>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
