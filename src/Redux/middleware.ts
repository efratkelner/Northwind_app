import { Dispatch, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { AppState } from "./store";

export const logger = (store: ReturnType<typeof configureStore<AppState>>) =>
    (next: Dispatch) =>
        (action: PayloadAction) => {
            console.log("Before the reducer...");
            console.log(store.getState().user);

            const result = next(action); // Must call next for the reducer to execute.

            console.log("After the reducer...");
            console.log(store.getState().user);

            return result;
        };

// export function logger(store: ReturnType<typeof configureStore<AppState>>) {
//     return function (next: Dispatch) {
//         return function (action: PayloadAction) { // <-- this is the middleware

//             console.log("Before the reducer...");
//             console.log(store.getState().user);

//             const result = next(action); // Must call next for the reducer to execute.

//             console.log("After the reducer...");
//             console.log(store.getState().user);

//             return result;
//         }
//     }
// }

