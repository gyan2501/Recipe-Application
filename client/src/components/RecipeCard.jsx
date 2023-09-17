import { Box, Button, Flex, Heading, Image, useToast } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const RecipeCard = ({ el }) => {
  console.log("this el", el);
  const toast = useToast();
  const token = localStorage.getItem("token");

  const handleFavouriteRecipe = () => {
    axios
      .post("http://localhost:8080/favorite", JSON.stringify(el), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Check if the request was successful
        if (response.status === 201) {
          // Showing success toast
          toast({
            position: "top",
            title: "Recipe added to favorites!",
            description: "We've added your recipe to your favorites.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
        if (response.status === 401) {
          // Showing error toast
          toast({
            position: "top",
            title: "Please Login First!",
            description: "Unauthorized Please Login",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
        if (response.status === 409) {
          // Showing error toast
          toast({
            position: "top",
            title: "Already add to the favorites!",
            description: "Recipe is already in the favorites!",
            status: "info",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error adding recipe to favorites:", error);
        // Showing error toast
        toast({
          position: "top",
          title: "Error in adding recipe to favorites!",
          description: "Error in adding recipe to favorites! try again!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box boxShadow="2xl" rounded="md">
      <Link to={`/${el.id}`} style={{ textDecoration: "none" }}>
        <Image
          src={el.image}
          alt="recipe picture"
          rounded="md"
          width={"100%"}
        />
      </Link>
      <Flex m={5} mb={3} justifyContent={"space-between"}>
        <Box alignContent={"center"}>
          <Heading as="h6" size="xs">
            {el.title}
          </Heading>
        </Box>
        <Box>
          <Button variant="outline">
            <AiOutlineHeart size={25} onClick={handleFavouriteRecipe} />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

// AiFillHeart
export default RecipeCard;
