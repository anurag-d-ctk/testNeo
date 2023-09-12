import { useEffect, useState } from "react";
import { User, fetchUsers, userSelector } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../reduxHooks";
import { Box, Button, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";

function UserPage() {
  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const selectedUsers = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(selectedUsers.loading);
    setError(selectedUsers.error);
    setUsers(selectedUsers.users);
  }, [selectedUsers]);

  const handleFetchUser = () => {
    dispatch(fetchUsers());
  };

  return (
    <Box px={5} bg="whiteAlpha.100">
      <Flex py={5}>
        <Button
          float={"right"}
          colorScheme="teal"
          onClick={handleFetchUser}
          variant="outline"
        >
          Fetch
        </Button>
        {loading && <Spinner />}
      </Flex>
      <SimpleGrid color="blackAlpha.800" columns={2} spacing="5">
        {users?.map((user) => (
          <Box key={user.id} p="6" bg="teal.200" shadow="md" rounded="md">
            {user.name} | {user.email}
          </Box>
        ))}
      </SimpleGrid>
      {error && <div>Error: {error}</div>}
    </Box>
  );
}
export default UserPage;
