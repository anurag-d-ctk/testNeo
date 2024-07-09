import { Box, Heading, Text } from "@chakra-ui/react";
import UserPage from "./features/users/Users";

function App() {
  return (
    <>
      <Box p="5" shadow={"md"}>
        <Heading size="md">Neo App</Heading>
        <Text fontSize={"medium"}>A POC of Neo APP</Text>
      </Box>
      <UserPage />
    </>
  );
}

export default App;
