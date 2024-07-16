
import { Request, Response } from 'express';
import userLibrary from '../Libraries/userLibrary';

export const addNews = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, news_Content } = req.body;
        // console.log("Request Body:", req.body);
        // console.log("Received email:", email);
        // console.log("Received news content:", news_Content);
        await userLibrary.addNewsForUser(email, news_Content);
        console.log("News added successfully");
        res.status(200).json({ message: "News added successfully" });
    } catch (error) {
        console.error("Error adding news:", error);
        res.status(500).json({ message: 'Error Has occurred when adding news', error });
    }
};


export const getAllNews = async (req: Request , res: Response ) : Promise<void> => {
    try {
        const newData = await userLibrary.fetchingAllNews();
        res.status(200).json(newData);
    } catch ( error ) {
        console.error("Error while fetching News!", error);
        res.status(500).json({error : "Internal server error"})
    }
};