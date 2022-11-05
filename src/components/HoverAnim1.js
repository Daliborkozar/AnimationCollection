import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled("button")`
  background-color: whitesmoke;
  border: none;
  padding: 5px 10px;
  transition: all 0.2s ease-out;
  &:hover {
    margin-top: 3px;
    cursor: pointer;
    background-color: #bbbbff;
    color: whitesmoke;
  }
`;

const HoverAnim1 = () => {
  const [click, setClick] = useState(false);
  
  function handleClick(){
      setClick(!click)
  }

  return (
    <div>
      <StyledButton click onClick={handleClick}>Button text </StyledButton>
    </div>
  );
};

export { HoverAnim1 };
