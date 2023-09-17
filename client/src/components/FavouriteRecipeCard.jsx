import React, { useEffect } from "react";
import { Box, Button, Flex, Heading, Image, useToast } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const FavouriteRecipeCard = ({ el }) => {
  console.log("this el", el);
  const toast = useToast();

  const handleDeleteFavourite = async () => {
    console.log("clicked on el:", el._id);
    try {
      // Send a DELETE request to your backend API to delete the favorite recipe
      await axios.delete(`http://localhost:8080/favorite/${el._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // Show a success toast
      toast({
        position: "top",
        title: "Favorite recipe deleted",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      // Handle any errors here
      console.error("deleting favorite recipe Error:", error);
      // Show an error toast
      toast({
        position: "top",
        title: "Error deleting favorite recipe",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box boxShadow="2xl" rounded="md">
      <Link to={`/${el.recipe.id}`}>
        <Image
          src={el.recipe.image}
          alt="recipe picture"
          rounded="md"
          width={"100%"}
        />
      </Link>
      <Flex m={5} mb={3} justifyContent={"space-between"}>
        <Box alignContent={"center"}>
          <Heading as="h6" size="xs">
            {el.recipe.title}
          </Heading>
        </Box>
        <Box>
          <Button variant="outline" colorScheme="red">
            <AiFillDelete
              size={25}
              onClick={handleDeleteFavourite}
              color="red"
            />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default FavouriteRecipeCard;
