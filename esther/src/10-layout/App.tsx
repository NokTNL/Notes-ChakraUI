import { Box, Flex, HStack, Stack } from "@chakra-ui/react";

function App() {
  return (
    <>
      {/* - <Box> is the most abstract component in Chakra, acts like a generic container. Renders a <div> by default
          - You pass in "style props" to style components inline */}
      <Box bg="green" w="50%" h="100px">
        This is a half-width {"<Box>"}, 100px tall
      </Box>
      {/* If no width and height are specified, defaulted to the standard behaviour of <div> (100% width, content height) */}
      <Box bg="red">This is box without width/height specified</Box>
      {/* - You can pass in `as` props to render it to a different HTML element */}

      {/* <Flex> is simply a <Box> defaulted with `display: flex` and have some shorthands for flexbox properties */}
      <Flex align="center" direction="column">
        <Box bg="green" w="40%" h="100px" />
        <Box bg="red" w="40%" h="100px" />
        <Box bg="blue" w="40%" h="100px" />
        <Box bg="yellow" w="40%" h="100px" />
      </Flex>

      {/* <Stack> is a <Flex> that adds spacing between its children. Default flex direction is COLUMN
          Pass the "direction" prop ('row' | "column") to specify the direction, or use <HStack> or <VStack> which also have `align-items: center` by default */}
      {/* You can change the `spacing` as well */}
      <HStack spacing="50px">
        <Box bg="green" w="40%" h="100px" />
        <Box bg="red" w="50%" h="300px" />
        <Box bg="blue" w="40%" h="100px" />
        <Box bg="yellow" w="40%" h="100px" />
        <Box bg="yellow" w="40%" h="100px" />
      </HStack>
    </>
  );
}

export default App;
