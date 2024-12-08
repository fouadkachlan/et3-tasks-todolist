console.log('Starting ThemeManagement.ts');

import getThemeStore from './ThemeStore';
import { saveToLocalStorage, getFromLocalStorage } from './LocalStorage';

const themeStore = getThemeStore();

console.log('Setting theme to dark...');
themeStore.setTheme('dark'); 

console.log('Current theme:', themeStore.theme.get());

saveToLocalStorage('theme', themeStore.theme.get()); 
console.log('Theme saved to localStorage.');

const savedTheme = getFromLocalStorage('theme');
console.log('Retrieved theme from localStorage:', savedTheme);


if (savedTheme) {
    themeStore.setTheme(savedTheme as "light" | "dark"); 
    console.log('Theme set from localStorage:', savedTheme); 
} else {
    console.log('No theme found in localStorage.');
}

export default themeStore;
