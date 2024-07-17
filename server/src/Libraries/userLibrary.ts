import {getUserModel} from "../Models/userSelect";
import {userSignUp} from "../Models/userInsert";
import bcrypt from "bcryptjs";




const userLibrary = {
    userCreateCall : async (email_Address : string , hashedPassword : string, phone_Number : string ,user_Country : string) : Promise<{message : string}> => {
        try {
            await userSignUp.register(email_Address , hashedPassword , phone_Number ,user_Country);
            const result = {message : "Sign up success"}
            return result;
        } catch ( error ) {
            console.error("Error in user create call," , error)
            const result = {message : "Sign up failed"}
            return result;
        }
    },
    userLoginCall : async (email_Address : string , password : string) : Promise<{message : string ; user : {email : string , hashPassword : string}} | null> => {
        const user = await getUserModel.Login(email_Address);
        if (!user) {
            console.log("User not found");
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password , user.Password);
        if (!isPasswordValid) {
            console.log("Invalid Password");
            return null;
        }
        const result = {
            message : "Login Successfull",
            user : {
                email: user.email_Address,
                hashPassword: user.Password
            }
        }
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

    }
};

export default userLibrary;


