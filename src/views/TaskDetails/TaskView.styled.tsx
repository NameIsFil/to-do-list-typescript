import { styled } from "@mui/material/styles";
import BackspaceIcon from '@mui/icons-material/Backspace';

export const BackButton = styled(BackspaceIcon)`
  padding: 0px;
  margin: 0px;
  font-size: 26px;
  color: #f2f2f2;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const Background = styled('div')`
  min-height: 100vh;
  background-color: #141218;
`;

export const Container = styled('div')`
  margin: 180px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TaskCard = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 512px;
  background: #2B2930;
  border-radius: 20px;
`;

export const TaskCardTitle = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 66px;
`;

export const TaskTitle = styled('h2')`
  color: #f2f2f2;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 50px;
`;

export const Divider = styled('div')`
  width: 380px;
  height: 1px;
  background-color: #49454F;
`;

export const ButtonBar = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 305px;
`;

export const TaskCardContent = styled('div')`
  width: 305px;
  height: 375px;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

export const Paragraph = styled('p')`
  
  color: #f2f2f2;
  font-size: 16px;
`;