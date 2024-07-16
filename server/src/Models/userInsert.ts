import { executeQuery } from "../utils/database";

export const userSignUp = {
    register : async (email_Address : string , Password : string, phone_Number : string ,user_Country : string) => {
        const registerUser : string = "INSERT INTO `News_Reader_App`.`Sign_Up_New_Users` (`email_Address`, `Password`, `phone_Number`, `user_Country`) VALUES (?,?,?,?)";
        console.log('SQL Query:', registerUser);
        console.log('Parameters:', [email_Address, Password, phone_Number, user_Country]);
        await executeQuery(registerUser , [email_Address , Password , phone_Number ,user_Country]);
    },
}

