import { createSlice } from "@reduxjs/toolkit";

const validCredentials = [
  { email: "admin@gmail.com", password: "admin@12345" },
  
];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isSignedIn: false,
  },
  reducers: {
    signin: (state, action) => {
      const matchedCredential = validCredentials.find(
        (credential) =>
          credential.email === action.payload.email &&
          credential.password === action.payload.password
      );

      if (matchedCredential) {
        state.user = action.payload;
        state.isSignedIn = true;
      }
    },
  },
});

export const { signin } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
