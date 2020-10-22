import React from "react";
import styled from "styled-components";
import arrow from "../images/arrow.png";

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

  @media (max-width: 480px) {
    width: 95%;
    margin-top: 50px;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    width: 100%;
  }

  @media (min-width: 951px) and (max-width: 1040px) {
    width: 50%;
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
  width: 100%;
  height: 56px;
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;

  padding-left: 60px;

  @media (min-width: 481px) and (max-width: 1050px) {
    width: 80%;
  }
`;

export const InputDuo = styled.input`
  width: 217px;
  height: 56px;
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;

  padding-left: 60px;

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 951px) and (max-width: 1040px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  width: 217px;
  height: 56px;
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 12px;
  padding-left: 60px;

  appearance: none;
  background: url(${arrow}) no-repeat 97.2% center;
  color: #828282;

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 951px) and (max-width: 1040px) {
    width: 100%;
  }
`;

export const Option = styled.option`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #828282;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const ContainerInputs = styled.div`
  width: 465px;

  @media (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 951px) and (max-width: 1040px) {
    width: 80%;
  }
`;

export const ContainerLabelInput = styled.div`
  margin-top: 25px;
`;

export const ContainerInputLeft = styled.div`
  float: left;

  @media (max-width: 480px) {
    width: 48%;
  }

  @media (min-width: 951px) and (max-width: 1040px) {
    width: 48%;
  }
`;

export const ContainerInputRight = styled.div`
  float: right;
  @media (max-width: 480px) {
    width: 48%;
    margin-left: 5px;
  }

  @media (min-width: 951px) and (max-width: 1040px) {
    width: 50%;
    margin-left: 5px;
  }
`;

export const ContainerCheckBox = styled.div`
  margin-top: 110px;
  text-align: left;
  width: 100%;
`;

export const LabelContainer = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #4f4f4f;
`;

export const InputCheckbox = styled.input`
  opacity: 0;
  z-index: 1;
  width: 300px;
  height: 30px;
  position: absolute;
  cursor: pointer;

  & + label {
    position: relative;
    cursor: pointer;
  }

  // Box.
  & + label:before {
    content: "";
    margin-top: -2px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    border: 1px solid #828282;
    border-radius: 4px;
  }

  // Box checked
  &:checked + label:before {
    background: #f2994a;
  }

  // Disabled state label.
  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  // Checkmark. Could be replaced with an image
  &:checked + label:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`;

