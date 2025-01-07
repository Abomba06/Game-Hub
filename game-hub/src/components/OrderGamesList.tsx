import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Children, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const PlatformSelector = () => {
  const [selectedFilter, setSelectedFilter] = useState("Relevance");
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}>
        Order by: {selectedFilter}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setSelectedFilter("Relevance")}>
          Relevance
        </MenuItem>
        <MenuItem onClick={() => setSelectedFilter("Name")}>Name</MenuItem>
        <MenuItem onClick={() => setSelectedFilter("Average Rating")}>
          Average Rating
        </MenuItem>
        <MenuItem onClick={() => setSelectedFilter("Release Date")}>
          Release Date
        </MenuItem>
        <MenuItem onClick={() => setSelectedFilter("Popularity")}>
          Popularity
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
