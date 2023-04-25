import React, { ReactElement } from 'react';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import { HomeScreenFactory } from 'src/main/factories/Home';
import { Theme } from 'src/presentation/theme/theme';

export const client = new QueryClient();

export default function App(): ReactElement {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={Theme}>
        <HomeScreenFactory />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
