import { Box } from '@mui/material';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};
export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
