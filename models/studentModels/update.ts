import { executeQuery } from '../../utils/database';
import { hashPassword } from '../../helpers/utility';

const studentUpdate = { 
    update : async (studentFirstname : string , studentLastname : string , studentDoB : string , studentMajor : string , newPassword : string) : Promise<void> => {
        const updateStudentQuery = "UPDATE `Student` SET  StudentFname=?, StudentLname=?, StudentDoB=?, StudentMajor=? WHERE StudentId=?";
        
        const hashedPassword = hashPassword(newPassword);
        await executeQuery(updateStudentQuery ,[studentFirstname ,studentLastname , studentDoB , studentMajor , hashedPassword ]);
    }
}

export default studentUpdate;