import {web3Slice} from "./reducers/web3-reducer";

import {Action, configureStore, getDefaultMiddleware, ThunkAction} from '@reduxjs/toolkit';
import {tokensSlice} from "./reducers/token-reducer";

export const store = configureStore({
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        web3: web3Slice.reducer,
        tokens: tokensSlice.reducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;