export const ContainerButton = styled.div`
  margin-top: 30px;
  text-align: right;
  width: 100%;

  @media (min-width: 481px) and (max-width: 950px) {
    width: 80%;
  }
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
            <Select>
              <Option>Your country..</Option>
              <Option value="Afghanistan">Afghanistan</Option>
              <Option value="Albania">Albania</Option>
              <Option value="Algeria">Algeria</Option>
              <Option value="Antarctica">Antarctica</Option>
              <Option value="Antigua and Barbuda">Antigua and Barbuda</Option>
              <Option value="Argentina">Argentina</Option>
              <Option value="Armenia">Armenia</Option>
              <Option value="Aruba">Aruba</Option>
              <Option value="Australia">Australia</Option>
              <Option value="Austria">Austria</Option>
              <Option value="Azerbaijan">Azerbaijan</Option>
              <Option value="Bahamas">Bahamas</Option>
              <Option value="Benin">Benin</Option>
              <Option value="Bermuda">Bermuda</Option>
              <Option value="Bhutan">Bhutan</Option>
              <Option value="Bolivia">Bolivia</Option>
              <Option value="Brunei Darussalam">Brunei Darussalam</Option>
              <Option value="Bulgaria">Bulgaria</Option>
              <Option value="Burkina Faso">Burkina Faso</Option>
              <Option value="Burundi">Burundi</Option>
              <Option value="Cambodia">Cambodia</Option>
              <Option value="Chad">Chad</Option>
              <Option value="Chile">Chile</Option>
              <Option value="China">China</Option>
              <Option value="Christmas Island">Christmas Island</Option>
              <Option value="Cook Islands">Cook Islands</Option>
              <Option value="Costa Rica">Costa Rica</Option>
              <Option value="Cote D'ivoire">Cote D'ivoire</Option>
              <Option value="Croatia">Croatia</Option>
              <Option value="Cuba">Cuba</Option>
              <Option value="Cyprus">Cyprus</Option>
              <Option value="Czech Republic">Czech Republic</Option>
              <Option value="Denmark">Denmark</Option>
              <Option value="Djibouti">Djibouti</Option>
              <Option value="Dominica">Dominica</Option>
              <Option value="Dominican Republic">Dominican Republic</Option>
              <Option value="Ecuador">Ecuador</Option>
              <Option value="Egypt">Egypt</Option>
              <Option value="El Salvador">El Salvador</Option>
              <Option value="France">France</Option>
              <Option value="French Guiana">French Guiana</Option>
              <Option value="French Polynesia">French Polynesia</Option>
              <Option value="Gabon">Gabon</Option>
              <Option value="Gambia">Gambia</Option>
              <Option value="Georgia">Georgia</Option>
              <Option value="Germany">Germany</Option>
              <Option value="Ghana">Ghana</Option>
              <Option value="Gibraltar">Gibraltar</Option>
              <Option value="Greece">Greece</Option>
              <Option value="Greenland">Greenland</Option>
              <Option value="Grenada">Grenada</Option>
              <Option value="Guadeloupe">Guadeloupe</Option>
              <Option value="Guam">Guam</Option>
              <Option value="Guatemala">Guatemala</Option>
              <Option value="Guernsey">Guernsey</Option>
              <Option value="Guinea">Guinea</Option>
              <Option value="Guinea-bissau">Guinea-bissau</Option>
              <Option value="Guyana">Guyana</Option>
              <Option value="Haiti">Haiti</Option>
              <Option value="Hong Kong">Hong Kong</Option>
              <Option value="Hungary">Hungary</Option>
              <Option value="Iceland">Iceland</Option>
              <Option value="India">India</Option>
              <Option value="Indonesia">Indonesia</Option>
              <Option value="Isle of Man">Isle of Man</Option>
              <Option value="Israel">Israel</Option>
              <Option value="Italy">Italy</Option>
              <Option value="Jamaica">Jamaica</Option>
              <Option value="Japan">Japan</Option>
              <Option value="Jersey">Jersey</Option>
              <Option value="Jordan">Jordan</Option>
              <Option value="Kazakhstan">Kazakhstan</Option>
              <Option value="Kenya">Kenya</Option>
              <Option value="Kiribati">Kiribati</Option>
              <Option value="Latvia">Latvia</Option>
              <Option value="Lebanon">Lebanon</Option>
              <Option value="Lesotho">Lesotho</Option>
              <Option value="Liberia">Liberia</Option>
              <Option value="Madagascar">Madagascar</Option>
              <Option value="Malawi">Malawi</Option>
              <Option value="Malaysia">Malaysia</Option>
              <Option value="Maldives">Maldives</Option>
              <Option value="Mali">Mali</Option>
              <Option value="Malta">Malta</Option>
              <Option value="Marshall Islands">Marshall Islands</Option>
              <Option value="Martinique">Martinique</Option>
              <Option value="Mauritania">Mauritania</Option>
              <Option value="Mauritius">Mauritius</Option>
              <Option value="Mayotte">Mayotte</Option>
              <Option value="Mexico">Mexico</Option>
              <Option value="Moldova, Republic of">Moldova, Republic of</Option>
              <Option value="Monaco">Monaco</Option>
              <Option value="Mongolia">Mongolia</Option>
              <Option value="Montenegro">Montenegro</Option>
              <Option value="Montserrat">Montserrat</Option>
              <Option value="Morocco">Morocco</Option>
              <Option value="Mozambique">Mozambique</Option>
              <Option value="Myanmar">Myanmar</Option>
              <Option value="Namibia">Namibia</Option>
              <Option value="Nauru">Nauru</Option>
              <Option value="Nepal">Nepal</Option>
              <Option value="Netherlands">Netherlands</Option>
              <Option value="Netherlands Antilles">Netherlands Antilles</Option>
              <Option value="New Caledonia">New Caledonia</Option>
              <Option value="New Zealand">New Zealand</Option>
              <Option value="Nicaragua">Nicaragua</Option>
              <Option value="Niger">Niger</Option>
              <Option value="Norway">Norway</Option>
              <Option value="Oman">Oman</Option>
              <Option value="Peru">Peru</Option>
              <Option value="Philippines">Philippines</Option>
              <Option value="Pitcairn">Pitcairn</Option>
              <Option value="Poland">Poland</Option>
              <Option value="Portugal">Portugal</Option>
              <Option value="Puerto Rico">Puerto Rico</Option>
              <Option value="Qatar">Qatar</Option>
              <Option value="Reunion">Reunion</Option>
              <Option value="Romania">Romania</Option>
              <Option value="Russian Federation">Russian Federation</Option>
              <Option value="Rwanda">Rwanda</Option>
              <Option value="Saint Helena">Saint Helena</Option>
              <Option value="Saudi Arabia">Saudi Arabia</Option>
              <Option value="Senegal">Senegal</Option>
              <Option value="Serbia">Serbia</Option>
              <Option value="Seychelles">Seychelles</Option>
              <Option value="Sierra Leone">Sierra Leone</Option>
              <Option value="Singapore">Singapore</Option>
              <Option value="Slovakia">Slovakia</Option>
              <Option value="Slovenia">Slovenia</Option>
              <Option value="Solomon Islands">Solomon Islands</Option>
              <Option value="Somalia">Somalia</Option>
              <Option value="South Africa">South Africa</Option>
              <Option value="Spain">Spain</Option>
              <Option value="Sri Lanka">Sri Lanka</Option>
              <Option value="Sudan">Sudan</Option>
              <Option value="Suriname">Suriname</Option>
              <Option value="Swaziland">Swaziland</Option>
              <Option value="Sweden">Sweden</Option>
              <Option value="Switzerland">Switzerland</Option>
              <Option value="Thailand">Thailand</Option>
              <Option value="Timor-leste">Timor-leste</Option>
              <Option value="Togo">Togo</Option>
              <Option value="Tokelau">Tokelau</Option>
              <Option value="Tonga">Tonga</Option>
              <Option value="Trinidad and Tobago">Trinidad and Tobago</Option>
              <Option value="Tunisia">Tunisia</Option>
              <Option value="Turkey">Turkey</Option>
              <Option value="Turkmenistan">Turkmenistan</Option>
              <Option value="Tuvalu">Tuvalu</Option>
              <Option value="Uganda">Uganda</Option>
              <Option value="Ukraine">Ukraine</Option>
              <Option value="United Arab Emirates">United Arab Emirates</Option>
              <Option value="United Kingdom">United Kingdom</Option>
              <Option value="United States">United States</Option>
              <Option value="Uruguay">Uruguay</Option>
              <Option value="Vanuatu">Vanuatu</Option>
              <Option value="Venezuela">Venezuela</Option>
              <Option value="Wallis and Futuna">Wallis and Futuna</Option>
              <Option value="Western Sahara">Western Sahara</Option>
              <Option value="Yemen">Yemen</Option>
              <Option value="Zambia">Zambia</Option>
              <Option value="Zimbabwe">Zimbabwe</Option>
            </Select>
          </ContainerInputLeft>
          <ContainerInputRight>
            <Label>Postal code</Label>
            <i class="material-icons">markunread_mailbox</i>
            <InputDuo type="email" placeholder="Your postal code.." />
          </ContainerInputRight>
        </ContainerInputs>
        <ContainerCheckBox>
          <InputCheckbox type="checkbox" />
          <LabelContainer for="styled-checkbox-2">
            Save this information for next time
          </LabelContainer>
        </ContainerCheckBox>
        <ContainerButton>
          <Button>Continue</Button>
        </ContainerButton>
      </Form>
    </Container>
  );
};

export default PurchaseDataForm;
