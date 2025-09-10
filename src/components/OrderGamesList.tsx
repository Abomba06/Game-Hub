import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  onSelectOrder: (order: string) => void;
}

const PlatformSelector = ({ gameQuery, onSelectOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currOrder = sortOrders.find(
    (order) => order.value === gameQuery.sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}>
        Order by: {currOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
