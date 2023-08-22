import { styled } from '@mui/material';

export const InputBar = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;
export const InputBox = styled('input')`
  margin: 0px;
  width: 352px;
  padding: 8px 25px;
  border-radius: 10px 0px 0px 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  outline: none;
  border:none;
`;
export const InputButton = styled('input')`
  margin: 0px;
  width: 63px;
  padding: 10px;
  border-radius: 0px 10px 10px 0px;
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
  display: inline-block;
  font-size: 14px;
  box-sizing: border-box;
  transition: .5s;
`;