import { Input } from "@chakra-ui/react";

interface Props {
  setGameName: (searchedValue: string) => void;
}

const SearchBar = ({ setGameName }: Props) => {
  return (
    <>
      <Input
        placeholder="Search..."
        borderRadius={100}
        onChange={(p) => setGameName(p.target.value)}
      ></Input>
    </>
  );
};

export default SearchBar;
