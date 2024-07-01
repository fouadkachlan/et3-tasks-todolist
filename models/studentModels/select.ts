import { executeQuery } from '../../utils/database';
import { studentProps } from '../../interfaces/studentinterface';


const studentSelect = {
    select : async (): Promise<studentProps[]> => {
        const selectAllStudents = "SELECT * FROM `Student`";
        return await executeQuery<studentProps>(selectAllStudents, []);
    },
    studentSelectOnLogin: async (studentFirstname : string , studentLastname: string , password: string) :Promise<studentProps[]>  => {
            const loginQuery = "SELECT * FROM `Register-Students` WHERE studentFirstname=? AND studentLastname =?";
            return await executeQuery(loginQuery , [studentFirstname , studentLastname] );
    }
}


export default studentSelect;