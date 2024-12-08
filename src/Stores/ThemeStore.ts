import { observable, runInAction } from "mobx";
import memoize from "lodash.memoize";
import { getFromLocalStorage, saveToLocalStorage } from "./LocalStorage";

class ThemeStore {

    theme  = observable.box<"light"|"dark">("light");
        constructor()
        {
            const savedTheme = getFromLocalStorage("theme");
            if (savedTheme == "light" || savedTheme == "dark")
            {
                this.theme.set(savedTheme);
            }
        }

        setTheme = (newTheme:"light"|"dark")=>{
            runInAction(()=>{
                this.theme.set(newTheme);
                saveToLocalStorage('theme' , newTheme);
            })
        }

    
}
export const getThemeStore = memoize(() => new ThemeStore(),()=>1);
export default getThemeStore;
