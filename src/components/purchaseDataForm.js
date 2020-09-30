import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  text-align: "left";
  margin-bottom: 300px;
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  margin-top: 0px;
`;

export const ContainerTitle = styled.p`
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  position: absolute;
  width: 470px;
  margin-bottom: 10px;

  i {
    position: absolute;
    padding: 15px;
    min-width: 40px;
    color: #828282;
  }
`;

export const Label = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #4f4f4f;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 465px;
  height: 56px;
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;

  padding-left: 60px;
`;

export const InputDuo = styled.input`
  width: 217px;
  height: 56px;
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;

  padding-left: 60px;
`;

export const ContainerInputs = styled.div`
  width: 465px;
`;

export const ContainerLabelInput = styled.div`
  margin-top: 25px;
`;

export const ContainerInputLeft = styled.div`
  float: left;
`;

export const ContainerInputRight = styled.div`
  float: right;
`;

export const ContainerButton = styled.div`
  margin-top: 130px;
  text-align: right;
  width: 465px;
`;

export const Button = styled.button`
  width: 166px;
  height: 54px;
  background: #f2994a;
  border-radius: 12px;
  border: 0px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

const PurchaseDataForm = () => {
  return (
    <Container>
      <Form>
        <Title>Contact infomation</Title>
        <ContainerLabelInput>
          <Label>E-mail</Label>
          <i class="material-icons">email</i>
          <Input type="email" placeholder="Enter your email..." />
        </ContainerLabelInput>
        <ContainerLabelInput>
          <Label>Phone</Label>
          <i class="material-icons">phone</i>
          <Input type="email" placeholder="Enter your phone..." />
        </ContainerLabelInput>
        <ContainerTitle>
          <Title>Shipping address</Title>
        </ContainerTitle>
        <ContainerLabelInput>
          <Label>Full name</Label>
          <i class="material-icons">account_circle</i>
          <Input type="email" placeholder="Your full name..." />
        </ContainerLabelInput>
        <ContainerLabelInput>
          <Label>Address</Label>
          <i class="material-icons">home</i>
          <Input type="email" placeholder="Your address.." />
        </ContainerLabelInput>
        <ContainerLabelInput>
          <Label>City</Label>
          <i class="material-icons">location_city</i>
          <Input type="email" placeholder="Your city.." />
        </ContainerLabelInput>
        <ContainerInputs>
          <ContainerInputLeft>
            <Label>Country</Label>
            <i class="material-icons">public</i>
            <InputDuo type="email" placeholder="Your country.." />
          </ContainerInputLeft>
          <ContainerInputRight>
            <Label>Postal code</Label>
            <i class="material-icons">markunread_mailbox</i>
            <InputDuo type="email" placeholder="Your postal code.." />
          </ContainerInputRight>
        </ContainerInputs>
        <ContainerButton>
          <Button>Continue</Button>
        </ContainerButton>
      </Form>
    </Container>
  );
};

export default PurchaseDataForm;
