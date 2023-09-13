import { Box } from "@chakra-ui/react";
import bg from "../assets/bg.mp4";

const Background = () => {
  return (
    <Box
      position={"fixed"}
      display={"grid"}
      top={"0"}
      left={"0"}
      height={"100%"}
      width={"100%"}
      placeItems={"center"}
      zIndex={"-2"}
    >
      <Box
        as="video"
        src={bg}
        height={"100%"}
        width={"100%"}
        objectFit={"cover"}
        autoPlay={true}
        muted={true}
        loop={true}
      />
    </Box>
  );
};

export default Background;
