import { FC, PropsWithChildren } from 'react';
import {
  ContentContainer,
} from './Layout.styled';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <ContentContainer>{children}</ContentContainer>
  );
};
