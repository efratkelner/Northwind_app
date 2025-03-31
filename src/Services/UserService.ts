import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import { jwtDecode } from "jwt-decode";
import { store, userActions } from "../Redux/store";
import { CredentialsModel } from "../Models/CredentialsModel";

class UserService {

    // Load token from localStorage if exist:
    public constructor() {

        const token = localStorage.getItem("token");

        if (token) {
            
            // Extract user: 
            const container = jwtDecode<{ user: UserModel }>(token);
            const dbUser = container.user;

            // Update global state: 
            const action = userActions.loginUser(dbUser);
            store.dispatch(action);

        }
    }

    public async register(user: UserModel) {

        // Send user to server:
        const response = await axios.post<string>(appConfig.registerUrl, user);

        // Get back token: 
        const token = response.data; // JWT - Json Web Token

        // Extract user: 
        const container = jwtDecode<{ user: UserModel }>(token);
        const dbUser = container.user;

        // Update global state: 
        const action = userActions.registerUser(dbUser);
        store.dispatch(action);

        // Save the token in localStorage: 
        localStorage.setItem("token", token);
    }

    public async login(credentials: CredentialsModel) {

        // Send user to server:
        const response = await axios.post<string>(appConfig.loginUrl, credentials);

        // Get back token: 
        const token = response.data; // JWT - Json Web Token

        // Extract user: 
        const container = jwtDecode<{ user: UserModel }>(token);
        const dbUser = container.user;

        // Update global state: 
        const action = userActions.loginUser(dbUser);
        store.dispatch(action);

        // Save the token in localStorage: 
        localStorage.setItem("token", token);
    }

    public logout() {
        // Update global state: 
        const action = userActions.logoutUser();
        store.dispatch(action);

        // Remove token from localStorage: 
        localStorage.removeItem("token");
    }
}

export const userService = new UserService();
