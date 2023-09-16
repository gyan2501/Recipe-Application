import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Skeleton,
  Text,
} from "@chakra-ui/react";

const RecipeDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const getRecipeDetails = () => {
    axios.get(`http://localhost:8080/recipes/${id}`).then((res) => {
      console.log(res.data.recipe);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  return (
    <>
      <Navbar />

      {isLoading ? (
        [...Array(20).keys()].map((el) => {
          return (
            <Flex
              justify={"center"}
              flexDir={{ base: "column", md: "row" }}
              width="87vw"
              marginX="auto"
              my="2rem"
              key={el}
            >
              {/* skeletoon */}
              <Box
                width={{ base: "95%", lg: "50%" }}
                height={{ base: "40vh", lg: "60vh" }}
                border={"1px solid red"}
              >
                <Skeleton height={"100%"} width="100%" borderRadius={"xl"} />
              </Box>
              <Flex
                width="65%"
                px={"3rem"}
                flexDir="column"
                gap="2rem"
                py="2rem"
              >
                <Skeleton height="30px" />
                <Skeleton height="18px" width="250px" />
                <Skeleton height="40px" width="160px" borderRadius={"xl"} />
                <Skeleton height="18px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="40px" width="160px" borderRadius={"xl"} />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="18px" width="500px" />
              </Flex>
            </Flex>
          );
        })
      ) : (
        <Flex
          // Recipe Details mapping
          justify={"center"}
          flexDir={{ base: "column", md: "row" }}
          width={{ base: "87vw", md: "87vw" }}
          marginX="auto"
          my="2rem"
          textAlign={"justify"}
        >
          <Box
            width={{ base: "95%", lg: "50%" }}
            height={{ base: "40vh", lg: "60vh" }}
          >
            <Image
              height={"100%"}
              width="100%"
              borderRadius={"xl"}
              src="https://spoonacular.com/recipeImages/640077-556x370.jpg"
            />
          </Box>
          <Flex
            width={{ base: "95%", lg: "50%", sm: "100%" }}
            px={"3rem"}
            flexDir="column"
            gap="2rem"
            py="1rem"
          >
            <Heading as="h4" size="md">
              Corn Chowder with Potatoes, Poblanos, and Smoked Gouda
            </Heading>

            <Text height="18px" width="250px">
              Cooking time : 45 minutes
            </Text>

            <Button height="40px" width="160px" borderRadius={"xl"}>
              Instructions
            </Button>
            <Text>
              Corn Chowder with Potatoes, Poblanos, and Smoked Gouda might be a
              good recipe to expand your hor d'oeuvre recipe box. For $1.28 per
              serving, this recipe covers 13% of your daily requirements of
              vitamins and minerals. One serving contains 316 calories, 9g of
              protein, and 14g of fat. This recipe serves 6. A few people made
              this recipe, and 22 would say it hit the spot. From preparation to
              the plate, this recipe takes around 45 minutes. A mixture of
              potatoes, half-and-half, poblano chiles, and a handful of other
              ingredients are all it takes to make this recipe so tasty. It is
              brought to you by Foodista. It is a good option if you're
              following a gluten free and lacto ovo vegetarian diet. Taking all
              factors into account, this recipe earns a spoonacular score of
              51%, which is solid. Similar recipes are Smoked Chicken Enchiladas
              with corn & roasted poblanos, Smoked Chicken Enchiladas with corn
              & roasted poblanos, and Smoked Gouda Mashed Potatoes.
            </Text>
            <OrderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </OrderedList>

            <Button height="40px" width="160px" borderRadius={"xl"}>
              Ingredients
            </Button>
            <OrderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </OrderedList>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default RecipeDetails;
