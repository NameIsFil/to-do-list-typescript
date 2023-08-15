import IconButton from '@mui/material/IconButton';
import {styled} from "@mui/material/styles";

export const Title = styled(IconButton)`
  color: #f2f2f2;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const TaskCardContainer = styled('div')`
  background-color: #141218;
  width: 256px;
  padding: 8px;
  margin-bottom: 14px;
  margin-right: 8px;
`;

export const TopBar = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TypographyLineLonger = styled('div')`
  height: 1px;
  background-color: #49454F;
  margin: 10px 0px;
`;

export const ButtonBar = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

export const ButtonPreview = styled('div')`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const TaskText = styled('p')`
  margin-left: 5px;
  inline-size: 200px;
  overflow-wrap: break-word;
  color: #E6E0E9;
  line-height: 20px;
`;