import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import listen from "../assets/listen.png";

interface BooksProps {
  setBook: (book: Book | undefined) => void;
}

const Books: React.FC<BooksProps> = ({ setBook }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {books.map((book, index) => (
          <Card
            key={index}
            backgroundColor={"rgba(50, 50, 50, .7)"}
            boxShadow={"0 3px 30px black"}
            borderRadius={"3%"}
          >
            <CardBody>
              <Image src={book.img_link} alt={book.title} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md" fontSize="sm" color="white">
                  {book.title}
                </Heading>
                <Button
                  leftIcon={<Image src={listen} w="25px" />}
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => setBook(book)}
                >
                  Listen
                </Button>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Books;
