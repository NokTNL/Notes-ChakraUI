import { Box, Flex, HStack, Spacer, Stack } from "@chakra-ui/react";

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
      {/* Because <Flex> is a flexbox, by default children will shrink if they exceed container's width, but won't span the whole container if smaller than container's width */}
      <Flex mt="60px" h="100px">
        <Box bg="green">A Box</Box>
        {/* <Spacer> can be added between children in <Flex> to push things to two sides of the parent container */}
        {/* If there are two <Spacer>'s in one <Flex>, they will share equal space */}
        {/* <Spacer> is set to `flex: 1` under the hood */}
        <Spacer />
        <Box bg="red">A Box</Box>
        <Box bg="blue" w="20%" />
        <Box bg="yellow" w="20%" />
      </Flex>

      {/* <Center> goes even further by defaulting its children to be centered (in both axes) within itself. <Square> and <Circle> are <Center>'s with special shapes. */}

      {/* <Stack> is a flexbox that adds even spacing between its children. Default flex direction is COLUMN
          Pass the "direction" prop ('row' | "column") to specify the direction, or use <HStack> or <VStack> which also have `align-items: center` by default */}
      {/* You can change the `spacing` as well */}
      {/* Compared to <Flex> + <Spacer>: if the children does not exceeds the <Stack>'s width, the children WON'T SPAN the whole container. See https://chakra-ui.com/docs/components/flex#flex-and-spacer-vs-grid-vs-stack */}
      <HStack mt="60px" spacing="50px" w="100%">
        <Box bg="green" w="10%" h="100px" />
        <Box bg="red" w="20%" h="300px" />
        <Box bg="blue" w="10%" h="100px" />
        <Box bg="yellow" w="10%" h="100px" />
        <Box bg="yellow" w="10%" h="100px" />
      </HStack>
    </>
  );
}

export default App;
