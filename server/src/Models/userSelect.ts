import { executeQuery } from "../utils/database";
import {User} from "../Interfaces/userProps";
import { userFetchDataProps } from "../Interfaces/userProps";

export const getUserModel = {
    LoginAsUser: async (email_Address: string): Promise<User | null> => {
        const userLoginQuery : string = "SELECT * FROM `News_Reader_App`.`Sign_Up_New_Users` WHERE email_Address=?";
        const result = await executeQuery<User>(userLoginQuery, [email_Address]);
        // console.log(result);

        if (result.length === 0) {
            return null;
        }
        return {
            email_Address: result[0].email_Address,   
            Password: result[0].Password
        };
    },
    LoginAsAdmin: async (email_Address: string): Promise<User | null> => {
        const userLoginQuery : string = "SELECT * FROM `News_Reader_App`.`Sign_Up_New_Users` WHERE email_Address=?";
        const result = await executeQuery<User>(userLoginQuery, [email_Address]);
        // console.log(result);

        if (result.length === 0) {
            return null;
        }
        return {
            email_Address: result[0].email_Address,   
            Password: result[0].Password
        };
    },
    fetchProfile: async (email_Address: string): Promise<userFetchDataProps | null> => {
        const userLoginQuery : string = "SELECT * FROM `News_Reader_App`.`Sign_Up_New_Users` WHERE email_Address=?";
        const result = await executeQuery<userFetchDataProps>(userLoginQuery, [email_Address]);
        console.log(userLoginQuery , result);
        if (result.length === 0) {
            return null;
        }
        return {
            email_Address: result[0].email_Address,   
            phone_Number : result[0].phone_Number,
            user_Country : result[0].user_Country
        };
    }
}
