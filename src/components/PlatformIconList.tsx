import React from "react";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: { id: number; slug: string }[];
}

const iconMap: Record<string, React.ElementType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  web: BsGlobe,
};

const PlatformIconList = ({ platforms }: Props) => (
  <HStack marginY={1}>
    {(platforms ?? []).map((p) => {
      const IconComp = iconMap[p.slug];
      return IconComp ? (
        <Icon as={IconComp} key={p.id} color="gray.500" />
      ) : null;
    })}
  </HStack>
);

export default PlatformIconList;
