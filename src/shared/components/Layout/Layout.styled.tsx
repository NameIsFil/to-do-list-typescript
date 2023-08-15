import { Box, styled } from '@mui/material';

export const LayoutContainer = styled(Box)`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export const ContentContainer = styled(Box)(
  ({ theme }) => `
  height: calc(100% - ${theme.variables.headerHeight});
`
);
