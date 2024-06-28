import { creationOfStudent } from "../../Models/INSERT";
import { fetchStudents} from "../../Models/SELECT";

// So here only dealing with clients

export const getAllStudents = fetchStudents;
export const createStudent = creationOfStudent;


