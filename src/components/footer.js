import React from "react";
import styled from "styled-components";

export const ContainerFooter = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #a9a9a9;
  text-align: center;
  margin-top: 100px;

  @media (max-width: 480px) {
    margin-top: 150px;
  }
`;

export const Hr = styled.hr`
  align-content: center;
  width: 80%;
  visibility: hidden;

  @media (max-width: 480px) {
    visibility: visible;
  }
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <Hr />
      Lorraine @ DevChallenges.io
    </ContainerFooter>
  );
};

export default Footer;
