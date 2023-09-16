import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const RecipeCard = ({ el }) => {
  console.log("this el", el);
  return (
    <Link to={`/${el.id}`} style={{ textDecoration: "none" }}>
      <Box p={2} boxShadow="2xl" rounded="md">
        <Image src={el.image} alt="recipe picture" rounded="md" />
        <Flex mt={5} mb={3} justifyContent={"space-between"}>
          <Box alignContent={"center"}>
            <Heading as="h6" size="xs">
              {el.title}
            </Heading>
          </Box>
          <Box>
            <Button variant="outline">
              <AiOutlineHeart size={25} />
            </Button>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};

// AiFillHeart
export default RecipeCard;
