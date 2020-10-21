import React from "react";
import styled from "styled-components";
import Image1 from "../images/photo1.png";
import Image2 from "../images/photo2.png";

export const Container = styled.div`
  background: #f2f2f2;
  border-radius: 12px;
  width: 90%;
  height: 535px;
  padding: 30px;
  display: flex;
  flex-flow: column;

  @media (max-width: 480px) {
    padding: 0px;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    width: 90%;
  }
`;

export const ContainerDiv = styled.div`
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    padding: 20px;
    width: 90%;
  }
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
  display: flex;
  flex-flow: column;
  width: 35%;
  @media (min-width: 481px) and (max-width: 1050px) {
    width: 20%;
  }
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
  cursor: pointer;
`;

export const ContainerDivTotal = styled.div`
  width: 100%;
  margin-top: 40px;

  @media (max-width: 480px) {
    padding: 20px;
    width: 90%;
  }
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
  const products = [
    {
      title: "Vintage",
      priceOrange: 54.99,
      price: 94.99,
      image: Image1,
    },
    {
      title: "Levi Shoes",
      priceOrange: 74.99,
      price: 124.99,
      image: Image2,
    },
  ];

  return (
    <Container>
      {products.map((product) => (
        <ContainerDiv key={product.title}>
          <ContainerImage>
            <Image src={product.image} />
          </ContainerImage>
          <ContainerPrice>
            <Title>{product.title}</Title>
            <div>
              <PriceOrange>${product.priceOrange}</PriceOrange>
              <Price>${product.price}</Price>
            </div>
            <ContainerCount id={product.title}>
              <Operator>-</Operator>
              <Number>0</Number>
              <Operator>+</Operator>
            </ContainerCount>
          </ContainerPrice>
        </ContainerDiv>
      ))}

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
