import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box, Button, Center, Image, VStack, Text } from "@chakra-ui/react";

interface BookProps {
  book: Book;
  setBook: (book: Book | undefined) => void;
}

const Book: React.FC<BookProps> = ({ book, setBook }) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/chapters/${book.id}`
      );
      setChapters(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box
        position={"fixed"}
        top={"0"}
        left={"0"}
        height={"100%"}
        width={"100%"}
        placeItems={"center"}
        zIndex={"-2"}
        bgImage={`url(${book.bg_img_link})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />
      <Center>
        <VStack>
          <Image
            src={book.img_link}
            alt={book.title}
            h={"65vh"}
            m={"15px"}
            boxShadow={"7px 7px 3px rgb(0, 0, 0, .6)"}
            borderRadius={"10px"}
          />
          {chapters.map((chapter, index) => (
            <div key={index}>
              <Box w={"50vw"} justifyContent={"center"} alignItems={"center"}>
                <Box
                  backgroundColor={"rgba(50, 50, 50, .6)"}
                  boxShadow={"0 3px 30px black"}
                  borderRadius={"3%"}
                >
                  <Text
                    display="inline-block"
                    textAlign="left"
                    whiteSpace="initial"
                    fontSize="25px"
                    color={"white"}
                  >
                    {chapter.title}
                  </Text>
                  <audio src={chapter.audio_link} className="audio" controls />
                </Box>
              </Box>
            </div>
          ))}
          <Button
            variant={"unstyled"}
            m={"20px auto"}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            backgroundColor={"transparent"}
            color={"#ffffff"}
            border={"#ffffff"}
            _hover={{
              opacity: "1",
              textShadow: "0 0 6px rgba(255, 255, 255, 1)",
            }}
            onClick={() => setBook(undefined)}
          >
            <Text display={"inline-block"} fontSize={"40px"}>
              Back
            </Text>
          </Button>
        </VStack>
      </Center>
    </>
  );
};

export default Book;
