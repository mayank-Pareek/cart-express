import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { authenticateSignup } from "../../services/api";

const DialogContainer = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const LoginBanner = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
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

const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountState.login);
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
  const registerInitialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };
  const [registerValues, setRegisterValues] = React.useState(
    registerInitialValues
  );
  const [account, toggleAccount] = React.useState(accountState.login);
  const toggleDialog = () => {
    if (account.state === "login") {
      toggleAccount(accountState.register);
    } else {
      toggleAccount(accountState.login);
    }
  };

  const inputChange = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };

  const registerUser = async () => {
    let response = await authenticateSignup(registerValues);
    if (!response) return;
    handleClose();
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
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subHeading}
            </Typography>
          </LoginBanner>
          {account.state === "login" ? (
            <LoginWrapper>
              <TextField
                variant="standard"
                label="Enter Email/Mobile number"
              ></TextField>
              <TextField variant="standard" label="Enter Password"></TextField>
              <PolicyText>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </PolicyText>
              <LoginButton variant="contained">Login</LoginButton>
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
