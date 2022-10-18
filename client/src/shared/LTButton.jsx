import React from "react";
import { Button } from "react-bootstrap";

const LTButton = ({ variant, type, text, size,disabled }) => {
  return (
    <Button variant={variant} type={type} size={size} disabled={disabled}>
      {text}
    </Button>
  );
};

export default LTButton;
