import { executeQuery } from '../../utils/database';
import { hashPassword } from '../../helpers/utility';


const studentInsert = {
    insert: async (studentFirstname: string, studentLastname: string, studentDoB: string, studentMajor: string, password: string) => {
        const insertstudent = "INSERT INTO `Student` (StudentFname, StudentLname, StudentDoB, StudentMajor, HashedPassword) VALUES (?, ?, ?, ?, ?)"; //Here I Did not change the camel casing because those are stored in that way in my database
        const hashedPassword = await hashPassword(password);
        await executeQuery(insertstudent, [studentFirstname, studentLastname, studentDoB, studentMajor, hashedPassword]);
    }
};


export default studentInsert;