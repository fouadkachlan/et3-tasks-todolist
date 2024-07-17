import { executeQuery } from "../utils/database";
import { News } from "../Interfaces/newsProps";
export const newsModel = {
    insertNews: async (userName: string, news_Content: string , email: string): Promise<void> => {
        const insertNewsQuery : string  = "INSERT INTO `News_Reader_App`.`news_Wrote_by`(`news_Wrote_by`,`News` ,`date_Of_News`,`email`) VALUES (?,?,CURDATE(),?)";
        console.log('SQL Query::', insertNewsQuery ,  [userName, news_Content]); 
        await executeQuery(insertNewsQuery, [userName, news_Content, email]);
    },
    fetchAllNewsData : async () : Promise<News[]> => {
        const allNewsDataQuery : string  = "SELECT news_Wrote_by,date_Of_News, News FROM `News_Reader_App`.`news_Wrote_by`";
        const result = await executeQuery<News>(allNewsDataQuery,[]);
        return result;
    }
}