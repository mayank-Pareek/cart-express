import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
  height: 55px;
  box-shadow: none;
`;
const Brand = styled(Box)`
  margin-left: 13%;
  line-height: 0px;
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

const ButtonWrapper=styled(Box)`
margin: 0 5% 0 auto;
`

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <Brand>
          <img src={logoURL} alt="flipkart logo" style={{ width: "75px" }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box
                component="span"
                style={{ color: "#ffe500", fontWeight: "600" }}
              >
                Plus
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
