import { executeQuery } from '../../utils/database';
import { studentProps } from '../../interfaces/studentinterface';


const studentSelect = {
    select : async (): Promise<studentProps[]> => {
        const selectAllStudents = "SELECT * FROM `Student`";
        return await executeQuery<studentProps>(selectAllStudents, []);
    }
}


export default studentSelect;