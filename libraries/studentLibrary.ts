// Libraries/library.ts

import studentModels from "../models/studentModels";
import { studentProps } from "../interfaces/studentinterface";

// Function to create a student
const studentLibrary = {
    userCreateCall : async (studentFirstname: string, studentLastname: string, studentDoB: string, studentMajor: string, password: string): Promise<void> => {
        await studentModels.insert.insert(studentFirstname, studentLastname, studentDoB, studentMajor, password);
    },
    userSelectCall : async (): Promise<studentProps[]> => {
        return await studentModels.select.select();
    },

    userUpdateCall : async (studentFirstname: string, studentLastname: string, studentDoB: string, studentMajor: string, password: string, newPassword : string) : Promise <void> => {
        await studentModels.update.update(studentFirstname, studentLastname, studentDoB, studentMajor , newPassword )
   }


}

export default studentLibrary;