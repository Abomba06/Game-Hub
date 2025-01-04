import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();
  const genres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>Oops! Something went wrong :/</Text>;
  return (
    <List>
      {isLoading && genres.map((d) => <GenreSkeleton />)}
      {data?.map((d) => (
        <ListItem key={d.id} paddingY={1}>
          <HStack>
            <Image
              src={getCroppedImageURL(d.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Text fontSize="lg">{d.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
