import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";
import Search from "./Search";

const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
  height: 55px;
`;
const Brand = styled(Box)`
  margin-left: 12%;
  line-height: 0px;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusIcon = styled(`img`)({
  width: "10px",
  height: "10px",
  marginLeft: "4px",
});
const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <StyledHeader>
      <Toolbar>
        <Brand>
          <img src={logoURL} alt="flipkart logo" style={{ width: "75px" }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#ffe500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusIcon src={subURL} alt="Plus icon" />
          </Box>
        </Brand>
        <Search />
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
