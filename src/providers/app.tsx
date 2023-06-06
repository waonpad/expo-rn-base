import * as React from 'react';

import { Text, View, Button } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { QueryClientProvider } from 'react-query';

import { AuthProvider } from '@/lib/auth';
import { queryClient } from '@/lib/react-query';

interface FallbackProps {
  error: Error;
  resetError: () => void;
}

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetError }) => {
  // Sentry.captureException(error);

  // テスト用
  return (
    <View>
      <Text>エラーが発生しました</Text>
      <Text>{error.toString()}</Text>
      <Button onPress={resetError} title={'Try again'} />
    </View>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
