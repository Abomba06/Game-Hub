import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

const GenresList = () => {
  const { data } = useGenres();

  return (
    <List>
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
