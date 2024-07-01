import {studentSelect} from './select';
import {studentInsert} from './insert';
import { studentUpdate} from './update';

export const studentModels = {
    select : studentSelect,
    insert: studentInsert,
    update: studentUpdate
}

export default studentModels;