import {  Flex, Heading, Text } from "@chakra-ui/react";
import UserPage from "./features/users/Users";

function App() {
  return (
    <>
      <Flex align={"center"} gap={3} p="5" shadow={"md"}>
        <Heading size="md">Neo App</Heading>
        <Text fontSize={"medium"}>A POC of Neo APP</Text>
      </Flex>
      <UserPage />
    </>
  );
}

export default App;
