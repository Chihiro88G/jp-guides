import { ReactNode } from 'react';

import { AppBar, Container, Toolbar } from '@mui/material';

type NavContainerProps = {
  children: ReactNode;
  component: 'header' | 'footer'
}

// container for header and footer
export default function NavContainer({ children, component }: NavContainerProps) {
  return (
    <AppBar position="static" component={component} style={{ boxShadow: 'none'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
}