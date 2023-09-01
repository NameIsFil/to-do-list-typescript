import {styled} from "@mui/material/styles";

export const TopBar = styled('div')`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const LogoBar = styled('div')`
  display: flex;
  margin-left: 3%;
`;

export const Logo = styled('div')`
  width: 26px;
  //background-image: url("../../../../assets/logo.png");
  background-image: url("src/assets/logo.png");
  background-size: 100%;
  background-repeat: no-repeat;
  margin-right: 16px;
`;

export const LogoText = styled('p')`
  padding: 0px;
  margin: 0px;
  font-size: 26px;
  color: #f2f2f2;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;