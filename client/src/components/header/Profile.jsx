import { Box, Menu, MenuItem, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
//styles
const StyledMenu = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;
const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logOut = () => {
    setAccount("");
  };
  return (
    <>
      <Box>
        <Typography
          onClick={handleClick}
          style={{ marginTop: "2px", cursor: "pointer" }}
        >
          {account}
        </Typography>
      </Box>
      <StyledMenu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logOut();
          }}
        >
          <LogoutIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default Profile;
