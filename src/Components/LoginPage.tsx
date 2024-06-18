import React, { useState } from "react";
import CustomDiv from '../CustomComponents/CustomDiv';
import CustomInput from '../CustomComponents/CustomInput';
import CustomButton from '../CustomComponents/CustomButton';
import CustomForm from "../CustomComponents/CustomForm";
import { userStore } from "../Stores/UserStore"
import { useNavigate } from "react-router-dom";
import Colors from "../Colors/Colors";
import CustomPopUp from "../CustomComponents/CustomPopUp";

const LoginPage: React.FC = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const usernameInput = document.getElementById("username") as HTMLInputElement;
        const passwordInput = document.getElementById("password") as HTMLInputElement;
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (!username || !password) {
            setShowPopUp(true);
            return;
        }
        const isUserAuthenticated = userStore.authenticateUser(username, password);

        if (isUserAuthenticated) {
            navigate('/dashboard');
            alert("Authentication successful");
        } else {
            setShowPopUp(true);
        }
    };

    const closePopUp = () => {
        setShowPopUp(false);
    };

    return (
        <CustomDiv display="flex" justifyContent="center" alignItems="flex-start" width="370px" height="35rem"
            style={{
                marginLeft: "35%",
                flexWrap: "wrap",
                marginTop: "5%",
                border: "1px solid black",
                borderRadius: "20px",
                flexDirection: "column",
                padding: "10px",
                backgroundColor: Colors.grey //grey
            }}>
            <CustomDiv display="flex" justifyContent="center" alignItems="center" width="100%" height=""
                style={{
                    fontSize: "35pt",
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: "20px",
                }}>
                Login Page
            </CustomDiv>
            <CustomForm onSubmit={handleSubmit}
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px"
                }}>
                <CustomInput id="username" type="text" style={{
                    width: "320px", height: "40px"
                }} placeholder="Username"
                    borderRadius="10px"
                    hoverStyle={{
                        borderColor: "transparent",
                        boxShadow: "0 0 0 5px " + `${Colors.blue}`
                    }} />
                <CustomInput id="password" style={{
                    width: "320px", height: "40px"
                }}
                    placeholder="Password"
                    borderRadius="10px"
                    type="password"
                    hoverStyle={{
                        borderColor: "transparent",
                        boxShadow: "0 0 0 5px " + `${Colors.blue}`
                    }} />
                <CustomButton
                    style={{
                        backgroundColor: Colors.blue,
                        height: "40px",
                        width: "150px",
                        marginTop: "20px",
                        borderRadius: "35px"
                    }} color="black"
                    hoverStyle={{
                        backgroundColor: Colors.BlackyBlue,
                        color: "white"
                    }}>
                    Submit
                </CustomButton>
            </CustomForm>
            {showPopUp && <CustomPopUp onClose={closePopUp} />}
        </CustomDiv>
    );
};

export default LoginPage;
