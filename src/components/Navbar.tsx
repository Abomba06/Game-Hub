import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  setGameName: (searchedValue: string | null) => void;
}

const Navbar = ({ setGameName }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" borderRadius={15} />
      <SearchBar setGameName={setGameName} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
