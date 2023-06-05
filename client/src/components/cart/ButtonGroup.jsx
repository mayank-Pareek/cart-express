import { Button, ButtonGroup, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const ButtonSet = () => {
  return (
    <Component>
      <Button>-</Button>
      <Button disabled>1</Button>
      <Button>+</Button>
    </Component>
  );
};

export default ButtonSet;
