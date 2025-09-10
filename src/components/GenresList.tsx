import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const genres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>Oops! Something went wrong :/</Text>;
  return (
    <List>
      <Button
        variant={"ghost"}
        onClick={() => onSelectGenre(null)}
        fontWeight={selectedGenre === null ? "bold" : "normal"}
      >
        <Text fontSize={"lg"}>All Genres</Text>
      </Button>
      {isLoading && genres.map((d) => <GenreSkeleton key={d} />)}
      {data?.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              justifyContent={"space-between"}
              variant={"ghost"}
              onClick={() => onSelectGenre(genre)}
            >
              <Image
                src={getCroppedImageURL(genre.image_background)}
                boxSize={"32px"}
                borderRadius={8}
              />
              <Text fontSize="lg" variant="ghost" paddingX={1}>
                {genre.name}
              </Text>
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List> 
  );
};

export default GenresList;
