import { Box, Container, Flex, Heading, HStack, IconButton, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <HStack display={{ base: "none", md: "flex" }} spacing={4}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Contact</Text>
        </HStack>
        <IconButton
          aria-label="Open Menu"
          icon={<FaBars />}
          display={{ base: "flex", md: "none" }}
          variant="outline"
          colorScheme="whiteAlpha"
        />
      </Flex>
      <Box as="main" p={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a responsive React app using Chakra UI.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;