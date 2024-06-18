import { runInAction } from "mobx";
import { TUser } from "../interfaces/UserInterface";
import { Users } from "../data/data";
import CustomPopUp from "../CustomComponents/CustomPopUp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



class UserStore {


    private _user: TUser = Users[0];
    private _peerUser: TUser = Users[1];

    get user(): TUser {
        return this._user;
    }

    get peerUser(): TUser {
        return this._peerUser;
    }

    setUsername(username: string) {
        runInAction(() => {
            this._user.name = username;
        });
    }

    setPassword(password: string) {
        runInAction(() => {
            this._user.password = password;
        });
    }

    setAge(age: number) {
        runInAction(() => {
            this._user.age = age;
        });
    }

    setLocation(location: string) {
        runInAction(() => {
            this._user.location = location;
        });
    }
    getpeerUser() : TUser
    {
        return this._peerUser;
    }

    setJobPosition(position: string) {
        runInAction(() => {
            this._user.job_position = position;
        });
    }

    authenticateUser(username: string, password: string): boolean {
        console.log("Default username:", username);
        if (this._user && this._user.name === username && this._user.password === password) {
            console.log("Original username:", this._user.name);
            return true;
        }
        return false;
    }

    handleLogin = (username: string, password: string , navigate : (path: string) => void ) => {
        const [showPopUp, setShowPopUp] = useState(false);

        const closePopUp = () => {
            setShowPopUp(false);
        };

        const isUserAuthenticated = this.authenticateUser(username, password);

        if (isUserAuthenticated) {
            navigate('/dashboard');
            alert("Authentication successful");
        } else {
            setShowPopUp(true);
        }
    };
}

export const getUserStore = () => new UserStore();
export default getUserStore;

export const userStore = new UserStore();
