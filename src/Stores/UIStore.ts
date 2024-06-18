import { makeAutoObservable, runInAction } from 'mobx';
import memoize from 'lodash.memoize';

class UiStore {
  _isDrawerOpen: boolean = false;
  _selectedLanguage: string = 'English';

  constructor() {
    makeAutoObservable(this);
  }

  toggleDrawer = () => {
    this._isDrawerOpen = !this._isDrawerOpen;
  };

  setLanguage = (language: string) => {
    runInAction(() => {
      this._selectedLanguage = language;
    })
  };

  get isDrawerOpen() {
    return this._isDrawerOpen;
  }

  get selectedLanguage() {
    return this._selectedLanguage;
  }
}

export const getUIStore = memoize(() => new UiStore());
export default getUIStore;
export const uiStore = new UiStore();
