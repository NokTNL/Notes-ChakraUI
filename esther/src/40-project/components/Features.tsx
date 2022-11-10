import { HStack, Text } from "@chakra-ui/react";
import { ComponentType, PropsWithChildren, SVGProps } from "react";
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "../assets/Icons";
import { Icon as ChakraIcon } from "@chakra-ui/react";

const FeatureText = ({ children }: PropsWithChildren) => {
  return (
    <Text fontSize="18px" fontWeight="700" textAlign="left">
      {children}
    </Text>
  );
};

const FeatureIcon = ({
  Icon,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}) => {
  return <ChakraIcon as={Icon} boxSize="48px" />;
};

const FeatureItem = ({ children }: PropsWithChildren) => {
  return <HStack spacing="24px">{children}</HStack>;
};

export function Features() {
  return (
    <HStack maxW="1024px" mx="auto" mt="60px" mb="32px" spacing="48px">
      <FeatureItem>
        <FeatureIcon Icon={MoneyBackGuaranteeIcon} />
        <FeatureText>30 days money back Guarantee</FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon Icon={HassleFreeIcon} />
        <FeatureText>Not setup fees 100% hassle-free</FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureIcon Icon={MonthlySubscriptionIcon} />
        <FeatureText>No monthly subscription Pay once and for all</FeatureText>
      </FeatureItem>
    </HStack>
  );
}
