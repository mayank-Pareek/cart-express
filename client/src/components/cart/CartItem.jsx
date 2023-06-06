import { Box, Button, Typography, styled } from "@mui/material";
import { addEllipsis } from "../../utils/utils";
import ButtonSet from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions.js";
import { useDispatch } from "react-redux";
const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background-color: #ffffff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SellerText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const RemoveButton = styled(Button)`
  font-size: 16px;
  margin-top: 20px;
  color: #000;
  font-weight: 600;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="item" height={"110px"} width={"110px"} />
        <ButtonSet />
      </LeftComponent>
      <Box margin={"20px"}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SellerText>Seller: ABC</SellerText>
        <Typography style={{ margin: "20px 0px" }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: "18px" }}>
            ${item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>${item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388e3c" }}>
            {item.price.discount}
          </Box>
        </Typography>
        <RemoveButton onClick={removeItem(item.id)}>Remove</RemoveButton>
      </Box>
    </Component>
  );
};

export default CartItem;
