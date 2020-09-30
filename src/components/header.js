import React from "react";
import styled from "styled-components";

export const Title = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #4e5150;
`;

const Header = () => {
  return <Title>Checkout</Title>;
};

export default Header;
