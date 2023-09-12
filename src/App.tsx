import { Box, Heading } from "@chakra-ui/react";
import UserPage from "./features/users/Users";

function App() {
  return (
    <>
      <Box p="5" shadow={"md"}>
        <Heading size="md">Neo App</Heading>
      </Box>
      <UserPage />
    </>
  );
}

export default App;
