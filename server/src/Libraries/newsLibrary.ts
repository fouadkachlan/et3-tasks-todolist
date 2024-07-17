import { hashPassword } from "../helpers/utitilty";
import { User } from "../Interfaces/userProps";
import { newsModel } from "../Models/newsModel";
import { extractUsername } from "../helpers/utitilty";
import { News } from "../Interfaces/newsProps";

const newsLibrary = {
    addNewsForUser: async (email: string, news_Content: string): Promise<void> => {
        if (!email) {
            console.error("Email cannot be null");
        }
        const userName : string = extractUsername(email);
        await newsModel.insertNews(userName, news_Content, email);
    },

    fetchingAllNews: async (): Promise<News[]> => {
        const newsData = await newsModel.fetchAllNewsData();
        return newsData;
    }
}
export default newsLibrary