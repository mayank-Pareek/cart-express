import {
  AppBar,
  Toolbar,
  Box,
  styled,
  Typography,
  IconButton,
  Drawer,
  ListItem,
  List,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
  height: 55px;
  box-shadow: none;
`;

const Brand = styled(Link)`
  margin-left: 13%;
  line-height: 0px;
  text-decoration: none;
  color: inherit;
`;

const Heading = styled(Typography)`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  font-style: italic;
`;

const SubHeading = styled(Typography)`
  font-size: 11px;
  font-style: italic;
  margin-top: -1px;
`;

const PlusIcon = styled(`img`)({
  width: "10px",
  height: "10px",
  marginLeft: "1px",
});

const ButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box
      style={{
        width: "200px",
      }}
      onClick={handleClose}
    >
      <List>
        <ListItem>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <MenuButton aria-label="menu" onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Brand to="/">
          <Heading>CartExpress</Heading>
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box
                component="span"
                style={{ color: "#ffe500", fontWeight: "600" }}
              >
                Premium
              </Box>
            </SubHeading>
            <PlusIcon src={subURL} alt="Plus icon" />
          </Box>
        </Brand>
        <Search />
        <ButtonWrapper>
          <CustomButtons />
        </ButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
