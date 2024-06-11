import { makeAutoObservable, runInAction } from "mobx";
import { User } from "../interfaces/userInterface";

class UserStore
{
    private _user: User = {name: "Fouad Kachlan"};
    constructor()
    {
        makeAutoObservable(this,{
            setUser: false
        });
    }
    get user(): User 
    {
        return this._user;
    }
    setUser(name: string): void{
        runInAction(() => {
            this._user.name = name;
        })
    }
}

export const userStore = new UserStore();
