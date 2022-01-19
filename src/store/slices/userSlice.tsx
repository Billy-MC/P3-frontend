import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../interfaces/redux';
import {
    signup,
    signin,
    logout,
    getAllUsers,
    getUserByEmail,
    updateUserByEmail,
    deleteUserByEmail,
} from '../../services/Auth/user';
import { IUser } from '../../types/IUser';
import asyncStatus from '../../types/asyncStatus';

export const register = createAsyncThunk(
    'user/register',
    async (data: IUser, { rejectWithValue }) => {
        try {
            const response = await signup(data);
            if (typeof response === 'object') {
                return { user: response };
            }
            return { error: response };
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    },
);

export const login = createAsyncThunk('user/login', async (data: IUser, { rejectWithValue }) => {
    try {
        const response = await signin(data);
        if (typeof response === 'object') {
            return { user: response };
        }
        return { error: response };
    } catch (e) {
        return rejectWithValue((e as Error).message);
    }
});

export const logedout = createAsyncThunk('user/logout', async () => {
    await logout();
});

export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers', async () => {
    const data = await getAllUsers();
    return data as IUser[];
});

export const fetchUserByEmail = createAsyncThunk(
    'user/fetchUserByEmail',
    async (email: string | undefined, { rejectWithValue }) => {
        try {
            const response = await getUserByEmail(email);
            return response as IUser;
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    },
);

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (data: IUser, { rejectWithValue }) => {
        const { email, ...fields } = data;
        try {
            const response = await updateUserByEmail(email, fields as IUser);
            return response.data as IUser;
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    },
);

export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async (email: string, { rejectWithValue }) => {
        try {
            await deleteUserByEmail(email);
            return email;
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    },
);

interface UsersState {
    users: IUser[];
    user: IUser | null | string;
    status: asyncStatus;
    error: null | string | undefined;
    isLoggedIn: boolean;
}

const initialState: UsersState = {
    users: [],
    isLoggedIn: false,
    user: null,
    status: asyncStatus.idle,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state: UsersState) => {
                state.status = asyncStatus.loading;
            })
            .addCase(register.fulfilled, (state: UsersState, action) => {
                state.status = asyncStatus.succeeded;
                state.isLoggedIn = false;
                state.error = action.payload.error;
                state.user = action.payload.user;
            })
            .addCase(register.rejected, (state: UsersState, action) => {
                state.status = asyncStatus.failed;
                state.isLoggedIn = false;
            });

        builder
            .addCase(login.pending, (state: UsersState) => {
                state.status = asyncStatus.loading;
            })
            .addCase(login.fulfilled, (state: UsersState, action) => {
                state.status = asyncStatus.succeeded;
                state.error = action.payload.error;
                state.user = action.payload.user;
            })
            .addCase(login.rejected, (state: UsersState, action) => {
                state.status = asyncStatus.failed;
                state.isLoggedIn = false;
                state.user = null;
            });
        builder
            .addCase(logedout.pending, (state: UsersState) => {
                state.status = asyncStatus.loading;
            })
            .addCase(logedout.fulfilled, (state: UsersState, action) => {
                state.status = asyncStatus.succeeded;
                state.isLoggedIn = false;
                state.user = null;
            })
            .addCase(logedout.rejected, (state: UsersState, action) => {
                state.status = asyncStatus.failed;
                state.isLoggedIn = false;
                state.user = null;
            });
        builder
            .addCase(fetchAllUsers.pending, (state: UsersState) => {
                state.status = asyncStatus.loading;
            })
            .addCase(fetchAllUsers.fulfilled, (state: UsersState, action) => {
                state.status = asyncStatus.succeeded;
                state.users = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state: UsersState, action) => {
                state.status = asyncStatus.failed;
                state.error = action.error.message;
            });

        builder
            .addCase(updateUser.pending, (state: UsersState, action) => {
                state.status = asyncStatus.loading;
            })
            .addCase(updateUser.fulfilled, (state: UsersState, action) => {
                state.status = asyncStatus.succeeded;
                const index = state.users.findIndex(
                    (user: IUser) => user.email === action.payload.email,
                );
                state.users[index] = {
                    ...state.users[index],
                    ...action.payload,
                };
            })
            .addCase(updateUser.rejected, (state: UsersState, action) => {
                state.status = asyncStatus.failed;
                state.error = action.error.message;
            });

        builder
            .addCase(fetchUserByEmail.pending, (state: UsersState, action) => {
                state.status = asyncStatus.loading;
            })
            .addCase(fetchUserByEmail.fulfilled, (state: UsersState, action) => {
                state.status = asyncStatus.succeeded;
                state.user = action.payload;
            })
            .addCase(fetchUserByEmail.rejected, (state: UsersState, action) => {
                state.status = asyncStatus.failed;
                state.error = action.error.message;
            });

        builder
            .addCase(deleteUser.pending, (state: UsersState, action) => {
                state.status = asyncStatus.loading;
            })
            .addCase(deleteUser.fulfilled, (state: UsersState, { payload }) => {
                state.status = asyncStatus.succeeded;
                state.users = state.users.filter((user) => user.email !== payload);
            })

            .addCase(deleteUser.rejected, (state: UsersState, action) => {
                state.status = asyncStatus.failed;
                state.error = action.error.message;
            });
    },
});
export const authUserStatus = (state: RootState) => state.users.status;
export const authUserLogging = (state: RootState) => state.users.isLoggedIn;
export const authUser = (state: RootState) => state.users.user;
export const allAuthUser = (state: RootState) => state.users.users;
export const authError = (state: RootState) => state.users.error;

export default userSlice.reducer;
