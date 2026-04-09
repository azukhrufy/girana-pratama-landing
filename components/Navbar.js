"use client";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      w="100%"
      zIndex={50}
      transition="all 0.3s"
      bg={scrolled ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.4)"}
      backdropFilter="blur(12px)"
      boxShadow={scrolled ? "md" : "none"}
    >
      <Flex
        as="nav"
        maxW="7xl"
        mx="auto"
        px={4}
        py={2}
        align="center"
        justify="space-between"
      >
        {/* Left: Brand + Desktop Links */}
        <HStack spacing={10}>
          <Text fontWeight="bold" fontSize="xl" letterSpacing="tight">
            <Text as="span" color="#F05117">Girana</Text>
            <Text as="span" color="#10108A"> Pratama</Text>
          </Text>

          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontWeight="medium"
                fontSize="md"
                color="#10108A"
                _hover={{ color: "#F05117", textDecoration: "none" }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}
          </HStack>
        </HStack>

        {/* Right: Desktop CTA */}
        <Box display={{ base: "none", md: "block" }}>
          <Button
            bg="#F05117"
            color="white"
            size="md"
            borderRadius="md"
            _hover={{ bg: "#d9430f" }}
          >
            Hubungi Kami
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={<Menu />}
            variant="ghost"
            aria-label="Buka menu"
            onClick={onOpen}
            fontSize="2xl"
          />
        </Box>

        {/* Mobile Drawer */}
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody display="flex" flexDir="column" gap={4} pt={12}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  fontSize="lg"
                  fontWeight="medium"
                  py={2}
                  onClick={onClose}
                  _hover={{ color: "#F05117", textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                bg="#F05117"
                color="white"
                size="md"
                borderRadius="md"
                mt={4}
                _hover={{ bg: "#d9430f" }}
              >
                Hubungi Kami
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
}
