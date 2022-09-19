import { axios } from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";
import { themeReducers } from "./features/theme/theme-slice";
import { controlsReducer } from "./features/controls/controls-slice";

export const store = configureStore({
    reducer: {
        theme: themeReducers,
        controls: controlsReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    client: axios,
                    api,
                },
            },
            serializableCheck: false,
        }),
});
