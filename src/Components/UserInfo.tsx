import React from "react"
import { observer } from "mobx-react-lite"
import { userStore } from "../stores/UserStore"


const UserInfo: React.FC = observer(() => {
    return (
        <div className="user-info">
            <h2>User Info</h2>
            <div className="user-name"> Name: {userStore.user.name}</div>
        </div>
    );
});
export default UserInfo;