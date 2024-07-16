import bcrypt from "bcryptjs"; 

export const  hashPassword = async (password : string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password , salt);
} 

export const extractUsername = (email : string )  : string => {
    if (typeof email !== "string" || !email.includes('@')) {
        console.error("Invalid email:", email);
    }
    const username = email.split("@")[0];
    return username;
}