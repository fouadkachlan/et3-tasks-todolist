import { executeQuery } from '../../utils/database';
import { hashPassword } from '../../Helpers/utility';

export const studentUpdate  = async (StudentFname : string , StudentLname : string , StudentDoB : string , StudentMajor : string , newPassword : string) : Promise<void> => {
    const updateStudentQuery = "UPDATE `Student` SET  StudentFname=?, StudentLname=?, StudentDoB=?, StudentMajor=? WHERE StudentId=?";
    
    const hashedPassword = hashPassword(newPassword);
    await executeQuery(updateStudentQuery ,[StudentFname ,StudentLname , StudentDoB , StudentMajor , hashedPassword ]);
}