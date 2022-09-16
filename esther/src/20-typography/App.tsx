import { Heading, Text } from "@chakra-ui/react";

export default function App() {
  return (
    <div className="App">
      {/* Font size in Chakra goes from 2xs --> 9xl; or you can pass in CSS units like 'rem' and 'px' */}
      {/* `noOfLines` controls the maximum of lines it can show. Exceeding that then it will trucate into ellipsis */}
      <Text fontSize="xl" noOfLines={2}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi laborum
        maiores possimus iste unde omnis qui veritatis hic, praesentium quis
        doloremque sint alias quibusdam aspernatur rem quaerat quo vel. Iusto!
      </Text>
      {/* <Heading>: can provide `fontSize` as well. For semantics, just use `as; render h2 by default */}
      <Heading as="h3" fontSize="9xl">
        I am a h3 heading
      </Heading>
    </div>
  );
}
