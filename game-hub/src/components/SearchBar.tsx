import { Input } from "@chakra-ui/react";

interface Props {
  setGameName: (searchedValue: string) => void;
}

const SearchBar = ({ setGameName }: Props) => {
  return (
    <>
      <Input
        placeholder="Search..."
        width={40}
        marginX={3}
        onChange={(p) => setGameName(p.target.value)}
      ></Input>
    </>
  );
};

export default SearchBar;
