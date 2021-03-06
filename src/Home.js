import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import PurchaseDataForm from "./components/purchaseDataForm";
import ProductDescription from "./components/productDescription";
import Footer from "./components/footer";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  justify-content: center;

  grid-template-columns: 60% 5% 45%;
  grid-gap: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 200px;
  margin-right: 200px;
  grid-template-areas:
    "header header header header"
    "main . sidebar sidebar"
    "footer footer footer footer";

  @media (max-width: 480px) {
    grid-template-columns: 100%;
    grid-gap: 0px;
    margin: 10px;
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "footer";
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-template-columns: 100%;
    grid-gap: 30px;
    margin: 80px;
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "footer";
  }
`;

export const GridHeader = styled.header`
  grid-area: header;
`;

export const GridMain = styled.div`
  grid-area: main;
  height: 800px;

  @media (max-width: 480px) {
    height: 700px;
  }
`;

export const GridSideBar = styled.div`
  grid-area: sidebar;
`;

export const GridFooter = styled.footer`
  grid-area: footer;

  @media (max-width: 480px) {
    margin-top: 100px;
  }
`;

const Home = () => {
  return (
    <Container>
      <GridHeader>
        <Header />
      </GridHeader>
      <GridMain>
        <PurchaseDataForm />
      </GridMain>
      <GridSideBar>
        <ProductDescription />
      </GridSideBar>
      <GridFooter>
        <Footer />
      </GridFooter>
    </Container>
  );
};

export default Home;
