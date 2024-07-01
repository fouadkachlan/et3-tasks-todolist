import { executeQuery } from '../../utils/database';
import { hashPassword } from '../../helpers/utility';
import bcrypt from "bcryptjs"

const studentInsert = {
    insert: async (studentFirstname: string, studentLastname: string, studentDoB: string, studentMajor: string, password: string) => {
        const insertstudent = "INSERT INTO `Student` (StudentFname, StudentLname, StudentDoB, StudentMajor, HashedPassword) VALUES (?, ?, ?, ?, ?)"; //Here I Did not change the camel casing because those are stored in that way in my database
        const hashedPassword = await hashPassword(password);
        await executeQuery(insertstudent, [studentFirstname, studentLastname, studentDoB, studentMajor, hashedPassword]);
    },
    register : async (studentFirstname : string , studentLastname : string , password : string , role : string) => {
        const registerstudent = "INSERT INTO `Register-Students` (studentFirstname , studentLastname , password) VALUES (?,?,?)";
        const hashedPassword = await bcrypt.hash(password,10);
        await executeQuery(registerstudent , [studentFirstname , studentLastname , hashedPassword]);
    }
};


export default studentInsert;