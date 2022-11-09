import { PropsWithChildren } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";

export function ListItem({ children }: PropsWithChildren) {
  return (
    <HStack as="li" spacing="20px">
      {/* using `as` prop of <Icon> disables all functionalities of <Icon> as far as I can tell, should not use it? */}
      <CheckIcon />
      <Text>{children}</Text>
    </HStack>
  );
}

export function Pricing() {
  return (
    <Flex
      as="section"
      maxW="994px"
      mx="auto"
      mt="-144px"
      borderRadius={"12px"}
      // Both children will overflow the rounded borders
      overflow="hidden"
      boxShadow={
        "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }
    >
      <Box bg="#F0EAFB" p="60px">
        <Heading as="h3" fontSize={"24px"} fontWeight="800">
          Premium PRO
        </Heading>
        <Text fontSize={"60px"} fontWeight="800">
          $329
        </Text>
        <Text color="#121923" fontSize={"18px"}>
          billed just once
        </Text>
        <Button colorScheme={"purple"} size="lg" mt="24px" w="282px" h="51px">
          Get Started
        </Button>
      </Box>
      <Flex
        direction="column"
        gap="24px"
        p="60px"
        bg="white"
        textAlign="start"
        fontSize={"18px"}
      >
        <Text>
          Access these features when you get this pricing package for your
          business.
        </Text>
        <VStack as="ul" alignItems="flex-start" spacing="20px">
          <ListItem>International calling and messaging API</ListItem>
          <ListItem>Additional phone numbers</ListItem>
          <ListItem>Automated messages via Zapier</ListItem>
          <ListItem>24/7 support and consulting</ListItem>
        </VStack>
      </Flex>
    </Flex>
  );
}
