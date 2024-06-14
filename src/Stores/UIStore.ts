// uiStore.ts
import { observable, action, computed , makeObservable} from 'mobx';
import memoize from 'lodash.memoize';
class UiStore {
  
   _isDrawerOpen: boolean = false;
   _selectedLanguage : string = 'English';
   constructor()
   {
    makeObservable(this,{
      _isDrawerOpen: observable,
      _selectedLanguage: observable,
      toggleDrawer: action,
      setLanguage: action,
      isDrawerOpen: computed,
      selectedLanguage: computed
    });
    this.toggleDrawer = this.toggleDrawer.bind(this);
    //this.toggleDrawer = this.toggleDrawer.bind(this);
    //this.setLanguage = this.setLanguage.bind(this);
   }
  toggleDrawer() {
    this._isDrawerOpen = !this._isDrawerOpen;
  }
  setLanguage(language: string)
  {
    this._selectedLanguage = language;
  }

  get isDrawerOpen() {
    return this._isDrawerOpen;
  }
  get selectedLanguage()
  {
    return this._selectedLanguage;
  }
}


export const getUIStore = memoize(() => {return new UiStore()}, ()=>1)
export  default getUIStore;
export const uiStore = new UiStore();