import {
  Box,
  Table,
  TableCell,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { LocalOffer as Offer } from "@mui/icons-material";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  margin-top: 10px;
  & > p {
    font-size: 14px;
  }
`;
const StyledOffer = styled(Offer)`
  margin-right: 10px;
  color: #2196f3;
  font-size: 15px;
`;
const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;

  & > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;
const ProductDetail = ({ product }) => {
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography
        style={{
          marginTop: "5px",
          color: "#878787",
          fontSize: "14px",
        }}
      >
        8 ratings and 1 review
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ${product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>${product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388e3c" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledOffer />
          Exclusive offer for TD Bank customers: Enjoy 15% off on this product
          with promo code TD15!
        </Typography>
        <Typography>
          <StyledOffer />
          Earn double Air Miles when you use your BMO Mastercard for this
          purchase. Collect rewards faster!
        </Typography>
        <Typography>
          <StyledOffer />
          Scotiabank Special: 0% interest financing for 12 months.
        </Typography>
        <Typography>
          <StyledOffer />
          Get 10% cashback when you pay with RBC Visa card.
        </Typography>
      </SmallText>
      <Table>
        <ColumnText>
          <TableCell
            style={{
              color: "#878787",
            }}
          >
            Delivery
          </TableCell>
          <TableCell
            style={{
              fontWeight: "600",
            }}
          >
            Delivery by {date.toDateString()}
          </TableCell>
        </ColumnText>
        <ColumnText>
          <TableCell style={{ color: "#878787" }}>Seller</TableCell>
          <TableCell style={{ fontStyle: "italic", cursor: "pointer" }}>
            ABC Company
          </TableCell>
        </ColumnText>
        <ColumnText>
          <TableCell style={{ color: "#878787" }}>Return Policy</TableCell>
          <TableCell>30-day hassle-free returns</TableCell>
        </ColumnText>
        <ColumnText>
          <TableCell style={{ color: "#878787" }}>Description</TableCell>
          <TableCell>{product.description}</TableCell>
        </ColumnText>
      </Table>
    </>
  );
};

export default ProductDetail;
