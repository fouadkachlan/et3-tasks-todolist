import {observable , runInAction} from "mobx";

class NewsStore 
{
    newsList = observable.array<string>([]);
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
    addNews(news: string) {
        runInAction(() => {
            this.newsList.push(news);
            this.incrementNewsCountByOne();
            this.news.set('');
        })
    }
    get newsCountTotal() {
        return this.newsList.length;
    }
    
}


const newsStore = new NewsStore();
export const getNewsStore = () => newsStore;
export default getNewsStore;
