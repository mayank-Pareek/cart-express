import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { authenticateSignup, authenticateLogin } from "../../services/api";
import { DataContext } from "../../context/DataProvider";

import loginBanner from "../../assets/images/Wavy_Tech-28_Single-10.jpg";

const DialogContainer = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const LoginBanner = styled(Box)`
  background: #2874f0 url(${loginBanner}) center/cover no-repeat;
  background-size: 100% 100%;
  height: 100%;
  padding: 45px 35px;
  width: 33%;
  color: #fff;
  & > h5 {
    font-weight: 600;
  }
`;

const LoginWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
  text-align: center;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const OtpButton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RegisterButton = styled(Button)`
  text-transform: none;
  background-color: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const PolicyText = styled(Typography)`
  font-size: 12px;
  color: #878787;
  text-align: left;
`;

const CreateAccountText = styled(Typography)`
  font-size: 14px;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const LoginError = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

//Function
const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountState.login);
    setError(false);
  };

  const accountState = {
    login: {
      state: "login",
      heading: "Login",
      subHeading: "Get access to your Orders, Wishlist and Recommendations",
    },
    register: {
      state: "register",
      heading: "Looks like you're new here!",
      subHeading: "Sign up with your mobile number to get started",
    },
  };
  const signupInitialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };
  const loginInitialValues = {
    username: "",
    password: "",
  };
  const [signup, setSignup] = React.useState(signupInitialValues);
  const [account, toggleAccount] = React.useState(accountState.login);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);
  const toggleDialog = () => {
    if (account.state === "login") {
      toggleAccount(accountState.register);
    } else {
      toggleAccount(accountState.login);
    }
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const inputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <DialogContainer>
        <Box style={{ display: "flex", height: "100%" }}>
          <LoginBanner>
            
          </LoginBanner>
          {account.state === "login" ? (
            <LoginWrapper>
              <TextField
                variant="standard"
                label="Enter username"
                name="username"
                onChange={(e) => onValueChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => onValueChange(e)}
              ></TextField>
              {error && <LoginError>Please use valid credentials</LoginError>}
              <PolicyText>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </PolicyText>
              <LoginButton onClick={loginUser} variant="contained">
                Login
              </LoginButton>
              <Typography>OR</Typography>
              <OtpButton variant="contained">Request OTP</OtpButton>
              <CreateAccountText onClick={toggleDialog}>
                New to Flipkart? Create an account
              </CreateAccountText>
            </LoginWrapper>
          ) : (
            <LoginWrapper>
              <TextField
                variant="standard"
                name="firstname"
                label="Enter First Name"
                onChange={(e) => inputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                name="lastname"
                label="Enter Last Name"
                onChange={(e) => inputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                name="username"
                label="Create Username"
                onChange={(e) => inputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                name="email"
                label="Enter Email"
                onChange={(e) => inputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                name="password"
                label="Create Password"
                onChange={(e) => inputChange(e)}
              ></TextField>
              <TextField
                variant="standard"
                name="phone"
                label="Enter Phone Number"
                onChange={(e) => inputChange(e)}
              ></TextField>
              <RegisterButton variant="contained" onClick={registerUser}>
                Continue
              </RegisterButton>
              <LoginButton onClick={toggleDialog}>
                Existing User? Log in
              </LoginButton>
            </LoginWrapper>
          )}
        </Box>
      </DialogContainer>
    </Dialog>
  );
};

export default LoginDialog;
