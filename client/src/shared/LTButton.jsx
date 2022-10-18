import React from "react";
import { Button } from "react-bootstrap";

const LTButton = ({ variant, type, text, size }) => {
  return (
    <Button variant={variant} type={type} size={size}>
      {text}
    </Button>
  );
};

export default LTButton;
