import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Box
      as="header"
      color="#F7FAFC"
      bg="#6B46C1"
      pt="90px"
      pb="198px"
      px="32px"
    >
      <Heading as="h1" fontSize="48px" fontWeight="800">
        Simple pricing for XXXXX xxxx
      </Heading>
      <Text fontSize={"24px"} fontWeight="500" pt="16px">
        Plans that are asdbaosdoasnoaisdnoasndoas aosndaosnda
      </Text>
    </Box>
  );
}
