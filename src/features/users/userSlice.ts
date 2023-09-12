import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserState {
  loading: boolean;
  users: Array<User>;
  error: string | undefined;
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: undefined,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  const res = fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
    data.json(),
  );
  return res;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<Array<User>>) => {
        state.loading = false;
        toast({
          title: "Success",
          description:
            state.users.length < 1
              ? action.payload.length + " users fetched"
              : action.payload.length + " more users fetched.",
          status: "success",
          duration: 3000,
          variant: "left-accent",
          position: "top-right",
          isClosable: true,
        });
        state.users = [...state.users, ...action.payload];
      },
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
  reducers: {},
});
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
