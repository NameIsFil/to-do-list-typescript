import {styled} from "@mui/material/styles";

export const DesktopBackground = styled('div')`
  min-height: 100vh;
  background-color: #141218;
`;

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
  background-image: url("../images/logo.png");
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

export const BottomBar = styled('div')`
  
`;

export const InputField = styled('div')`
  margin-top: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled('h1')`
  color: #f2f2f2;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const TypographyLine = styled('div')`
  background-color: #E6E0E9;
  height: 1px;
  width: 208px;
  margin-bottom: 29px;
`;

export const ColumnsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


// @media screen and (max-width: 1130px){
// .toDoList {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//     }
// }

