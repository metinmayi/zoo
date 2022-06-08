import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./wrapper";

type Props = {
  children: string;
  handleClick: Function;
};
const ZooButton: React.FC<Props> = ({ children, handleClick }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button variant="success" onClick={() => handleClick()}>
        {children}
      </Button>
    </Wrapper>
  );
};

export { ZooButton };
