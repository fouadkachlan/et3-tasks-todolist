import { executeQuery } from '../../utils/database';
import { StudentProps } from '../../Interfaces/studentinterface';

export const studentSelect = async (): Promise<StudentProps[]> => {
    const selectAllStudents = "SELECT * FROM `Student`";
    return await executeQuery<StudentProps>(selectAllStudents, []);
};

export default studentSelect;