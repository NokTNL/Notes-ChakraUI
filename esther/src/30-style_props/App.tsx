import { Text, Square, Center, Button } from "@chakra-ui/react";

export default function App() {
  return (
    <div className="App">
      {/* All Chakra components have 'style props' that use shorthands to add CSS properties to it, apart from their own special props */}
      {/* Chakra also have a DEFAULT THEME that aliases speical color and size names to certain values: https://chakra-ui.com/docs/styled-system/theme*/}
      <Center bg="blackAlpha.50" w="100vw" h="100vh">
        <Square bg="green" size="200px" flexDirection="column" gap="10px">
          <Text color="white" fontSize="lg">
            This is some text
          </Text>
          {/* Button has `colorScheme` and `variant` props from theme */}
          {/* To use CSS pseudo-class selector, use e.g. '_hover' */}
          <Button
            colorScheme="whiteAlpha"
            variant="solid"
            _hover={{ bg: "teal.50", color: "black" }}
          >
            A button
          </Button>
        </Square>
      </Center>
    </div>
  );
}
