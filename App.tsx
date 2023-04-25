import React, { ReactElement } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import { HomeScreen } from 'src/presentation/screens/Home';
import { Theme } from 'src/presentation/theme/theme';

export const client = new QueryClient();

export default function App(): ReactElement {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={Theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <HomeScreen />
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
