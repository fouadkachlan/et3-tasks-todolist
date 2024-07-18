// import memoize from "lodash";
import {  observable, runInAction } from "mobx";

 class LoginStore 
{
    email = observable.box<string>('');
    password = observable.box<string>('');
    phone_Number = observable.box<string>('');
    user_Country = observable.box<string>('');
    username = observable.box<string>('');
    
    setEmail = (emailParameter : string) => {
        runInAction(()=>{
            this.email.set(emailParameter);        
        })
    }

    setUsername = (userName : string) => {
        runInAction(() => {
            this.username.set(userName);
        })
    }
    
    setPassword = ( passwordParameter : string ) => 
    {
        runInAction(()=>{
            this.password.set(passwordParameter);
        })
    }
    setPhoneNumber = ( phoneNumberParameter : string ) => 
    {
        runInAction(()=>{
            this.phone_Number.set(phoneNumberParameter);
        })
    }
    setUserCountry = ( countryParameter : string ) => 
        {
            runInAction(()=>{
                this.user_Country.set(countryParameter);
            })
        }
    resetCredentials = () => {
        this.setEmail("");
        this.setPassword("");
    }

    setProfileData = (email_Address : string , phone_Number : string , user_Country : string) => {
        runInAction(() => {
            this.email.set(email_Address);
            this.phone_Number.set(phone_Number);
            this.user_Country.set(user_Country);
        })
    }
}

// export const getLoginStore = () => memoize(()=>{return new LoginStore(),()=>1});
// export default getLoginStore;

const loginStore = new LoginStore();
export const getLoginStore = () => loginStore;
export default getLoginStore;
