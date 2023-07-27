import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Constain } from "../../datatypes/Constain";
import { loginApi } from "../../api/login";
import { getToken, setToken } from "../../utils";
interface UserState {
  token: string | undefined;
  user: any;
  roles: string[];
}

const initialState: UserState = {
  token: getToken(),
  user: null,
  roles: [],
};

export const LoginAsync = createAsyncThunk(
  "user/loginAsync",
  async (data: Constain.IloginParams) => {
    const res = await loginApi(data);
    return {
      ...res,
      ...{ rememberMe: data.rememberMe },
    };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      LoginAsync.fulfilled,
      (state, action: PayloadAction<any>) => {
        const { token, user, rememberMe } = action.payload;
        state.token = token;
        state.user = { ...user };
        state.roles = [...user.roles];
        setToken(token, rememberMe);
      }
    );
  },
});

export default userSlice.reducer;
