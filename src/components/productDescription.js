import React from "react";
import styled from "styled-components";
import Image1 from "../images/photo1.png";
import Image2 from "../images/photo2.png";

export const Container = styled.div`
  background: #f2f2f2;
  border-radius: 12px;
  width: 383px;
  height: 535px;
  padding: 30px;
  display: flex;
  flex-flow: column;
`;

export const ContainerDiv = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const ContainerImage = styled.div`
  float: left;
  width: 50%;
`;

export const Image = styled.img`
  margin-right: 10px;
  width: 135px;
  border-radius: 13px;
`;

export const ContainerPrice = styled.div`
  /* float: right; */
  display: flex;
  flex-flow: column;
  width: 35%;
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #4e5150;
  margin-top: 0px;
`;

export const PriceOrange = styled.p`
  float: left;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #f2994a;
`;

export const Price = styled.p`
  float: right;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-decoration-line: line-through;
  color: #4e5150;
  margin-top: 15px;
`;

export const ContainerCount = styled.div`
  width: 122.8px;
  height: 49.86px;
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;

export const Number = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
  text-align: center;
  margin-top: 5px;
`;

export const Operator = styled.div`
  background: #e0e0e0;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  margin-top: 5px;
  text-align: center;
`;

export const ContainerDivTotal = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const HR = styled.hr`
  border: 1px solid #bdbdbd;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  margin-top: -15px;
`;

export const Description = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`;

export const TotalPrice = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #333333;
`;

const ProductDescription = () => {
  return (
    <Container>
      <ContainerDiv>
        <ContainerImage>
          <Image src={Image1} />
        </ContainerImage>
        <ContainerPrice>
          <Title>Vintage</Title>
          <div>
            <PriceOrange>$54.99</PriceOrange>
            <Price>$94.99</Price>
          </div>
          <ContainerCount>
            <Operator>-</Operator>
            <Number>1</Number>
            <Operator>+</Operator>
          </ContainerCount>
        </ContainerPrice>
      </ContainerDiv>

      <ContainerDiv>
        <ContainerImage>
          <Image src={Image2} />
        </ContainerImage>
        <ContainerPrice>
          <Title>Levi Shoes</Title>
          <div>
            <PriceOrange>$74.99</PriceOrange>
            <Price>$124.99</Price>
          </div>
          <ContainerCount>
            <Operator>-</Operator>
            <Number>1</Number>
            <Operator>+</Operator>
          </ContainerCount>
        </ContainerPrice>
      </ContainerDiv>

      <ContainerDivTotal>
        <HR></HR>
        <Total>
          <Description>Shipping</Description>
          <TotalPrice>$19</TotalPrice>
        </Total>

        <HR></HR>
        <Total>
          <Description>Shipping</Description>
          <TotalPrice>$19</TotalPrice>
        </Total>
      </ContainerDivTotal>
    </Container>
  );
};

export default ProductDescription;
