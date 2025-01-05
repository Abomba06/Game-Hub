import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import usePlatform from "../hooks/usePlatform";
import { useState } from "react";

const PlatformSelector = () => {
  const { data } = usePlatform();
  const [selectedPlatform, setSelectedPlatform] = useState("Platforms");
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}>
        {selectedPlatform}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={(p) => setSelectedPlatform(platform.name)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
