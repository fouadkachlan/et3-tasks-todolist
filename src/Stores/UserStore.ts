import { makeAutoObservable , runInAction } from "mobx";
import { User } from "../interfaces/UserInterface";
import memoize from "lodash.memoize";
import { Users  } from "../data/data";
class UserStore
{
    private _user = Users[0];
    private _peerUser = Users[1];
    get user() : User
    {
        return this._user;
    }
    getpeerUser() : User
    {
        return this._peerUser;
    }
    setUsername(username: string)
    {
        runInAction(() => {
            this._user.name = username;
        })
    }
    setPassword(password: string)
    {
        runInAction(() => {
            this._user.password = password;
        })
    }
    setAge(Age:  number)
    {
        runInAction(() => {
            this._user.age = Age;
        })
    }
    setLocation(Location: string)
    {
        runInAction(() => {
            this._user.location = Location;
        })
    }
    setJobPosition(position: string)
    {
        runInAction(() => {
            this._user.job_position = position;
        })
    }
    authenticateUser(username: string, password: string): boolean {
        console.log("default username", username);
        if (this._user && this._user.name === username && this._user.password === password) {
            console.log("original username:", this._user.name);
            return true;
        }
        return false;
    }
}

export const getUserStore = memoize(() => {return new UserStore()}, ()=>1)
export  default getUserStore;
export const userStore = new UserStore();