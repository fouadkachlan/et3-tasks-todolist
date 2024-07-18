import {observable , runInAction} from "mobx";
import { NewsItem } from "../types/NewsItem";
class NewsStore 
{
    newsList = observable.array<NewsItem>([]);
    newsCount = observable.box<number>(0);
    news = observable.box<string> ('');
    date = observable.box<Date>(new Date());


    incrementNewsCountByOne = () => {
        runInAction(()=>{
            this.newsCount.set(this.newsCount.get() + 1);
        })
    }

    setNews(news : string) {
        runInAction(() => {
            this.news.set(news);
        })
    }
    setDate(dateParameter : Date){
        runInAction(() => {
            this.date.set(dateParameter);
        })
    }
    addNews(news: NewsItem) {
        runInAction(() => {
            this.newsList.push(news);
            this.incrementNewsCountByOne();
            this.news.set('');
        })
    }
    setNewsList(newsArray : NewsItem[] ) {
        runInAction(()=> {
            this.newsList.replace(newsArray);
            this.newsCount.set(newsArray.length);
        })
    }
    get newsCountTotal() {
        return this.newsList.length;
    }
    
}


const newsStore = new NewsStore();
export const getNewsStore = () => newsStore;
export default getNewsStore;
