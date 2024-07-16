import { hashPassword } from "../helpers/utitilty";
import { User } from "../Interfaces/userProps";
import {userSignUp} from "../Models/userInsert";
import { newsModel } from "../Models/newsModel";
import bcrypt from "bcryptjs";
import { extractUsername } from "../helpers/utitilty";
import {getUserModel} from "../Models/userSelect";
import { News } from "../Interfaces/userProps";
const userLibrary = {
    userCreateCall : async (email_Address : string , hashedPassword : string, phone_Number : string ,user_Country : string) : Promise<void> => {
        // console.log("userCreateCall Parameters:" , {email_Address , hashedPassword , phone_Number , user_Country}) this statement is for debugging purposes
        await userSignUp.register(email_Address , hashedPassword , phone_Number ,user_Country);
    },
    userLoginCall : async (email_Address : string , password : string) : Promise<{message : string ; user : {email : string , hashPassword : string}} | null> => {

        // console.log("Attempting login for", email_Address);
        const user = await getUserModel.Login(email_Address);

        if (!user) {
            console.log("User not found");
            return null;
        }
        // console.log("User found", user);
        const isPasswordValid = await bcrypt.compare(password , user.Password);
        
        
        if (!isPasswordValid) {
            console.log("Invalid Password");
            return null;
        }
        // console.log("Password is valid");
        const result = {
            message : "Login Successfull",
            user : {
                email: user.email_Address,
                hashPassword: user.Password
            }
        }
        // console.log("Login Result" , result);
        return result;
    },

    userDataCall : async (email_Address : string) : Promise<{email_Address : string ; phone_Number : string ; user_Country : string;} | void | null> => {
        try {
            const user = await getUserModel.fetchProfile(email_Address) ;
            console.log("User : => " , user)
            if (user) {
                return {
                    email_Address : user.email_Address,
                    phone_Number : user.phone_Number,
                    user_Country: user.user_Country

                };
            } else {
                return null;
            }
        } catch ( error ) {
            console.error("Error Fetching user data:", error);
            return null;
        }

    },
    addNewsForUser: async (email: string, news_Content: string): Promise<void> => {
        if (!email) {
            console.error("Email cannot be null");
        }
        const userName : string = extractUsername(email);
        await newsModel.insertNews(userName, news_Content, email);
    },

    fetchingAllNews: async (): Promise<News[]> => {
        const newsData = await newsModel.fetchAllNewsData();
        return newsData;
    }
};

export default userLibrary;


