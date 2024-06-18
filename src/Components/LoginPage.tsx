import React from "react";
import CustomDiv from '../CustomComponents/CustomDiv';
import CustomInput from '../CustomComponents/CustomInput';
import CustomButton from '../CustomComponents/CustomButton';
import CustomForm from "../CustomComponents/CustomForm";
import { userStore } from "../Stores/UserStore"
import { useNavigate } from "react-router-dom";
import Colors from "../Colors/Colors"

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
      alert("Username and Password are Required \n Please re-enter your username and password!");
      return;
    }

    userStore.handleLogin(username, password, navigate);
  };

  return (
    <CustomDiv display="flex" justifyContent="center" alignItems="flex-start" width="30%" height="35rem"
      style={{
        marginLeft: "35%",
        flexWrap: "wrap",
        marginTop: "5%",
        border: "1px solid black ",
        borderRadius: "20px",
        flexDirection: "column",
        padding: "2rem",
        backgroundColor: Colors.CustomGrey  //grey
      }}>
      <CustomDiv display="flex" justifyContent="center" alignItems="center" width="100%" height=""
        style={{
          fontSize: "35pt",
          fontWeight: "bold",
          color: "black",
          marginBottom: "2rem",
        }}>
        Login Page
      </CustomDiv>
      <CustomForm onSubmit={handleSubmit}
       style={{ 
            width: "100%",
            display: "flex", 
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem" }}>
        <CustomInput id="username" type="text" style={{
          width: "20rem", height: "2.5rem"
        }}  placeholder="Username"
            borderRadius="10px"
            hoverStyle={{ 
                borderColor: "transparent",
                //BLUE
                boxShadow: "0 0 0 5px " +  `${Colors.Customblue}` }} /> 
        <CustomInput id="password" style={{
          width: "20rem", height: "2.5rem"
        }}
            placeholder="Password"
            borderRadius="10px"
            type="password" 
            hoverStyle={{ 
                borderColor: "transparent",
                // ALSO BLUE
                boxShadow: "0 0 0 5px " +  `${Colors.Customblue}` }} /> 
        <CustomButton 
          style={{
            //ALSO  BLUE
            backgroundColor: Colors.Customblue,
            height: "2.5rem",
            width: "10rem",
            marginTop: "1.5rem",
            borderRadius: "35px"
          }} color="black"
             hoverStyle={{ 
              //BLACKYBLUE
                backgroundColor: Colors.CustomBlackyBlue,
                color: "white" }}>
          Submit
        </CustomButton>
      </CustomForm>
    </CustomDiv>
  );
};

export default LoginPage;
