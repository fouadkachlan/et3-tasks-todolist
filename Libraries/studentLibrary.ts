// Libraries/library.ts

import studentModels from "../Models/studentModels";
import { StudentProps } from "../Interfaces/studentinterface";

// Function to create a student
export const userCreateCall = async (StudentFname: string, StudentLname: string, StudentDoB: string, StudentMajor: string, password: string): Promise<void> => {
    await studentModels.insert(StudentFname, StudentLname, StudentDoB, StudentMajor, password);
};

// Function to get all students
export const userSelectCall = async (): Promise<StudentProps[]> => {
    return await studentModels.select();
};


export const userUpdateCall = async (StudentFname : string , StudentLname : string , StudentDoB : string , StudentMajor : string , newPassword : string) : Promise <void> => {
     await studentModels.update(StudentFname , StudentLname  , StudentDoB , StudentMajor , newPassword )
}