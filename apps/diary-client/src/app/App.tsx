import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary, ThemeProvider } from '~components';
import { AppRouter } from '~routes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        {/* TODO: null -> Loading screen */}
        <Suspense fallback={null}>
          <ThemeProvider>
            <RouterProvider router={AppRouter} />;
          </ThemeProvider>
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
