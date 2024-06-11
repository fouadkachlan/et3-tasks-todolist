import React from "react"
import { observer } from "mobx-react-lite"
import { userStore } from "../stores/UserStore"
import CustomDiv from "./CustomDiv";


const UserInfo: React.FC = observer(() => {
    return (
        <CustomDiv style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px"
        }} alignItems= "center" justifyContent="space-between" display="flex"  width="" height="">
            <h2 style={{color:"green", margin: "0"}}>User Info</h2>
            <CustomDiv style={{}} height="" width="" display="flex" 
            alignItems="center" justifyContent="center" >Name: {userStore.user.name} </CustomDiv>
        </CustomDiv>
    );
});
export default UserInfo;
