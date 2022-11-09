import { HStack, Icon, StackProps } from "@chakra-ui/react";
import { ElementType, PropsWithChildren } from "react";

type FeatureProps = {
  icon: ElementType;
};

export function Feature({ icon, children }: PropsWithChildren<FeatureProps>) {
  return (
    <HStack>
      <Icon as={icon} />
    </HStack>
  );
}
