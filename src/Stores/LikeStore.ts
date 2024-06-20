import { observable } from "mobx";
import memoize from "lodash.memoize";
class LikeStore
{
    likeCount = observable.box<number>(1897);
    isLiked = observable.box<boolean>(false); 

    toggleLike() {
        this.isLiked.set(!this.isLiked.get());
        if (this.isLiked.get())
        {
            this.likeCount.set(this.likeCount.get() + 1);
        }
        else 
        {
            this.likeCount.set(this.likeCount.get() -1);
        }
    }
}

export const getLikeStore = memoize(() => new LikeStore() , ()=>1);
export default getLikeStore;