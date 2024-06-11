import { makeAutoObservable } from "mobx";
import { User } from "../interfaces/userInterface";

class UserStore
{
    user: User = {name: "Fouad Kachlan"};
    constructor()
    {
        makeAutoObservable(this);
    }
    setUser(name: string)
    {
        this.user.name = name;
    }
}

export const userStore = new UserStore();
