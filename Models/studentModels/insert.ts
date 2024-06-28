import { executeQuery } from '../../utils/database';
import { hashPassword } from '../../Helpers/utility';

export const studentInsert = async (StudentFname: string, StudentLname: string, StudentDoB: string, StudentMajor: string, password: string) => {
    const insertstudent = "INSERT INTO `Student` (StudentFname, StudentLname, StudentDoB, StudentMajor, HashedPassword) VALUES (?, ?, ?, ?, ?)";
    const hashedPassword = await hashPassword(password);
    await executeQuery(insertstudent, [StudentFname, StudentLname, StudentDoB, StudentMajor, hashedPassword]);
};
