import { Box, Heading, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Box
      as="header"
      color="gray.50"
      bg="purple.600"
      pt="90px"
      pb="198px"
      px="32px"
    >
      <Heading as="h1" fontSize="48px" fontWeight="800">
        Simple pricing for your business
      </Heading>
      <Text fontSize={"24px"} fontWeight="500" pt="16px">
        Plans that are carefully crafted to suit your business
      </Text>
    </Box>
  );
}
