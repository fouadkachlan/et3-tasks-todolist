import studentInsert from "./insert";
import studentSelect from "./select";
import studentUpdate from "./update";



export const studentModels = {
    select : studentSelect,
    insert: studentInsert,
    update: studentUpdate
}

export default studentModels;