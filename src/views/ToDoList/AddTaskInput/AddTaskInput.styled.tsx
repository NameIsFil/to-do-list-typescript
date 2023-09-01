import { styled } from '@mui/material';

export const InputBar = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;
export const InputBox = styled('input')`
  margin: 0;
  width: 352px;
  padding: 8px 25px;
  border-radius: 10px 0 0 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  outline: none;
  border:none;
  &:hover {
    width: 380px;
    outline: purple;
    border:purple;
  }
`;

export const InputButton = styled('button')`
  margin: 0;
  width: 63px;
  padding: 10px;
  border-radius: 0 10px 10px 0;
  background-color: #d64161;
  color: #f2f2f2;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  outline: none;
  border:none;
  cursor: pointer;
`;
export const InputRow = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 14px;
  box-sizing: border-box;
  transition: .5s;
`;