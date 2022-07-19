import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: ${({ display }) => (display ? display : 'block')};
  margin: ${({ margin }) => (margin ? margin : '0 0 5px 0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  color: ${({ color }) => (color ? color : 'white')};


  font-size: 14px;
  font-weight: 200;
`;

const LabelStyled = ({ labelText, htmlFor, display, margin, padding, color }) => {
  return (
    <Label
    color={color}
      padding={padding}
      margin={margin}
      display={display}
      htmlFor={htmlFor}
    >
      {labelText}
    </Label>
  );
};

export default LabelStyled;
