import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      colorScheme={score >= 90 ? "green" : score >= 80 ? "yellow" : "red"}
      paddingX={2}
      fontSize={"sm"}
      borderRadius={5}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
