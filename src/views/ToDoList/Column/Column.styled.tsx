import {styled} from "@mui/material/styles";

export const ColumnTile = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 310px;
  height: 558px;
  background: #2B2930;
  border-radius: 20px;
  margin: 0px 25px;
`;

export const ColumnTitleContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 66px;
`;

export const ColumnTitle = styled('h1')`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #E6E0E9;
`;

export const TasksColumn = styled('div')`
  height: 465px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const TypographyLineColumn = styled('div')`
  width: 300px;
  height: 1px;
  background-color: #49454F;
  margin-bottom: 14px;
`;