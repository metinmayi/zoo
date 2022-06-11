import React from "react";
import { Button } from "react-bootstrap";
import { Wrapper } from "./wrapper";

type Props = {
  children: string;
  handleClick?: Function;
  disabled?: boolean;
  variant?: "danger";
};
const ZooButton: React.FC<Props> = ({
  children,
  handleClick,
  disabled,
  variant,
}) => {
  return (
    <Wrapper>
      <Button
        variant={variant ? variant : "success"}
        onClick={() => handleClick && handleClick()}
        disabled={disabled}>
        {children}
      </Button>
    </Wrapper>
  );
};

export { ZooButton };
